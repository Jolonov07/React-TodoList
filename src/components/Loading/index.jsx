import React from "react"
import cls  from './Loading.module.scss'

const Loading = () => {
   return (
      <div className={cls.container}>
         <div className={cls.spinner}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
         </div>
      </div>
   )
}

export default Loading
