import axios from 'axios';
import { useEffect, useState } from 'react';

const PriceToken = () => {
  const [usd, setUsd] = useState({ price: 0, zeros: 0})
  const [avax, setAvax] = useState({ price: '0', zeros: 0})
  const [bnb, setBnb] = useState({ price: '0', zeros: 0})
  const [currency, setCurrency] = useState('usd')

  useEffect(() => {
    async function getInfos() {
      await getPriceToken() 
      setInterval(async () => {
        await getPriceToken()
      }, 300000)
    }
    getInfos()
  }, [])

  const toggleCurrency = () => {
    switch (currency) {
      case 'usd':
        setCurrency('avax')
        break;
      case 'avax':
        setCurrency('bnb')
        break;
      case 'bnb':
        setCurrency('usd')
        break;
      default:
        setCurrency('usd')
        break;
    }
  };


  const getPriceToken = async () => {
    await axios.get('https://api.coingecko.com/api/v3/coins/spore-finance-2/market_chart?vs_currency=usd&days=1')
    .then(res => {
      const {data = null} = res
      if (data) {
        const price = data.prices[data.prices.length -1][data.prices[data.prices.length -1].length -1].toFixed(18)
        const zeros = price.match(/^0.(0)+/g) ? price.match(/^0.(0)+/g)[0].length - 2 : 0
        setUsd({ price, zeros })
      }
    }).catch(error => {
      console.error(error)
    })
    await axios.get('https://api.coingecko.com/api/v3/coins/spore-finance-2?localization=false&tickers=true&market_data=false&community_data=false&developer_data=false&sparkline=false')
    .then(res2 => {
      const {data = null} = res2
      if (data) {
        data.tickers.forEach((ticker: { target: string, last: number }) => {
          if (ticker.target === 'WBNB') {
            const bnb = ticker.last.toFixed(18)
            const zerosBnb = bnb.match(/^0.(0)+/g) ? bnb.match(/^0.(0)+/g)![0].length - 2 : 0
            setBnb({ price: bnb, zeros: zerosBnb })
          }
          if (ticker.target === 'AVAX') {
            const avax = ticker.last.toFixed(18)
            const zerosAvax = avax.match(/^0.(0)+/g) ? avax.match(/^0.(0)+/g)![0].length - 2 : 0
            setAvax({ price: avax, zeros: zerosAvax })
          }
        });
      }
    }).catch(error => {
      console.error(error)
    })
  }

  return (
    <>
      <span className='price'>
        <button
          className='btn btn-primary mx-1 mb-2 larger'
          onClick={toggleCurrency}
          >
          <svg height='18px' viewBox='0 0 8 8' className='icon'>
            <path fill='white' d="M6 0v1h-5c-.554 0-1 .446-1 1v1h1v-1h5v1l2-1.5-2-1.5zm-4 4l-2 1.5 2 1.5v-1h5c.542 0 1-.458 1-1v-1h-1v1h-5v-1z" id="loop"></path>
          </svg>
        </button>
      </span>
        <span className="price">
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary mx-1 mb-2 larger' 
            href={currency === 'avax' 
            ? "https://app.pangolin.exchange/#/swap?inputCurrency=0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985" 
            : "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x33a3d962955a3862c8093d1273344719f03ca17c"}>
              {currency === 'bnb' && (<img className="mr-2" id="cur-logo" height="24px" width="24px" src="binance-logo.png" alt="Binance"></img>)}
              {currency === 'avax' && (<img className="mr-2" id="cur-logo" height="24px" width="24px" src="avalanche-logo.png" alt="Avalanche Network"></img>)}
            {currency === 'usd' ? `💲`+usd.price : currency === 'avax' ? avax.price : bnb.price}
          </a>
        </span>
      <span className="price larger">        
          That's {
            currency === 'usd' ? usd.zeros : currency === 'avax' ? avax.zeros : bnb.zeros} zeros! 🚀
      </span>      
    </>
  );
}

export default PriceToken
