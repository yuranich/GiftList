const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";

async function main() {
  // TODO: how do we prove to the server we're on the nice list?
  const myName = "Norman Block";
  const index = niceList.findIndex((n) => n === myName);
  const proof = new MerkleTree(niceList).getProof(index);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    participant: myName,
    proof,
  });

  console.log({ gift });
}

main();
