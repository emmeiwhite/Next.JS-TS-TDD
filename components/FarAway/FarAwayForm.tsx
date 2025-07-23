'use client'

import { useState } from 'react'

export default function FarAwayForm() {
  const [userName, setUserName] = useState('')
  const [quantity, setQuantity] = useState('1')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserName(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
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
            onChange={handleChange}
            className="border-1 rounded border-gray-400 outline:none focus:outline-blue-400 focus:ring-2"
          />
        </label>
      </form>
    </div>
  )
}
