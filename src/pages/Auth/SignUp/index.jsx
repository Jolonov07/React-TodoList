import React from "react"
import cls from './SignUp.module.scss'
import { signUpUrl, usersDB } from '../../../configs'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Form } from "../../../helpers/Form"
import TextArea from "../../../components/TextArea"
import Button from "../../../components/Button"
import { NavLink } from "react-router-dom"
import Header from "../../../components/Header"

const Signup = () => {
   const  {
      formState,
      register,
      handleSubmit,
      reset,
   } = useForm()

   const onSubmit = (data) => {
      const body = {
         email: data.email,
         password: data.password,
         returnSecureToken: true,
      }

      axios.post(signUpUrl, body)
      .then(res => {
         const body = {
            login: data.login,
            firstName: data.firstName,
            secondName: data.secondName,
         }

         axios.post(usersDB('/user.json'), body)
         .then(res => {
            console.log(res.data)
         })
         reset()
      })
   }

   return (
      <div className={cls.container}>
         <Header />
         <div className={cls.formBox}>
            <div className={cls.box}>
             <h1 className={cls.title}>Регистрация</h1>
               <form className={cls.root} onSubmit={handleSubmit(onSubmit)}  >

                  <TextArea 
                     className={cls.inputs}
                     placeholder={"Login"}
                     error={formState.errors.login}
                     {...register('login', Form.Options.alias)}
                  />

                  <TextArea 
                     className={cls.inputs}
                     placeholder={'Имя'}
                     error={formState.errors.firstName}
                     {...register('secondName', Form.Options.required)}
                  />

                  <TextArea 
                     className={cls.inputs}
                     placeholder={'Фамилия'}
                     error={formState.errors.secondName}
                     {...register('secondName', Form.Options.required)}
                  />

                  <TextArea 
                     className={cls.inputs}
                     placeholder={"Email"}
                     type={'email'}
                     error={formState.errors.email}
                     {...register('email', Form.Options.email)}
                  />

                  <TextArea 
                     className={cls.inputs}
                     placeholder={"password"}
                     error={formState.errors.password}
                     type={'password'}
                     {...register('password', Form.Options.password)}
                  />

                  <Button type={'submit'} text={'Регистрация'} />

               </form>
               <p>
               Есть аккаунт? <NavLink to={'/signin'}>Войти</NavLink>
               </p>
            </div>
         </div>
      </div>
   )
}

export default Signup