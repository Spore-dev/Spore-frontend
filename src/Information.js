// src/Footer.js
import './Information.css'

import React from 'react'
import BurnedTokens from "./BurnedTokens";

function Information() {
    return (
        <div className="Information">
            <h1> Tokeneconomics </h1>
            <ul>
                <li> Total Supply : 100,000,000,000,000,000 SPORE</li>
                <li> Dev fund : 0%</li>
                <><BurnedTokens/></>
            </ul>
            <h1> What is Spore Finance </h1>
            <div>
                Spore Finance aims at creating an ecosystem combining reflect tokens, algorithmically generated NFTs
                    and the first NFT prediction market.<br/>
                Amazed by the Avalanche Network first generation of pools, the first phase was to launch one of the
                first reflect tokens there to be.<br/> On every transaction, 3% of the rewards are burnt forever and 3% are
                redistributed to all the owners.<br/> Earn frictionless rewards while your spores spread! Deflation reduces
                the supply increasing the token value over time.
                The vision of the project is the vision of the community. It is going to evolve as spores spread.
            </div>
            <h1> Roadmap </h1>
            <ul>
                <li> 1. Fair and stealth launch (18/03)</li>
                <li> 2. Setting up Airdrops & Incentive program (In Progress)</li>
                <li>3. Farming Partnerships (In Progress)</li>
                <li>4. Algorithmically generated NFTs (Q2)</li>
                <li>6. Governance (Q2)</li>
                <li>7. Second layer blockchain development (Q3)</li>
                <li>8. Cross-chain compatibility (Q3)</li>
                <li>9. NFTs Prediction Market (Q4)</li>
            </ul>
            <h1> Links </h1>
            <ul><a
                href="https://cchain.explorer.avax.network/address/0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985/transactions"
                target="_blank" rel="noopener noreferrer"> Token address </a></ul>
            <ul><a
                href="https://cchain.explorer.avax.network/tx/0x7df1694004dd6e994d31f76c3978718e017fe6e6112482866051aca7ab90caa6/token-transfers"
                target="_blank" rel="noopener noreferrer"> 2.5% of supply burnt tx </a></ul>
            <ul><a
                href="https://cchain.explorer.avax.network/tx/0xe3e92326e2993a270a2fdd44a7301e6adccb7dd1b40bcc4ed9ed88ec963a22ab/token-transfers"
                target="_blank" rel="noopener noreferrer"> LP-burnt tx </a></ul>
            <ul><a href="https://cchain.explorer.avax.network/address/0x88Dd784dFaaB1a7752d2CC81071Fcd12C1c4E1db/"
                   target="_blank" rel="noopener noreferrer"> DEV wallet address </a></ul>
            <ul><a
                href="https://cchain.explorer.avax.network/tx/0x5fa10181e6c9841aa2226b5468e2b92f0268feaf178626472428e9839ab76982/internal-transactions"
                target="_blank" rel="noopener noreferrer"> Renounced ownership tx </a></ul>
            <ul><a href="https://discord.gg/hYDnmyadJC" target="_blank" rel="noopener noreferrer"> Discord </a></ul>
            <ul><a href="https://t.me/joinchat/BN0YR2yy2cU1ZWJk" target="_blank"
                   rel="noopener noreferrer"> Telegram </a></ul>
        </div>
    )
}

export default Information
