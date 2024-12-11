type TodoProps = {
  id: number
  userId: number
  title: string
  completed: boolean
}

export const Todo = ({ userId, title, completed }: TodoProps) => {
  return (
    <div>
      <h1>{userId}</h1>
      <b>{title}</b>
      <p>{completed ? 'Completed' : 'Not completed'}</p>
    </div>
  )
}
