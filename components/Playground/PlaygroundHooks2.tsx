'use client'

import { useReducer, useState } from 'react'
import PlaygroundHeading from './PlaygroundHeading'

type Item = {
  id: string
  name: string
  completed: boolean
}

type ActionType =
  | { type: 'ADD'; text: string }
  | { type: 'DELETE'; id: string }
  | { type: 'UPDATE'; id: string }

// State updates will now happen from the reducer, not within the Application(View)
function reducer(state: Item[], action: ActionType): Item[] {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: new Date().toISOString(), name: action.text, completed: false }]
    case 'DELETE':
      return state.filter(item => item.id !== action.id)
    case 'UPDATE':
      return state.map(item =>
        item.id !== action.id ? item : { ...item, completed: !item.completed }
      )
    default:
      return state
  }
}

export default function PlaygroundHooks2() {
  const [items, dispatch] = useReducer(reducer, [] as Item[])
  const [item, setItem] = useState('')

  // Form
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setItem(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!item) return

    //   Dispatch Action to add this newItem to the items state
    dispatch({ type: 'ADD', text: item })
    setItem('') // Clear Input
  }

  function handleDelete(id: string) {
    dispatch({ type: 'DELETE', id })
  }

  function handleCheckboxChange(id: string) {
    dispatch({ type: 'UPDATE', id })
  }
  return (
    <div className="mt-7">
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

      <PlaygroundHeading title="Items" />

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items?.map((item: Item) => {
          return (
            <li
              key={item.id}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200 space-x-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => handleCheckboxChange(item.id)}
                  className="min-h-5 min-w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 block"
                />
                <span
                  className={`line-clamp-2 ${
                    item.completed ? 'line-through text-gray-400 ' : 'text-gray-800'
                  }`}>
                  {item.name}
                </span>
              </div>

              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-500 hover:text-red-700 transition-colors">
                &#10005;
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
