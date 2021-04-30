import React, { useState } from 'react';
import Web3 from 'web3';
//@ts-ignore
import { ethers } from "ethers";

import './BSCBridge.css';
import { useEffect } from 'react';

const win = window as any
const docu = document as any

const connectMetaMask = async () => {
    if (win.ethereum) {
        win.web3 = new Web3(win.ethereum);
        win.ethereum.enable();
    } else { console.log("Already connected to MetaMask") }
}

const getNetworkId = async () => {
    const networks = new Map();
    networks.set("97", "BSC Testnet")
    networks.set("56", "Binance Smart Chain")
    networks.set("43114", "Avalanche")
    networks.set("43113", "Fuji Testnet")
    return "Network : " + networks.get(win.ethereum.networkVersion);
}

const approve = async () => {
    const SporeAddress = "0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985";
    const SporeABI = [{ "type": "constructor", "stateMutability": "nonpayable", "inputs": [] }, { "type": "event", "name": "Approval", "inputs": [{ "type": "address", "name": "owner", "internalType": "address", "indexed": true }, { "type": "address", "name": "spender", "internalType": "address", "indexed": true }, { "type": "uint256", "name": "value", "internalType": "uint256", "indexed": false }], "anonymous": false }, { "type": "event", "name": "OwnershipTransferred", "inputs": [{ "type": "address", "name": "previousOwner", "internalType": "address", "indexed": true }, { "type": "address", "name": "newOwner", "internalType": "address", "indexed": true }], "anonymous": false }, { "type": "event", "name": "Transfer", "inputs": [{ "type": "address", "name": "from", "internalType": "address", "indexed": true }, { "type": "address", "name": "to", "internalType": "address", "indexed": true }, { "type": "uint256", "name": "value", "internalType": "uint256", "indexed": false }], "anonymous": false }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "allowTradeAt", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "allowance", "inputs": [{ "type": "address", "name": "owner", "internalType": "address" }, { "type": "address", "name": "spender", "internalType": "address" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "approve", "inputs": [{ "type": "address", "name": "spender", "internalType": "address" }, { "type": "uint256", "name": "amount", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "balanceOf", "inputs": [{ "type": "address", "name": "account", "internalType": "address" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint8", "name": "", "internalType": "uint8" }], "name": "decimals", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "decreaseAllowance", "inputs": [{ "type": "address", "name": "spender", "internalType": "address" }, { "type": "uint256", "name": "subtractedValue", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "enableFairLaunch", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "excludeAccount", "inputs": [{ "type": "address", "name": "account", "internalType": "address" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "includeAccount", "inputs": [{ "type": "address", "name": "account", "internalType": "address" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "increaseAllowance", "inputs": [{ "type": "address", "name": "spender", "internalType": "address" }, { "type": "uint256", "name": "addedValue", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "isExcluded", "inputs": [{ "type": "address", "name": "account", "internalType": "address" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "string", "name": "", "internalType": "string" }], "name": "name", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address", "name": "", "internalType": "address" }], "name": "owner", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "reflect", "inputs": [{ "type": "uint256", "name": "tAmount", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "reflectionFromToken", "inputs": [{ "type": "uint256", "name": "tAmount", "internalType": "uint256" }, { "type": "bool", "name": "deductTransferFee", "internalType": "bool" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "renounceOwnership", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "string", "name": "", "internalType": "string" }], "name": "symbol", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "tokenFromReflection", "inputs": [{ "type": "uint256", "name": "rAmount", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "totalFees", "inputs": [] }, { "type": "function", "stateMutability": "pure", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "totalSupply", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "transfer", "inputs": [{ "type": "address", "name": "recipient", "internalType": "address" }, { "type": "uint256", "name": "amount", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "transferFrom", "inputs": [{ "type": "address", "name": "sender", "internalType": "address" }, { "type": "address", "name": "recipient", "internalType": "address" }, { "type": "uint256", "name": "amount", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "transferOwnership", "inputs": [{ "type": "address", "name": "newOwner", "internalType": "address" }] }];
    const AvaxBridgeAdress = "0x1aFCEF48379ECad5a6D790cE85ad1c87458C0f07";
    const SporeContract = new win.web3.eth.Contract(
        SporeABI,
        SporeAddress
    );
    var account = await win.web3.eth.getAccounts();
    account = account[0];
    var amount = docu.getElementById("spores").value
    var integer = ethers.BigNumber.from(amount.slice(0, amount.indexOf('.'))).mul(10 ** 9);
    console.log(integer)
    try {
        await SporeContract.methods
            .approve(AvaxBridgeAdress, integer)
            .send({ from: account, gasPrice: 225000000000 });
    } catch (error) {
        alert(error);
    }
}

const swapFromAVAX = async () => {
    const AvaxBridgeAdress = "0x1aFCEF48379ECad5a6D790cE85ad1c87458C0f07";
    const AvaxBridgeABI = [{ "type": "constructor", "stateMutability": "nonpayable", "inputs": [{ "type": "address", "name": "_token", "internalType": "address" }, { "type": "uint256", "name": "_fees", "internalType": "uint256" }] }, { "type": "event", "name": "OwnershipTransferred", "inputs": [{ "type": "address", "name": "previousOwner", "internalType": "address", "indexed": true }, { "type": "address", "name": "newOwner", "internalType": "address", "indexed": true }], "anonymous": false }, { "type": "event", "name": "Transfer", "inputs": [{ "type": "address", "name": "from", "internalType": "address", "indexed": false }, { "type": "address", "name": "to", "internalType": "address", "indexed": false }, { "type": "uint256", "name": "amount", "internalType": "uint256", "indexed": false }, { "type": "uint256", "name": "date", "internalType": "uint256", "indexed": false }, { "type": "uint256", "name": "nonce", "internalType": "uint256", "indexed": false }, { "type": "uint256", "name": "percent", "internalType": "uint256", "indexed": false }, { "type": "uint8", "name": "step", "internalType": "enum BridgeSporeAVAX.Step", "indexed": true }], "anonymous": false }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address", "name": "", "internalType": "address" }], "name": "admin", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "balance", "inputs": [] }, { "type": "function", "stateMutability": "payable", "outputs": [], "name": "burn", "inputs": [{ "type": "uint256", "name": "amount", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "changeFees", "inputs": [{ "type": "uint256", "name": "newFees", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "fees", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "mint", "inputs": [{ "type": "address", "name": "to", "internalType": "address" }, { "type": "uint256", "name": "amount", "internalType": "uint256" }, { "type": "uint256", "name": "otherChainNonce", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "mintAndSwapForAVAX", "inputs": [{ "type": "address", "name": "to", "internalType": "address" }, { "type": "uint256", "name": "amount", "internalType": "uint256" }, { "type": "uint256", "name": "otherChainNonce", "internalType": "uint256" }, { "type": "uint256", "name": "percentSold", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "nonce", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address", "name": "", "internalType": "address" }], "name": "owner", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address", "name": "", "internalType": "address" }], "name": "pangoRouter", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "processedNonces", "inputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "renounceOwnership", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address", "name": "", "internalType": "address" }], "name": "spore", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address", "name": "", "internalType": "contract IERC20" }], "name": "token", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "transferOwnership", "inputs": [{ "type": "address", "name": "newOwner", "internalType": "address" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address", "name": "", "internalType": "address" }], "name": "wavax", "inputs": [] }];
    const AvaxBridgeContract = new win.web3.eth.Contract(AvaxBridgeABI, AvaxBridgeAdress);
    var account = await win.web3.eth.getAccounts();
    account = account[0];
    var amount = docu.getElementById("spores").value
    var integer = ethers.BigNumber.from(amount.slice(0, amount.indexOf('.'))).mul(10 ** 9);
    var fees = ethers.BigNumber.from("30000000000000000")
    try {
        await AvaxBridgeContract.methods
            .burn(integer)
            .send({ from: account, gasPrice: 225000000000, value: fees });
    } catch (error) {
        alert(error);
    }
}

const swapFromBSC = async () => {
    const BscBridgeAdress = "0x638E8FE7AD4D9C05735Ecb6b9c66013679276651";
    const BscBridgeABI = [{ "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint256", "name": "_fees", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "date", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "percent", "type": "uint256" }, { "indexed": true, "internalType": "enum BridgeSporeBSC.Step", "name": "step", "type": "uint8" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "admin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "percent", "type": "uint256" }], "name": "burnAndSwap", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newFees", "type": "uint256" }], "name": "changeFees", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "fees", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "otherChainNonce", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "nonce", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "processedNonces", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IToken", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
    const BscBridgeContract = new win.web3.eth.Contract(BscBridgeABI, BscBridgeAdress);
    var account = await win.web3.eth.getAccounts();
    account = account[0];
    var amount = docu.getElementById("spores2").value
    var integer = ethers.BigNumber.from(amount.slice(0, amount.indexOf('.'))).mul(10 ** 9);
    var fees = ethers.BigNumber.from("5000000000000000")
    try {
        if (docu.getElementById("checkbox").checked) {
            var percent = 10;
            await BscBridgeContract.methods
                .burnAndSwap(account, integer, percent)
                .send({ from: account, value: fees });
        } else {
            await BscBridgeContract.methods
                .burn(account, integer)
                .send({ from: account, value: fees });
        }
    } catch (error) {
        alert(error);
    }
}


const getSporeInWalletAVAX = async () => {
    const SporeAddress = "0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985";
    const SporeABI = [{ "type": "constructor", "stateMutability": "nonpayable", "inputs": [] }, { "type": "event", "name": "Approval", "inputs": [{ "type": "address", "name": "owner", "internalType": "address", "indexed": true }, { "type": "address", "name": "spender", "internalType": "address", "indexed": true }, { "type": "uint256", "name": "value", "internalType": "uint256", "indexed": false }], "anonymous": false }, { "type": "event", "name": "OwnershipTransferred", "inputs": [{ "type": "address", "name": "previousOwner", "internalType": "address", "indexed": true }, { "type": "address", "name": "newOwner", "internalType": "address", "indexed": true }], "anonymous": false }, { "type": "event", "name": "Transfer", "inputs": [{ "type": "address", "name": "from", "internalType": "address", "indexed": true }, { "type": "address", "name": "to", "internalType": "address", "indexed": true }, { "type": "uint256", "name": "value", "internalType": "uint256", "indexed": false }], "anonymous": false }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "allowTradeAt", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "allowance", "inputs": [{ "type": "address", "name": "owner", "internalType": "address" }, { "type": "address", "name": "spender", "internalType": "address" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "approve", "inputs": [{ "type": "address", "name": "spender", "internalType": "address" }, { "type": "uint256", "name": "amount", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "balanceOf", "inputs": [{ "type": "address", "name": "account", "internalType": "address" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint8", "name": "", "internalType": "uint8" }], "name": "decimals", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "decreaseAllowance", "inputs": [{ "type": "address", "name": "spender", "internalType": "address" }, { "type": "uint256", "name": "subtractedValue", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "enableFairLaunch", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "excludeAccount", "inputs": [{ "type": "address", "name": "account", "internalType": "address" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "includeAccount", "inputs": [{ "type": "address", "name": "account", "internalType": "address" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "increaseAllowance", "inputs": [{ "type": "address", "name": "spender", "internalType": "address" }, { "type": "uint256", "name": "addedValue", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "isExcluded", "inputs": [{ "type": "address", "name": "account", "internalType": "address" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "string", "name": "", "internalType": "string" }], "name": "name", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address", "name": "", "internalType": "address" }], "name": "owner", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "reflect", "inputs": [{ "type": "uint256", "name": "tAmount", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "reflectionFromToken", "inputs": [{ "type": "uint256", "name": "tAmount", "internalType": "uint256" }, { "type": "bool", "name": "deductTransferFee", "internalType": "bool" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "renounceOwnership", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "string", "name": "", "internalType": "string" }], "name": "symbol", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "tokenFromReflection", "inputs": [{ "type": "uint256", "name": "rAmount", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "totalFees", "inputs": [] }, { "type": "function", "stateMutability": "pure", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "totalSupply", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "transfer", "inputs": [{ "type": "address", "name": "recipient", "internalType": "address" }, { "type": "uint256", "name": "amount", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "transferFrom", "inputs": [{ "type": "address", "name": "sender", "internalType": "address" }, { "type": "address", "name": "recipient", "internalType": "address" }, { "type": "uint256", "name": "amount", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "transferOwnership", "inputs": [{ "type": "address", "name": "newOwner", "internalType": "address" }] }];
    const SporeContract = new win.web3.eth.Contract(
        SporeABI,
        SporeAddress
    );
    var account = await win.web3.eth.getAccounts();
    account = account[0];
    try {
        var spores = await SporeContract.methods.balanceOf(account).call();
        console.log(spores)
        return spores
    } catch (error) {
        console.log(error);
        return 0
    }
}
const getSporeInWalletBSC = async () => {
    const SporeAddress = "0x33A3d962955A3862C8093D1273344719f03cA17C";
    const SporeABI = [{ "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "admin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "burned", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newAdmin", "type": "address" }], "name": "updateAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
    const SporeContract = new win.web3.eth.Contract(
        SporeABI,
        SporeAddress
    );
    var account = await win.web3.eth.getAccounts();
    account = account[0];
    try {
        var spores = await SporeContract.methods.balanceOf(account).call();
        console.log(spores)
        return spores
    } catch (error) {
        console.log(error);
        return 0
    }
}

const setMaxSporeAVAX = async () => {
    var maxSpores = await getSporeInWalletAVAX();
    docu.getElementById("spores").value = maxSpores / 10 ** 9;
}

const setMaxSporeBSC = async () => {
    var maxSpores = await getSporeInWalletBSC();
    docu.getElementById("spores2").value = maxSpores / 10 ** 9;
}

const BSCBridge = () => {
    const [numberOfSporeAVAX, setNumberOfSporeAVAX] = useState(0)
    const [numberOfSporeBSC, setNumberOfSporeBSC] = useState(0)
    const [feesBNB] = useState(0.005)
    const [feesAVAX] = useState(0.03)
    const [network, setNetwork] = useState<any>(<button onClick={connectMetaMask} className="btn btn-light">Connect wallet </button>)

    // network: <button onClick={connectMetaMask} className="btn btn-light">Connect wallet </button>,
    useEffect(() => {
        async function startup() {
            const script = document.createElement("script");
            script.src = "/bscbridge.js";
            script.async = true;
            document.body.appendChild(script);
            connectMetaMask();
            var numberOfSporeAVAX = await getSporeInWalletAVAX() / 10 ** 9;
            var numberOfSporeBSC = await getSporeInWalletBSC() / 10 ** 9;
            var nid = await getNetworkId();
            setNumberOfSporeAVAX(numberOfSporeAVAX)
            setNumberOfSporeBSC(numberOfSporeBSC)
            setNetwork(nid)

        }
        startup()

    }, [])

    return (
        <div className="container py-5" id="bridge">
            <div className="row py-5">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2>AVALANCHE / BSC SPORE BRIDGE</h2>
                        </div>
                        <div className="col-lg-4 text-right">
                            {network}
                        </div>
                    </div>
                    <div className="wrapBridge pt-2">
                        <div className="row rowBridge">
                            <div className="col-lg-6 col-coin pr-lg-0">
                                <div className="card px-lg-5 rounded-0 h-100 avalanche">
                                    <div className="card-body">
                                        <h5 className="card-title"><span>FROM</span> Avalanche </h5>
                                        <p className="card-text">Balance : {numberOfSporeAVAX}</p>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="spores" placeholder="0.0" />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-secondary white" onClick={setMaxSporeAVAX} type="button">MAX</button>
                                            </div>
                                        </div>
                                        <div className="offset-lg-3 col-lg-6 text-center py-1">
                                            <button onClick={approve} className="btn btn-primary" id="approve-btn">APPROVE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-coin pr-lg-0 d-none">
                                <div className="card px-lg-5 rounded-0 h-100 avalanche" id="reverted-1">
                                    <div className="card-body">
                                        <h5 className="card-title"><span>TO </span>  Avalanche </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="arrow"><button className="btn btn-outline-light inverted" id="btn-arrow"><i className="fa fa-arrow-right"></i></button></div>
                            <div className="col-lg-6 col-coin pl-lg-0" id="reverted-2">
                                <div className="card px-lg-5 rounded-0 h-100 binance">
                                    <div className="card-body">
                                        <h5 className="card-title"><span>TO</span> Binance Smart Chain </h5>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-coin pl-lg-0 d-none">
                                <div className="card px-lg-5 rounded-0 h-100 binance">
                                    <div className="card-body">
                                        <h5 className="card-title"><span>FROM</span> Binance Smart Chain </h5>
                                        <p className="card-text">Balance : <span id="balance">{numberOfSporeBSC}</span></p>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="spores2" placeholder="0.0" />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-secondary white" type="button" onClick={setMaxSporeBSC}>MAX</button>
                                            </div>
                                        </div>
                                        <label className="py-2"><input type="checkbox" id="checkbox" name="pay-fees-spore" value="1" /> Swap some SPORE for AVAX (10%) </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="offset-lg-3 col-lg-6 text-center py-4 col-coin">
                                Transfer fees : {feesAVAX} AVAX
                                <button onClick={swapFromAVAX} className="btn btn-primary btn-lg w-100" id="swap-btn">TRANSFER</button>
                            </div>
                            <div className="offset-lg-3 col-lg-6 text-center py-4 col-coin d-none">
                                Transfer fees : {feesBNB} BNB
                                <button onClick={swapFromBSC} className="btn btn-primary btn-lg w-100" id="swap-btn">TRANSFER</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="offset-lg-3 col-lg-6 text-center py-4">
                                <h3>Disclaimer: this is a version alpha. Use at your own risk</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default BSCBridge