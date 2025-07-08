import type { Todo } from './TaskManager'

type TodoItemType = {
  todo: Todo
  onDelete: (id: string) => void
  onToggle: (id: string) => void
}

export default function TodoItem({ todo, onDelete, onToggle }: TodoItemType) {
  return (
    <div className="flex space-between items-center w-full gap-5">
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={() => onToggle(todo.id)}
      />

      <p className="flex-1">{todo.title}</p>
      <button
        className="px-3 py-1 bg-orange-500 hover:bg-orange-600 transition-colors duration-300 cursor-pointer text-white rounded-sm"
        onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </div>
  )
}
