// src/Footer.js
import './Information.css';


import React from 'react';
import BurnedTokens from './BurnedTokens';
import PriceToken from './PriceToken';
//@ts-ignore
import HowToBuyPDF from '../utils/how_to_buy.pdf';
import Contributors from './contributors';

const Information = () => {
  return (
    <>
      <div className='container information  py-5'>
        <div className='row py-5'>
          <div className='col-md-7'>
            <h2 className='feature pb-4'>
              What is <span>Spore Finance</span>
            </h2>
            <p className='lead'>
              Spore Finance aims to create an ecosystem combining 
            </p>
            <ul className='lead'>
                <li><b>reflect tokens</b></li>
                <li><b>algorithmically generated NFTs</b></li>
                <li><b>next-gen NFT prediction market</b></li>
            </ul>    
            <blockquote className='lead'>
              Meet Spore <img width="52px" height="52px" className='img-fluid' alt='Burn Token' src='spore_256.png' />
            </blockquote>

            <div className='lead larger'>
              <PriceToken></PriceToken>
            </div>            
            <dl className='lead'>
              
              <dd>On Every <img height="30px" width="30px" 
                src='avalanche-logo.png' alt='Avalanche Network'></img> Transaction</dd>
              <dt>3% of rewards are burnt</dt>
              <dt>3% are redistributed to hodlers</dt>
              <dd>On Every <img height="30px" width="30px" src='binance-logo.png' alt="Binance Smart Chain"></img> Transaction</dd>              
              <dt>6% of rewards are burnt</dt>
            </dl>

            <p className='lead'>
              Earn frictionless rewards while spore spreads!              
            </p>
            <p className='lead'>
              BSC users enjoy ever decreasing circulating supply.
            </p>            
          </div>
          <div className='col-md-5 text-right'>
            <img className='img-fluid' alt='Mushroom' src='mushroom.png' />
          </div>
        </div>
      </div>
      <section className='bg-white'>
        <div className='container information  py-5'>
          <div className='row py-5'>
            <div className='col-md-5 pb-3 text-sm-center'>
              <img className='img-fluid' alt='Burn Token' src='spore_256.png' />
            </div>
            <div className='col-md-7 text-left'>
              <h2 className='feature'>Tokeneconomics</h2>
              <ul className='list-unstyled'>
                <li> Dev fund : 0%</li>
                <li>
                  Total Supply : <b>100,000,000,000,000,000</b> SPORE
                </li>
                <>
                  <BurnedTokens />
                </>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white-darker pb-5'>
        <div className='container information py-5'>
          <div className='row py-4'>
            <div className='col-md-12 text-center'>
              <h2 className='feature'>Roadmap</h2>
            </div>
          </div>
          <div className='row align-items-center how-it-works d-flex'>
            <div className='col-2 text-center bottom d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>1</div>
            </div>
            <div className='col-6'>
              <h5>Fair and stealth launch </h5>
              <p>
                <i className='fa fa-check'></i> 18 March 2021
              </p>
            </div>
          </div>
          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner top-right'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner left-bottom'></div>
            </div>
          </div>

          <div className='row align-items-center justify-content-end how-it-works d-flex'>
            <div className='col-6 text-right'>
              <h5>Setting up Airdrops & Incentive program </h5>
              <p>
                <i className='fa fa-check'></i> 20 March 2021
              </p>
            </div>
            <div className='col-2 text-center full d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>2</div>
            </div>
          </div>

          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner right-bottom'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner top-left'></div>
            </div>
          </div>

          <div className='row align-items-center how-it-works d-flex'>
            <div className='col-2 text-center full-left d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>3</div>
            </div>
            <div className='col-6'>
              <h5>Second layer blockchain development + Bridge (Binance Smart Chain)</h5>
              <p>
              <i className='fa fa-check'></i> 6 April 2021
              </p>
            </div>
          </div>

          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner top-right'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner left-bottom'></div>
            </div>
          </div>

          <div className='row align-items-center justify-content-end how-it-works d-flex'>
            <div className='col-6 text-right'>
              <h5>Farming Partnerships</h5>
              <p>
                <i className='fa fa-check'></i> 12 April 2021
              </p>
            </div>
            <div className='col-2 text-center full d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>4</div>
            </div>
          </div>



          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner right-bottom'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner top-left'></div>
            </div>
          </div>


          <div className='row align-items-center how-it-works d-flex'>
            <div className='col-2 text-center full-left d-inline-flex justify-content-center align-items-center'>
                <div className='circle font-weight-bold'>5</div>
            </div>
                <div className='col-6'>
                  <h5>Algorithmically generated NFTs </h5>
                  <p>
                      In Progress <i className='fa fa-spinner'></i>
                  </p>
                </div>
           </div>


          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner top-right'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner left-bottom'></div>
            </div>
          </div>

          <div className='row align-items-center justify-content-end how-it-works d-flex'>
            <div className='col-6 text-right'>
              <h5>Governance </h5>
              <p>
                In Progress <i className='fa fa-spinner'></i>
              </p>
            </div>
            <div className='col-2 text-center full d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>6</div>
            </div>
          </div>

          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner right-bottom'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner top-left'></div>
            </div>
          </div>

          <div className='row align-items-center how-it-works d-flex'>
            <div className='col-2 text-center full-left d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>7</div>
            </div>
            <div className='col-6'>
              <h5>Cross-chain compatibility</h5>
              <p>
                Q3 2021 <i className='fa fa-spinner'></i>
              </p>
            </div>
          </div>

          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner top-right'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner left-bottom'></div>
            </div>
          </div>

          <div className='row align-items-center justify-content-end how-it-works d-flex'>
            <div className='col-6 text-right'>
              <h5>NFTs Prediction Market</h5>
              <p>
                Q4 2021 <i className='fa fa-spinner'></i>
              </p>
            </div>
            <div className='col-2 text-center top-right d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>8</div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white pb-5'>
        <div className='container information py-5'>
          <div className='row py-4'>
            <div className='col-md-12 text-center'>
              <h2 className='feature'>Developers</h2>
            </div>            
          </div>
          <div className='row'>
            <>
              <Contributors />
            </>
          </div>
        </div>
      </section>
      <div className='container information pt-5'>
        <div className='row py-5'>
          <div className='col-md-12 text-center'>
            <h2 className='feature pb-4'>Links</h2>
              <div className="info">
                <div className="row social-links">
                  <a
                    href='https://t.me/joinchat/BN0YR2yy2cU1ZWJk'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary mx-1 mb-2 fas fa-paper-plane'
                  >
                  </a>
                  <a
                    href='https://www.reddit.com/r/SporeFinance/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary mx-1 mb-2 fab fa-reddit'
                  >
                  </a>
                  <a
                    href='https://discord.gg/hYDnmyadJC'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary mx-1 mb-2 fab fa-discord'
                  >
                  </a>
                  <a
                    href='https://twitter.com/SporeFinance'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary mx-1 mb-2 fab fa-twitter'
                  >
                  </a>
                  <a
                    href='https://www.facebook.com/groups/sporefinanceofficial'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary mx-1 mb-2 fab fa-facebook'
                  >
                  </a>
                  <a
                    href='https://instagram.com/Sporefinance'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary mx-1 mb-2 fab fa-instagram'
                  >
                  </a>
                  <a
                    href='https://sporefinance.medium.com/spore-finance-fair-launch-7f048d01e85d'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary mx-1 mb-2 fab fa-medium-m'
                  >
                  </a>
                  <a
                    href='https://github.com/SporeFinance'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary mx-1 mb-2 fab fa-github'
                  >
                  </a>
                </div>
                <div className="row social-links">
                  <a
                    href='https://cchain.explorer.avax.network/address/0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985/transactions'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary mx-1 mb-2 zeros'
                  >
                  AVAX Token address
                  </a>
                  <a
                    href='https://bscscan.com/token/0x33a3d962955a3862c8093d1273344719f03ca17c'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary mx-1 mb-2'
                  >
                  BSC Token address
                  </a>            
                </div>
                <div className="row social-links">
                  <a
                    href='https://cchain.explorer.avax.network/tx/0x7df1694004dd6e994d31f76c3978718e017fe6e6112482866051aca7ab90caa6/token-transfers'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary mx-1 mb-2'
                  >
                  2.5% of supply burnt tx
                  </a>
                  <a
                    href='https://cchain.explorer.avax.network/tx/0xe3e92326e2993a270a2fdd44a7301e6adccb7dd1b40bcc4ed9ed88ec963a22ab/token-transfers'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary mx-1 mb-2'
                  >
                  LP-burnt tx
                  </a>
                </div>
                <div className="row social-links">
                  <a
                    href='https://cchain.explorer.avax.network/address/0x88Dd784dFaaB1a7752d2CC81071Fcd12C1c4E1db/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary mx-1 mb-2'
                  >
                  DEV wallet address
                  </a>
                  <a
                    href='https://cchain.explorer.avax.network/tx/0x5fa10181e6c9841aa2226b5468e2b92f0268feaf178626472428e9839ab76982/internal-transactions'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary mx-1 mb-2'
                  >
                  Renounced ownership tx
                  </a>
                </div>
                <div className="row social-links">
                  <a
                    href='https://www.youtube.com/watch?v=wK4vvE44Pfw'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary mx-1 mb-2'
                  >
                  How to buy (VIDEO)
                  </a>
                  <a
                    href={HowToBuyPDF}
                    download
                    rel='noopener noreferrer'
                    className='btn btn-primary mx-1 mb-2'
                  >
                  How to buy (PDF)
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Information
