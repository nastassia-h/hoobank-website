import React from 'react'
import './money.scss';
import Article from '../../components/article/Article';
import Button from '../../components/button/Button';
import { apple, bill, card, google } from '../../assets';
import Tabs from '../../components/tabs/Tabs';
const Money = () => {
   return (
      <div id='about' className='money'>
         <div className='money__container'>
            <div className='money__row'>
               <div className='money__article'>
                  <Article text='With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.' title='You do the business, we’ll handle the money.'>
                     <Button fontSize={18} width={170} height={64} text='Get Started' onClick={() => { }} />
                  </Article>
               </div>
               <div className='money__column'><Tabs /></div>
            </div>
            <div id='features' className='money__row'>
               <div className='money__image'><img src={bill} alt="" /></div>
               <div className='money__article'>
                  <Article text='Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.' title='Easily control your billing & invoicing.'>
                     <a href=""><img src={apple} alt="" /></a>
                     <a href=""><img src={google} alt="" /></a>
                  </Article>
               </div>
            </div>
            <div className='money__row'>
               <div className='money__article'>
                  <Article text='Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.' title='Find a better card deal in few easy steps.'>
                     <Button fontSize={18} width={170} height={64} text='Get Started' onClick={() => { }} />
                  </Article>
               </div>
               <div className='money__image'><img src={card} alt="" /></div>
            </div>
         </div>
      </div>
   )
}

export default Money