import { useState, useRef } from 'react'
import Todo from './Todo'

export type Todo = {
    id: number;
    title: string;
}

export default function Todos() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [taskId, setTaskId] = useState<number>(0)
    let inputTask = useRef<HTMLInputElement>(null);

    const setTask = () => {
        if(inputTask.current && inputTask.current.value) {
            const newTodo: Todo = {
                id: taskId,
                title: inputTask.current.value
            }
            setTodos((prevTodos: Todo[]) => [...prevTodos, newTodo])
            setTaskId((prev) => prev + 1);
            inputTask.current.value = "";
        }
    };

  return (
    <div>
        <ul>
        {todos.map((todo: Todo) => (
            <li key={todo.id}>
                <Todo todo={todo} setTodos={setTodos} />
            </li>
        ))}
         </ul>
        <input type="text" ref={inputTask}></input>
        <button type="submit" onClick={setTask}>追加</button>
    </div>
  )
}
