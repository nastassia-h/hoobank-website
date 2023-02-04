import React, { FC } from 'react'
import './button.scss';

interface ButtonProps {
   text: string;
   fontSize: number;
   width: number;
   height: number;
   onClick: () => void;
}

const Button: FC<ButtonProps> = ({ text, fontSize, width, height, onClick }) => {
   return (
      <button
         style={{ width, height, fontSize }}
         className='btn'
         type='button'
         onClick={onClick}>
         {text}
      </button>
   )
}

export default Button