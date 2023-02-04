import { title } from 'process';
import React, { FC } from 'react'
import './article.scss';

interface ArticleProps {
   title: string;
   text: string;
   children?: React.ReactNode;
}

const Article: FC<ArticleProps> = ({ children, title, text }) => {
   return (
      <div className='article'>
         <div className='article-content'>
            <div className='article-content__title'>{title}</div>
            <div className='article-content__text'>{text}</div>
         </div>
         <div className='article__btn'>{children}</div>
      </div>
   )
}

export default Article