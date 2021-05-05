// src/Footer.js
import './BurnedTokens.css';

import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Web3 from 'web3'
import { useEffect } from 'react';

const TOTAL_SUPPLY = 100000000000000000;

const win = window as any
win.web3 = new Web3('https://bsc-dataseed1.binance.org:443')

const BurnedTokens = () => {
  const [numberOfBurnedTokens, setNumberOfBurnedTokens] = useState(-1)
  const [numberOfBurnedTokensBSC, setNumberOfBurnedTokensBSC] = useState(-1)
  const [numberOfTokenHolders, setNumberOfTokenHolders] = useState(-1)
  const [numberOfTokenHoldersBSC, setNumberOfTokenHoldersBSC] = useState(-1)

  useEffect(() => {
    async function getInfos() {
      await getBurnedTokens()
      await getTokenHolders()
      await getBurnedTokensBSC()
      await getTokenHoldersBSC()
      setInterval(async () => {
        await getBurnedTokens()
        await getTokenHolders()
        await getTokenHoldersBSC()
        await getBurnedTokensBSC()
      }, 60000)
    }
    getInfos()

  }, [])

  const getBurnedTokens = async () => {
    try {
      console.log("getting burned tokens")
      const res = await axios.get(
        'https://api.covalenthq.com/v1/43114/address/0x000000000000000000000000000000000000dEaD/balances_v2/?nft=false'
      );

      if (
        res.data !== undefined &&
        res.data.data !== undefined &&
        res.data.data.items !== undefined
      ) {
        const items = res.data.data.items;
        items.forEach((coin: any) => {
          if (coin.contract_address === '0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985') {
            setNumberOfBurnedTokens(coin.balance / (10 ** 9))
          }
        })
      }

    }
    catch (err) {
      console.log("Error getting burned tokens avax")
    }
  }
  const getBurnedTokensBSC = async () => {
    console.log('get burned tokens bsc')
    const SporeAddress = "0x33A3d962955A3862C8093D1273344719f03cA17C";
    const SporeABI = [{ "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "admin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "burned", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newAdmin", "type": "address" }], "name": "updateAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
    const SporeContract = new win.web3.eth.Contract(
      SporeABI,
      SporeAddress
    );
    try {
      console.log("GETTING BURNED TOKENS BSC")
      const burned = await SporeContract.methods.burned().call()
      setNumberOfBurnedTokensBSC(burned / (10 ** 9))

    } catch (error) {
      console.log("CANNOT READ BURNED TOKENS BSC", error)
    }
  }

  const getTokenHolders = async () => {
    console.log("getting token holders avax")
    try {
      const res = await axios.get(
        'https://api.covalenthq.com/v1/43114/tokens/0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985/token_holders/?page-size=999999&key=ckey_a09c56c3188547958bd621253a4'
      )

      if (
        res.data !== undefined &&
        res.data.data !== undefined &&
        res.data.data.items !== undefined
      ) {
        const items = res.data.data.items;
        setNumberOfTokenHolders(items.length)
      }

    }
    catch (err) {
      console.log("errror getting holders avax", err)
    }

  }
  const getTokenHoldersBSC = async () => {
    try {
      const res = await axios.get(
        'https://api.covalenthq.com/v1/56/tokens/0x33a3d962955a3862c8093d1273344719f03ca17c/token_holders/?page-size=99999'
      )

      if (
        res.data !== undefined &&
        res.data.data !== undefined &&
        res.data.data.items !== undefined
      ) {
        const items = res.data.data.items;
        setNumberOfTokenHoldersBSC(items.length)
      }
      else {
        console.log('test')
        console.log(res)
      }
    }
    catch (err) {
      console.log("Error getting token holders bsc")
      ///HARDCODED VALUE
      setNumberOfTokenHoldersBSC(79300)
    }

  }

  const numberWithCommas = (x: number) => {
    return x.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  const burnedTokensPercentage = (burnedAVAX: number, burnedBSC: number): string => {
    return ((burnedAVAX + burnedBSC) / TOTAL_SUPPLY * 100).toFixed(2)

  }
  return (
    <>
      <li>
        Burned Tokens (Avalanche) : <b>{numberWithCommas(numberOfBurnedTokens)}</b> SPORE
      </li>
      <li>
        Burned Tokens (BSC) : <b>{numberWithCommas(numberOfBurnedTokensBSC)}</b> SPORE
      </li>
      <li>
        % of Burned Tokens : <b>{burnedTokensPercentage(numberOfBurnedTokens, numberOfBurnedTokensBSC)}</b> %
      </li>
      <li>
        Number of token holders (Avalanche) : <b>{numberOfTokenHolders}</b>
      </li>
      <li>
        Number of token holders (BSC) : <b>{numberOfTokenHoldersBSC}+. <a className="bscLink" href="https://bscscan.com/token/0x33a3d962955a3862c8093d1273344719f03ca17c">bscscan</a></b>
      </li>
    </>
  );
}


export default BurnedTokens
