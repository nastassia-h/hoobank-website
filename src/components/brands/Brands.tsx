import React from 'react'
import { airbnb, binance, coinbase, dropbox } from '../../assets'

const Brands = () => {
   return (
      <div className='brands' style={{ marginBottom: 30 }}>
         <div
            style={{ margin: '0 auto', display: 'flex', maxWidth: 1230, padding: 30, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 100 }}
            className='brands__container'>
            <img width={192.25} src={dropbox} alt="" />
            <img width={189} src={coinbase} alt="" />
            <img width={192.25} src={binance} alt="" />
            <img width={192.25} src={airbnb} alt="" />
         </div>
      </div>
   )
}

export default Brands