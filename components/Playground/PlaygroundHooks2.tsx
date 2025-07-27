'use client'

import { useReducer, useState } from 'react'
import PlaygroundHeading from './PlaygroundHeading'

type Item = {
  id: string
  name: string
  completed: boolean
}

type ActionType = { type: 'ADD'; text: string } | { type: 'DELETE'; id: string }

// State updates will now happen from the reducer, not within the Application(View)
function reducer(state: Item[], action: ActionType): Item[] {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: new Date().toISOString(), name: action.text, completed: false }]
    case 'DELETE':
      return state.filter(item => item.id !== action.id)
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
              className="p-4 bg-gray-100 rounded-lg shadow-sm text-lg text-gray-800">
              {item.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
