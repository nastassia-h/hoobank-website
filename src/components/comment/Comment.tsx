import React, { FC } from 'react'
import { people01, quotes } from '../../assets';
import './comment.scss';

interface CommentpProps {
   text: string;
   imgUrl: string;
   name: string;
   profession: string;
}

const Comment: FC<CommentpProps> = ({ text, imgUrl, name, profession }) => {
   return (
      <div className='comment'>
         <img src={quotes} alt="" />
         <div className='comment__text'>{text}</div>
         <div className='comment__man'>
            <img src={imgUrl} alt="" />
            <div>
               <p className='comment__name'>{name}</p>
               <p className='comment__profession'>{profession}</p>
            </div>
         </div>
      </div>
   )
}

export default Comment