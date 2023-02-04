import React from 'react'
import { Discount, Pluses, Start } from '../../components/discount/Discount';
import './brand.scss';
import { robot } from '../../assets/index'

const Brand = () => {
   return (
      <div id='home' className='brand'>
         <div className='brand__container'>
            <div className='brand-content'>
               <div><Discount /></div>
               <div style={{ position: 'relative' }} className='brand-content__title'>
                  The Next
                  <p className='start-icon' style={{ position: 'absolute' }}> <Start /></p>
                  <span className='gradient-text'> Generation </span>
                  Payment Method.
               </div>
               <div className='brand-content__text'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                  We examine annual percentage rates, annual fees.</div>
            </div>
            <div className='brand__image' style={{ backgroundImage: `url('${robot}')` }}>
            </div>
         </div>
         <Pluses />
      </div>
   )
}

export default Brand