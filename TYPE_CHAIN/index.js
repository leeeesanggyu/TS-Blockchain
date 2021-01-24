"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        // this.timestamp = timestamp;
    }
}
// public timestamp: number;
Block.calculateBlockHash = (index, previousHash, data) => CryptoJS.SHA256(index + previousHash + data).toString();
const genesisBlock = new Block(0, "2020202020202020", "", "Hello");
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLatestBLock = () => blockchain[blockchain.length - 1];
// const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBLock();
    const newIndex = previousBlock.index + 1;
    // const newTimeStamp: number = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, 
    // newTimeStamp,
    data);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, 
    // newTimeStamp, 
    data);
    return newBlock;
};
console.log(createNewBlock("hello"), createNewBlock("bye bye"));
//# sourceMappingURL=index.js.map