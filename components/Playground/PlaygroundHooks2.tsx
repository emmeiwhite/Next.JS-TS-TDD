'use client'

import { useReducer, useState } from 'react'
import PlaygroundHeading from './PlaygroundHeading'

type Item = {
  id: string
  name: string
  completed: boolean
}

type ActionType = { type: 'ADD'; text: string } | { type: 'DELETE'; id: string }

function reducer() {}

export default function PlaygroundHooks2() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [item, setItem] = useState('')

  // Items
  function addTodo(todo: Item) {}

  function deleteTodo(id: string) {}

  // Form
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setItem(e.target.value)
  }

  function handleSubmit() {}

  return (
    <div className="mt-7">
      <PlaygroundHeading title="Items" />
      <form
        onSubmit={handleSubmit}
        className="max-w-md p-4 bg-white rounded-xl shadow-md space-y-4">
        <div>
          <label
            htmlFor="itemInput"
            className="block text-gray-700 font-medium mb-2">
            Add an Item:
          </label>
          <input
            id="itemInput"
            type="text"
            value={item}
            onChange={handleInputChange}
            placeholder="e.g., play football"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Submit
          </button>
        </div>
      </form>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"></ul>
    </div>
  )
}
