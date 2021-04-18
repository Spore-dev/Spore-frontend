// src/Footer.js
import './BurnedTokens.css';

import React from 'react';
import axios from 'axios';

const TOTAL_SUPPLY = 100000000000000000;

class BurnedTokens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfBurnedTokens: -1,
      percentageOfBurnedTokens: -1,
      numberOfTokenHolders: -1,
      numberOfTokenHoldersBSC: -1
    };
  }

  render() {
    return (
      <>
        <li>
          Burned Tokens : <b>{this.state.numberOfBurnedTokens}</b> SPORE
        </li>
        <li>
          % of Burned Tokens : <b>{this.state.percentageOfBurnedTokens}</b> %
        </li>
        <li>
          Number of token holders : <b>{this.state.numberOfTokenHolders}</b>
        </li>
        <li>
          Number of token holders on BSC : <b>{this.state.numberOfTokenHoldersBSC}</b>
        </li>
      </>
    );
  }

  async componentDidMount() {
    await this.getBurnedTokens();
    await this.getTokenHolders();
    // Will trigger a refresh every minutes
    setTimeout(async () => {
      await this.getBurnedTokens();
      await this.getTokenHolders();
    }, 60000);
  }

  async getBurnedTokens() {
    const res = await axios.get(
      'https://api.covalenthq.com/v1/43114/address/0x000000000000000000000000000000000000dEaD/balances_v2/?nft=false'
    );

    if (
      res.data !== undefined &&
      res.data.data !== undefined &&
      res.data.data.items !== undefined
    ) {
      const items = res.data.data.items;
      items.forEach((coin) => {
        if (
          coin.contract_address === '0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985'
        ) {
          this.setState({
            numberOfBurnedTokens: this.numberWithCommas(
              (coin.balance / 10 ** 9).toFixed(0)
            ),
            percentageOfBurnedTokens: (
              (coin.balance / 10 ** 9 / TOTAL_SUPPLY) *
              100
            ).toFixed(2)
          });
        }
      });
    }
  }

  async getTokenHolders() {
    const res = await axios.get(
      'https://api.covalenthq.com/v1/43114/tokens/0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985/token_holders/?page-size=999999'
    );

    if (
      res.data !== undefined &&
      res.data.data !== undefined &&
      res.data.data.items !== undefined
    ) {
      const items = res.data.data.items;
      this.setState({
        numberOfTokenHolders: items.length
      });
    }
  }

  async getTokenHoldersBSC() {
    const res = await axios.get(
      'https://api.covalenthq.com/v1/56/tokens/0x33a3d962955a3862c8093d1273344719f03ca17c/token_holders/?page-size=999999'
    );

    if (
      res.data !== undefined &&
      res.data.data !== undefined &&
      res.data.data.items !== undefined
    ) {
      const items = res.data.data.items;
      this.setState({
        numberOfTokenHoldersBSC: items.length
      });
    }
  }

  numberWithCommas(x) {
    return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
}

export default BurnedTokens;
