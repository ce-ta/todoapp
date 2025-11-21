import { useState, useRef } from 'react'
import Todo from './Todo'

export type Todo = {
    id: string;
    title: string;
}

export default function Todos() {
    const [todos, setTodos] = useState<Todo[]>([{id: "1", title: "Test Title"}]);
    let inputTask = useRef<HTMLInputElement>(null);

    const setTask = () => {
        if(inputTask.current && inputTask.current.value) {
            const newTodo: Todo = {
                id: "2",
                title: inputTask.current.value
            }
            setTodos((prevTodos: Todo[]) => [...prevTodos, newTodo])
            inputTask.current.value = "";
        }
    };

  return (
    <div>
        <ul>
        {todos.map((todo: Todo) => (
            <Todo todo={todo} />
        ))}
         </ul>
        <input type="text" ref={inputTask}></input>
        <button type="submit" onClick={setTask}>追加</button>
    </div>
  )
}
