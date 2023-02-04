import React, { useState } from 'react'
import './navbar.scss';
import { logo } from '../../assets';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Start } from '../../components/discount/Discount'

const Menu = () => {
   return (
      <div className='navbar__links'>
         <a className='navbar__link' href="#home">Home</a>
         <a className='navbar__link' href="#about">About Us</a>
         <a className='navbar__link' href="#features">Features</a>
         <a className='navbar__link' href="#solution">Solution</a>
      </div>
   );
};

const Navbar = () => {
   const [toogleMenu, setToggleMenu] = useState(false);
   return (
      <div className='navbar'>
         {toogleMenu && (
            <div className='navbar__menu-full' onClick={() => { setToggleMenu(false) }} >
            </div>
         )
         }
         <div className='navbar__container'>
            <div className='navbar__logo'>
               <img src={logo} alt="" />
            </div>
            <div className='navbar__content'>
               <Menu />
            </div>
            <div className='navbar__start'>
               <Start />
            </div>
            <div className='navbar__menu-icon'>
               {toogleMenu
                  ? <RiCloseLine color='#fff' size={32} onClick={() => setToggleMenu(false)} />
                  : <RiMenu3Line color='#fff' size={32} onClick={() => setToggleMenu(true)} />
               }
               {toogleMenu && (
                  <div className='navbar__menu scale-up-center'>
                     <div className='navbar__menu-links'>
                        <Menu />
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div >
   )
}

export default Navbar