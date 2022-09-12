import React from "react"
import cls from './NotFound.module.scss'

const NotFound = () => {
   return (
      <div 
         className={cls.root} 
         style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
         }}
      >
         <h1>ТЫ КОГО Хочешь НОЕБАТЬ</h1>
      </div>
   )
}

export default NotFound