import { useEffect, useState } from 'react'
import type { Todo } from '../TodoApp/TaskManager'

type EditModalType = {
  isModalOpen: boolean
  onClose: () => void
  editableTodo: Todo | null
}

export default function EditModal({ isModalOpen, onClose, editableTodo }: EditModalType) {
  const [inputText, setInputText] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  /** --- The Error Fix with regard to editableTodo:Todo | null --- */
  useEffect(() => {
    if (editableTodo) {
      setInputText(editableTodo.title)
    }
  }, [editableTodo])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value)
  }

  return (
    <div
      className={`fixed inset-0 h-screen w-full bg-gray-800 opacity-80 transition-colors duration-300 flex items-center justify-center ${
        isModalOpen ? 'block' : 'hidden'
      }`}>
      {/* Form Content at the center */}
      <div className="bg-white p-6 rounded shadow-md w-11/12 max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
          onClick={onClose}>
          ×
        </button>

        <h2 className="text-lg font-semibold mb-4">Edit Todo</h2>

        {/* Edit form can go here */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            placeholder="Edit your task"
            value={inputText}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Update
          </button>
        </form>
      </div>
    </div>
  )
}
