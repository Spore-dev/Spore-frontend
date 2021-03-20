// src/Footer.js
import './BurnedTokens.css'

import React from 'react'
import Web3 from 'web3'
import {sporeABI} from "./utils/SporeAbi";

const TOTAL_SUPPLY = 100000000000000000;

class BurnedTokens extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfBurnedTokens: -1,
            percentageOfBurnedTokens: -1,
        };
    }

    render() {
        return (
            <React.Fragment className="BurnedTokens">
                <li>
                    Burned Tokens : <b>{this.state.numberOfBurnedTokens}</b> SPORE
                </li>
                <li>
                    % of Burned Tokens : <b>{this.state.percentageOfBurnedTokens}</b> %
                </li>
            </React.Fragment>
        )
    }

    async componentDidMount() {
        await this.getBurnedTokens()
        // Will trigger a refresh every minutes
        setTimeout(async () => {
            await this.getBurnedTokens();
        }, 60000)
    }

    async getBurnedTokens() {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
        const sporeERC20 = new window.web3.eth.Contract(sporeABI, "0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985")
        const burnedTokens = await sporeERC20.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call()
        this.setState({
            numberOfBurnedTokens: this.numberWithCommas((burnedTokens / 10 ** 9).toFixed(0)),
            percentageOfBurnedTokens: ((burnedTokens / 10 ** 9) / TOTAL_SUPPLY * 100).toFixed(2)
        })
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

}

export default BurnedTokens
