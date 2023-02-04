import React from 'react'
import './discount.scss';
import { discount } from '../../assets';
import { arrowUp } from '../../assets';
import { routes } from '../../route/routes';

const Start = () => {
   return (
      <a href={routes[1].path} className='start'>
         <p>Get <img src={arrowUp} alt="" /></p>
         <p>Started</p>
      </a>
   );
}

const Pluses = () => {
   return (
      <div className='plases'>
         <div className='plases__container'>
            <div>3800+</div>
            <p>User Active</p>
         </div>
         <div className='plases__container'>
            <div>230+</div>
            <p>TRUSTED BY COMPANY</p>
         </div>
         <div className='plases__container'>
            <div>$230M+</div>
            <p>TRANSACTION</p>
         </div>
      </div>
   );
};

const Discount = () => {
   return (
      <div className='discount'>
         <div><img src={discount} alt="" /></div>
         <div className='discount__text'><span>20% </span>DISCOUNT <span>1 MONTH</span> ACCOUNT</div>
      </div>
   )
}

export { Discount, Pluses, Start };