import { aliasRegex, emailRegex } from "./regex"

export const required = 'Это обезательное поле!'

export const email = {
   required,
   pattern: {
      email: emailRegex,
      message: 'Email Error!'
   }
}

export const alias = {
   required,
   pattern: {
      value: aliasRegex,
      message: 'Только латинские буквы и цифры'
   }
}

export const password = {
   required,
   pattern: {
      value: 6,
      message: 'Не менее 6 символов'
   }
}

export const todoTitle = {
   required,
   minLength: {
     value: 4,
     message: 'Не менее 4 символов'
   },
   maxLength: {
     value: 25,
     message: 'Не более чем 25 символов'
   }
 
 }