import React from 'react'
import cls from './Button.module.scss'

const Button = ({ 
  type,
  text = 'submit',
  disabled,
}) => {
  return (
    <button 
      className={cls.root}
      type={type}
      disabled={disabled}
    >
    {text}
    </button>
  )
}

export default Button
