import React from 'react'
import { people01, people02, people03 } from '../../assets';
import Article from '../../components/article/Article';
import './people.scss';
import Comment from '../../components/comment/Comment';

const People = () => {
   return (
      <div id='solution' className='people people__container'>
         <div className='people__title'>
            <div >What people are saying about us</div>
            <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
         </div>
         <div className='people__content'>
            <Comment text='Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.' name='Herman Jensen' imgUrl={people01} profession='Founder & Leader' />
            <Comment text='Money makes your life easier. If youre lucky to have it, youre lucky.' name='Steve Mark' imgUrl={people02} profession='Founder & Leader' />
            <Comment text='It is usually people in the money business, finance, and international trade that are really rich.' name='Kenn Gallagher' imgUrl={people03} profession='Founder & Leader' />
         </div>
      </div>
   )
}

export default People