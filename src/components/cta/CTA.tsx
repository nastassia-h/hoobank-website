import React from 'react'
import Article from '../article/Article'
import Button from '../button/Button'
import './cta.scss';

const CTA = () => {
   return (
      <div className='cta'>
         <div className='cta__container'>
            <div className='cta__content'>
               <div className='cta__article'>
                  <Article text='Everything you need to accept card payments and grow your business anywhere on the planet.' title='Let’s try our service now!'>
                  </Article>
               </div>

               <Button text={'Get Started'} width={170} height={64} onClick={() => { }} fontSize={18} />
            </div>
         </div>
      </div>

   )
}

export default CTA