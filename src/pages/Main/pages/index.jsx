import React from "react"
import Navbar from "../../../components/Header"
import cls from './Main.module.scss'
import { Form } from '../../../helpers/Form'
import { useForm } from "react-hook-form"
import NoAuth from '../../../components/NoAuth'
import { Main } from '..'
import TextArea from '../../../components/TextArea'
import Button from '../../../components/Button'
import Loading from '../../../components/Loading'
import TodoItem from '../../../components/ToDoItem'

const MainPage = () => {
  const {
    handleSubmit,
    formState,
    register,
    reset,
  } = useForm()

  const { 
    todos, 
    actions: { 
      postNewTodo,
      deleteTodo,
      patchTodo,
    }
  } = Main.Hooks.use()

  const [isActive, setIsActive] = React.useState(false)

  const onSubmit = (data) => {
    postNewTodo(data)
    reset()
  }

  if (!localStorage.getItem('localId')) return (
    <NoAuth 
      link={'/signin'} 
      textContent={'Вы не авторизовались!'}
      textLink={'Войти!'}
    />
  )
    if (!todos) return (<Loading />)
    return (
      <div className={cls.root}>
        <Navbar showLink={true} showburger={true} />
        <div className={cls.container}>
          <form className={cls.content} onSubmit={handleSubmit(onSubmit)}>
            <TextArea 
              placeholder={'New Todo'}
              {...register('title', Form.Options.todoTitle)}
              error={formState.errors.title}
            />
            <Button 
              type={'submit'} 
              text={'Add'} 
              disabled={isActive}
            />
          </form>
          <div className={cls.box}>
            {
              todos.map(({ id, title, completed}, i) => (
                <TodoItem 
                  key={id}
                  title={title}
                  completed={completed}
                  deleteTodo={deleteTodo}
                  patchTodo={patchTodo}
                  id={id}
                />
              ))
            }
          </div>
        </div>
      </div>
    ) 
}

export default MainPage
