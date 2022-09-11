import React from 'react'
import { Main } from '..'

const useMain = ( ) => {
  const [todos, setTodos] = React.useState()


  const get = React.useCallback(() => {
    const request = Main.API.get()

    request
      .then(res => {
        const data = Object.entries(res.data).map(([id, item]) => {
          return {
            id,
            ...item
          }
        })

        setTodos(data.reverse())
      })
  }, [])

  const postNewTodo = React.useCallback((data) => {
    const request = Main.API.post(data)

    request
      .then(get)
  }, [get])

  const deleteTodo = React.useCallback((id) => {
    const request = Main.API.remove(id)

    request
      .then(get)
  }, [])

  const completedItemTodo = React.useCallback((id) => {
    const request = Main.API.post(id)

    request
      .then(get)
  }, [])

  React.useEffect(get, [get])

  return {
    todos,
    actions: {
      postNewTodo,
      deleteTodo,
      completedItemTodo,
    },
  }

}

export const use = useMain