import { useState } from 'react'
import Todo from './Todo'

export type Todo = {
    id: string;
    title: string;
    content: string;
}

export default function Todos() {
    const [todos, setTodos] = useState<Todo[]>([{id: 1, title: "Test Title", content: "Test Content"}]);

    const setTask = (newTask: Todo) => {
        setTodos((prevTodos: Todo[]) => [...prevTodos, newTask])
    };

  return (
    <div>
        {todos.map((todo: Todo) => (
        <ul>
            <Todo todo={todo} />
        </ul>
        ))}
    </div>
  )
}
