import type { Todo } from './Todos';

type Props = {
    todo: Todo;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function Todo({ todo, setTodos }: Props) {

  const deleteTask = (id: number) => {
    setTodos((prev) => prev.filter((todo:Todo) => todo.id !== id));
  }
  return (
    <>
        {todo.title}
        <button onClick={() => deleteTask(todo.id)}>削除</button>
    </>
  )
}
