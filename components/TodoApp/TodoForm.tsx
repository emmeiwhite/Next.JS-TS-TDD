'use client'

import { useState } from 'react'

export default function TodoForm() {
  const [todoItem, setTodoItem] = useState<string>('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <form
      className="flex"
      onSubmit={handleSubmit}>
      <input
        type="text"
        name="todoItem"
        placeholder="Enter your Todo"
        value={todoItem}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodoItem(e.target.value)}
        className="p-2 placeholder:text-gray-400 flex-1 hover:ring-2 border-1 border-blue-500 rounded-sm"
      />
      <button className=" bg-blue-500 rounded-sm px-5 py-2 text-white cursor-pointer hover:bg-blue-600 transition-colors duration-300 ">
        Add Todo
      </button>
    </form>
  )
}
