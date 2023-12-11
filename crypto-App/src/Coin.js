import React from "react";
import style from './Coin.module.css';



const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {


  return (
    <div className={style.coincontainer1}>
      <div className={style.coinrow}>
        <div className={style.coin}>
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className={style.coinsymbol}>{symbol}</p>
        </div>
        <div className={style.coindata}>
          <p className={style.coinprice}>${price}</p>
          <p className={style.coinvolume}>${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className={style.coinpersentred}>{priceChange.toFixed(2)}%</p>
          ) : (<p className={style.coinpercentgreen}>{priceChange.toFixed(2)}%</p>)}
          <p className={style.coinmarketcap}>Mkt Cap:<br /><br /> ${marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>

  )
}


export default Coin;
