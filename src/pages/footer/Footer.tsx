import React from 'react'
import { facebook, instagram, linkedin, logo, twitter } from '../../assets'
import './footer.scss'

const Footer = () => {
   return (
      <div className='footer'>
         <div className='footer__container'>
            <div className='footer__content'>
               <div className='footer__logo'>
                  <img src={logo} alt="" />
                  <p >A new way to make the payments easy, reliable and secure.</p>
               </div>
               <div className='footer__column'>
                  <p>Usefull Links</p>
                  <a href="">Content</a>
                  <a href="">How it Works</a>
                  <a href="">Create</a>
                  <a href="">Explore</a>
                  <a href="">Terms & Services</a>
               </div>
               <div className='footer__column'>
                  <p>Community</p>
                  <a href="">Help Center</a>
                  <a href="">Partners</a>
                  <a href="">Suggestions</a>
                  <a href="">Blog</a>
                  <a href="">Newsletters</a>
               </div>
               <div className='footer__column'>
                  <p>Partner</p>
                  <a href="">Our Partner</a>
                  <a href="">Become a Partner</a>
               </div>
            </div>
            <div className='footer__copy'>
               <p>Copyright © 2021 HooBank. All Rights Reserved.</p>
               <div>
                  <a href="">
                     <img src={twitter} alt="" />
                  </a>
                  <a href="">
                     <img src={instagram} alt="" />
                  </a>
                  <a href="">
                     <img src={facebook} alt="" />
                  </a>
                  <a href="">
                     <img src={linkedin} alt="" />
                  </a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer