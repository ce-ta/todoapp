import type { Todo } from './Todos';

type Props = {
    todo: Todo;
}

export default function Todo({ todo }: Props) {
  return (
    <li id={todo.id}>
        {todo.title}
    </li>
  )
}
