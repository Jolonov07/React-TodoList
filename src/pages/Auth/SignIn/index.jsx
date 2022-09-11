import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '../../../components/Button'
import Header from '../../../components/Header'
import TextArea from '../../../components/TextArea'
import { signInUrl } from '../../../configs'
import { Form } from '../../../helpers/Form'
import cls from './SignIn.module.scss'

const Signin = () => {
   const {
      formState,
      register,
      reset,
      handleSubmit,
   } = useForm()

   const [isSuccessAuth, setIsSuccesAuth] = React.useState(false)

   const navigate = useNavigate()

   const onSubmit = (data) => {
      const body = {
         email: data.email,
         password: data.password,
         returnSecureToken: true,
      }

      axios.post(signInUrl, body)
      .then(res => {
         const data = res.data
         reset()
         localStorage.setItem('localId', data.localId)
         reset()
      })
      .then(() => {
         navigate('/')
      })
      .catch(err => {
         if(err.responce.data.error.code === 400) {
            setIsSuccesAuth(true)
         }
      })
      
   }
   return (
      <div className={cls.container}>
         <Header />
            <div className={cls.formBox}>
               <div className={cls.box}>
                  <h1 className={cls.title}>Авторизоваться</h1>
                     <form className={cls.root} onSubmit={handleSubmit(onSubmit)}>
                        <TextArea
                           className={cls.input}
                           label="email" 
                           placeholder='email'
                           type={"email"}
                           error={formState.errors.email}
                           {...register('email', Form.Options.email)}
                        />
                        <TextArea
                           className={cls.input}
                           label="password" 
                           placeholder="password" 
                           type={'password'}
                           error={formState.errors.password}
                           {...register('password', Form.Options.password)}
                        />
                        <Button type={'submit'} text={'Войти'} />

                           {
                              isSuccessAuth && (
                                 <h3 className={cls.noAuth}>Вы ввели неверный пароль или почту</h3>
                              )
                           }

                     </form>
                  <p>
                     Нет аккаунта? <NavLink to={'/signup'}>Зарегистрироваться</NavLink>
                  </p>
               </div>
            </div>
      </div>
   )
}

export default Signin