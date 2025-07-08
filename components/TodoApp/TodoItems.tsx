import type { Todo } from './TaskManager'
import TodoItem from './TodoItem'

type TodoItemsType = {
  todoItems: Todo[]
}

export default function TodoItems({ todoItems }: TodoItemsType) {
  console.log(todoItems)
  return (
    <div className="mt-4 px-4">
      <h1 className="mb-2 text-2xl text-center">TodoItems</h1>

      <div className="flex flex-col gap-5">
        {todoItems.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
      </div>
    </div>
  )
}
