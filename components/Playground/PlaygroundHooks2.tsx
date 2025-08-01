'use client'

import { useCallback, useReducer, useRef, useState } from 'react'
import PlaygroundHeading from './PlaygroundHeading'

type Item = {
  id: string
  name: string
  quantity: number
  completed: boolean
}

type ActionType =
  | { type: 'ADD'; text: string; quantity: number }
  | { type: 'DELETE'; id: string }
  | { type: 'UPDATE'; id: string }

// State updates will now happen from the reducer, not within the Application(View)
function reducer(state: Item[], action: ActionType): Item[] {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: new Date().toISOString(),
          name: action.text,
          completed: false,
          quantity: action.quantity
        }
      ]
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
  const quantityRef = useRef<HTMLSelectElement>(null)

  // Form
  const handleInputChange = useCallback(function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setItem(e.target.value)
  },
  [])

  const handleSubmit = useCallback(
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      if (!item) return

      const selectedQuantity = Number(quantityRef.current?.value || 1)

      //   Dispatch Action to add this newItem to the items state
      dispatch({ type: 'ADD', text: item, quantity: selectedQuantity })
      setItem('') // Clear Input
      if (quantityRef.current) quantityRef.current.value = '1' // reset dropdown
    },
    [item]
  )

  const handleDelete = useCallback(function handleDelete(id: string) {
    dispatch({ type: 'DELETE', id })
  }, [])

  const handleCheckboxChange = useCallback(function handleCheckboxChange(id: string) {
    dispatch({ type: 'UPDATE', id })
  }, [])

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

      <ul className="grid grid-cols-1 md:grid-cols-2  gap-5">
        {items?.map((item: Item) => {
          return (
            <li
              key={item.id}
              className="flex items-center gap-2 p-4 bg-white rounded-lg shadow-sm border border-gray-200 space-x-4">
              {/* quanity data selection */}
              <div>
                <label
                  htmlFor="quantity"
                  className="block text-gray-700 font-medium mb-2">
                  <select
                    ref={quantityRef}
                    id="quantity"
                    defaultValue="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {Array.from({ length: 15 }).map((_, index) => (
                      <option
                        value={index + 1}
                        key={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="flex items-center gap-4 flex-1">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => handleCheckboxChange(item.id)}
                  className="min-h-5 min-w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 block"
                />
                <span
                  className={`line-clamp-2 text-md ${
                    item.completed ? 'line-through text-gray-400 ' : 'text-gray-800'
                  }`}>
                  {item.name}
                </span>
              </div>

              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-500 hover:text-red-700 text-bold text-2xl  cursor-pointer transition-colors">
                &#10005;
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
