import './App.css';
import mush01 from './assets/image0.png' // relative path to image
import mush02 from './assets/image1.png' // relative path to image
import Header from './Header'
import BurnedTokens from "./BurnedTokens";
import Footer from './Footer'
import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import Title from "./components/Title";
import CardComponent from "./components/CardComponent";
import Web3 from "web3";
import {sporeABI} from "./utils/SporeAbi";

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

const TOTAL_SUPPLY = 100000000000000000;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfBurnedTokens: -1
        };
    }

    render() {

        return (
            // <div className="App">
            //
            //   <Information />
            //   <Footer />
            // </div>

            <Parallax ref={ref => (this.parallax = ref)} pages={3}>
                <ParallaxLayer offset={1} speed={1} style={{backgroundColor: '#805E73'}}>
                    1
                    <Title title="Tokeneconomics"/>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={1} style={{backgroundColor: '#87BCDE'}}>
                    <Title title="What is Spore Finance ?"/>
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={0} factor={3}
                               style={{backgroundImage: url('stars', true), backgroundSize: 'cover'}}>
                    3<Header/>
                </ParallaxLayer>

                <ParallaxLayer offset={1.3} speed={-0.3} style={{pointerEvents: 'none'}}>
                    <img src={mush01} style={{width: '15%', marginLeft: '70%'}}/>
                    4
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.8} style={{opacity: 0.1}}>
                    <img src={url('cloud')} style={{display: 'block', width: '20%', marginLeft: '55%'}}/>
                    <img src={url('cloud')} style={{display: 'block', width: '10%', marginLeft: '15%'}}/>
                    5
                </ParallaxLayer>

                <ParallaxLayer offset={1.75} speed={0.5} style={{opacity: 0.1}}>
                    <img src={url('cloud')} style={{display: 'block', width: '20%', marginLeft: '70%'}}/>
                    <img src={url('cloud')} style={{display: 'block', width: '20%', marginLeft: '40%'}}/>
                    6
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} style={{opacity: 0.2}}>
                    <img src={url('cloud')} style={{display: 'block', width: '10%', marginLeft: '10%'}}/>
                    <img src={url('cloud')} style={{display: 'block', width: '20%', marginLeft: '75%'}}/>
                    7
                </ParallaxLayer>

                <ParallaxLayer offset={1.6} speed={-0.1} style={{opacity: 0.4}}>
                    <img src={url('cloud')} style={{display: 'block', width: '20%', marginLeft: '60%'}}/>
                    <img src={url('cloud')} style={{display: 'block', width: '25%', marginLeft: '30%'}}/>
                    <img src={url('cloud')} style={{display: 'block', width: '10%', marginLeft: '80%'}}/>
                    8
                </ParallaxLayer>

                <ParallaxLayer offset={2.6} speed={0.4} style={{opacity: 0.6}}>
                    <img src={url('cloud')} style={{display: 'block', width: '20%', marginLeft: '5%'}}/>
                    <img src={url('cloud')} style={{display: 'block', width: '15%', marginLeft: '75%'}}/>
                    9
                </ParallaxLayer>

                <ParallaxLayer offset={2.5} speed={-0.4} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none'
                }}>
                    <img src={url('earth')} style={{width: '60%'}}/>
                    10
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={-0.3}
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    11

                </ParallaxLayer>

                <ParallaxLayer
                    offset={0}
                    speed={0.1}
                    onClick={() => this.parallax.scrollTo(1)}
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={mush01} style={{width: '20%'}}/>
                    <Title title="Spore Finance"/>
                    <img src={mush02} style={{width: '20%'}}/>
                    12
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={0.2}
                    onClick={() => this.parallax.scrollTo(2)}
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {/*<CardComponent*/}
                    {/*    title="Dev Fund"*/}
                    {/*    style={{flexGrow: 1, width: '20%'}} content=" 0 %"*/}
                    {/*/>*/}
                    <CardComponent
                        title="Tokens"
                        content={
                            [
                                "Total Initial Supply : 100,000,000,000,000,000 SPORE",
                                <br/>,
                                `Number of burned tokens : ${this.state.numberOfBurnedTokens} SPORE`
                            ]
                        }/>
                    {/*// <CardComponent*/}
                    {/*//     title="Percentage"*/}
                    {/*//     style={{flexGrow: 4, width: '20%'}}*/}
                    {/*//     content={*/}
                    {/*//         [*/}
                    {/*//             `% Burned: ${this.state.percentageOfBurnedTokens} %`*/}
                    {/*//         ]*/}
                    {/*//     }/>*/}
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0.9999999}
                    speed={0.3}
                    onClick={() => this.parallax.scrollTo(2)}
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <CardComponent
                        title="Dev Fund"
                        class="aa"
                        content=" 0 %"
                    />
                    <CardComponent
                        title="Percentage"
                        class="bb"
                        content={
                            [
                                `% Burned: ${this.state.percentageOfBurnedTokens} %`
                            ]
                        }/>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={-0}
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                    onClick={() => this.parallax.scrollTo(0)}>
                    14
                    <img src={url('clients-main')} style={{width: '40%'}}/>
                    14
                </ParallaxLayer>
            </Parallax>
        )
    };

    async componentDidMount() {
        await this.getBurnedTokens()
        // Will trigger a refresh every minutes
        setTimeout(async () => {
            await this.getBurnedTokens();
        }, 60000)
    }

    componentWillUnmount() {

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

export default App;
