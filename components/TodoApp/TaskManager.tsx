import TodoForm from './TodoForm'
import TodoItems from './TodoItems'

export default function TaskManager() {
  return (
    <div className="bg-gray-100 min-h-[calc(100vh-120px)]">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 flex items-center justify-between py-4">
        {/* Todo Container */}
        <div className="w-3/5 mx-auto mt-12 p-4 shadow-gray-400 shadow-lg">
          {/* TodoForm */}
          <TodoForm />
          {/* TodoItems */}
          <TodoItems />
        </div>
      </div>
    </div>
  )
}
