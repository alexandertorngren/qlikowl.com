'use client'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/useAppStore'
import { getTodos } from '@/lib/todos/todoSlice'
import { Todo } from './todo'

export const TodosList = () => {
  const todos = useAppSelector((state) => getTodos(state.todos))
  const dispatch = useAppDispatch()
  const status = 'active'
  const [isLoading, setIsLoading] = React.useState(true)

  useEffect(() => {
    // Fetch todos
    const fetchTodos = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await response.json()
      console.log(data)
      return data
    }

    if (isLoading) {
      const data = fetchTodos()
      dispatch({ type: 'addTodo', payload: data })
      setIsLoading(false)
    }
  }, [])

  if (isLoading) {
    return <p>No todos found</p>
  }
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  )
}
