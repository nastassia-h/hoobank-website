import React from 'react'
import { send, shield, star } from '../../assets'
import './tabs.scss'

const Tabs = () => {
   return (
      <div className='tabs'>
         <div className='tabs__item'>
            <div className='tabs__img'>
               <img src={star} alt="" />
            </div>
            <div className='tabs__content'>
               <div className='tabs__title'>Rewards</div>
               <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
            </div>
         </div>
         <div className='tabs__item'>
            <div className='tabs__img'>
               <img src={shield} alt="" />
            </div>
            <div className='tabs__content'>
               <div className='tabs__title'>100% Secured</div>
               <p>We take proactive steps make sure your information and transactions are secure.</p>
            </div>
         </div>
         <div className='tabs__item'>
            <div className='tabs__img'>
               <img src={send} alt="" />
            </div>
            <div className='tabs__content'>
               <div className='tabs__title'>Balance Transfer</div>
               <p>A balance transfer credit card can save you a lot of money in interest charges.</p>
            </div>
         </div>

      </div>
   )
}

export default Tabs