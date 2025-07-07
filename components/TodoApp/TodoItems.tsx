import type { Todo } from './TaskManager'

type TodoItemsType = {
  todoItems: Todo[]
}

export default function TodoItems({ todoItems }: TodoItemsType) {
  console.log(todoItems)
  return (
    <div className="mt-4 px-4">
      <h1>TodoItems</h1>

      <p>{todoItems.length}</p>
    </div>
  )
}
