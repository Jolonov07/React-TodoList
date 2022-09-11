import React from 'react'
import { NavLink } from 'react-router-dom'
import cls from './NoAuth.module.scss'

const NoAuth = ({
  textContent,
  textLink,
  link,
}) => {
  return (
    <div className={cls.root}>
      <div className={cls.box}>
        <img src="img/no-account.jpg" alt="NO ACCOUNT" />
        <h1>{textContent}</h1>
        <button><NavLink to={link}>{textLink}</NavLink></button>
      </div>
    </div>
  )
}

export default NoAuth
