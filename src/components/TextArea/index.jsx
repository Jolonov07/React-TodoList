import React from "react"
import cls from './TextArea.module.scss'

const TextArea = React.forwardRef(({
   placeholder,
   type='text',
   error,
   ...rest
}, ref) => {

   return (
      <div className={cls.root}>
      <input 
         type={type}
         placeholder={placeholder}
         ref={ref}
         {...rest}
      />
      {
         error && <span>{error.message}</span>
      }
      </div>
   )
})

export default TextArea
