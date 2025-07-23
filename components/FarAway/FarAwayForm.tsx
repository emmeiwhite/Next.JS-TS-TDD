'use client'

import { useState } from 'react'
import { Item } from './types'

type FarAwayFormType = {
  addListItem: (item: Item) => void
}

export default function FarAwayForm({ addListItem }: FarAwayFormType) {
  const [userName, setUserName] = useState('')
  const [quantity, setQuantity] = useState('1')

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserName(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!userName || !quantity) return

    const newItem: Item = {
      quantity: Number(quantity),
      userName,
      id: new Date().toISOString(),
      completed: false
    }

    addListItem(newItem)

    setUserName('')
    setQuantity('1')
  }

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log(e)
    setQuantity(e.target.value)
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center py-2 gap-5">
        <p>Choose what you plan to take for trip</p>
        <select
          onChange={handleSelectChange}
          value={quantity}
          className="border-1 rounded border-gray-400 outline:none focus:outline-blue-400 focus:ring-2">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <label htmlFor="itemName">
          <input
            type="text"
            id="itemName"
            value={userName}
            onChange={handleInputChange}
            className="border-1 rounded border-gray-400 outline:none focus:outline-blue-400 focus:ring-2 px-2 py-1 placeholder:text-gray-500"
            placeholder="add item ..."
          />
        </label>

        <button
          type="submit"
          className="border-1 border-gray-400 rounded-md px-3 py-1 cursor-pointer">
          Add items
        </button>
      </form>
    </div>
  )
}
