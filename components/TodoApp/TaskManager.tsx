'use client'
import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoItems from './TodoItems'
import { on } from 'events'
import EditModal from '../Modal/EditModal'

export type Todo = {
  id: string
  title: string
  isComplete: boolean
}

export default function TaskManager() {
  const [todoItems, setTodoItems] = useState<Todo[]>([])

  /** --- 3. For Edit feature & Modal Logic:
   * Modal logic is triggered by children, but controlled by parent
   *
   *  --- */
  const [isModalOpen, setIsModalOpen] = useState(false)

  /** TodoForm Related Functionality */
  // Passing function as prop to get data from the children
  function getTodoItem(item: Todo) {
    console.log(item)
    setTodoItems([...todoItems, item])
  }

  /** TodoItems Related Functionality */

  // 1. delete items

  function onDelete(id: string) {
    setTodoItems(prevItems => {
      return prevItems.filter(item => item.id !== id)
    })
  }

  // 2. handle toggle

  function onToggle(id: string) {
    const updatedItems = todoItems.map(item => {
      if (item.id === id) {
        item.isComplete = !item.isComplete
        return item
      }
      return item
    })

    setTodoItems(updatedItems)
  }

  /** --- 4. Modal Functionalities --- */

  function handleOpenModal() {
    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  return (
    <>
      <div className="bg-gray-100 min-h-[calc(100vh-120px)]">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 flex items-center justify-between py-4">
          {/* Todo Container */}
          <div className="w-full sm:w-3/5 mx-auto mt-12 p-4 shadow-gray-400 shadow-lg">
            {/* TodoForm */}
            <TodoForm getTodoItem={getTodoItem} />
            {/* TodoItems */}
            <TodoItems
              todoItems={todoItems}
              onDelete={onDelete}
              onToggle={onToggle}
              onOpen={handleOpenModal}
            />
          </div>
        </div>
      </div>

      {/* Modal Rendering on current condition */}
      <EditModal
        isModalOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}
