'use client'

import React, { useState, useCallback } from 'react'

type Item = {
  id: string
  name: string
  completed: boolean
}

type ListItem = {
  item: Item
  handleCheckedToggle: (id: string) => void
}

// Memoize the TaskItem component so that only when the item prop or functional prop handleCheckedToggle changes it would get re-rendered on then.
const TaskItem = React.memo(function TaskItem({ item, handleCheckedToggle }: ListItem) {
  console.log('Rendered:', item.name)
  return (
    <li
      key={item.id}
      className="cursor-pointer hover:text-amber-800 hover:font-bold flex gap-5">
      <label>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => handleCheckedToggle(item.id)}
        />
        <span className={`${item.completed ? 'line-through text-gray-400' : ''}`}>
          {' '}
          {item.name}
        </span>
      </label>
    </li>
  )
})

export default React.memo(function ListItemsParent({ test }: { test: string }) {
  //   console.log(test)
  const [items, setItems] = useState<Item[]>([
    { id: '1', name: 'Pray Fajr', completed: false },
    { id: '2', name: 'Read Quran', completed: false },
    { id: '3', name: 'Master React & TS', completed: false }
  ])

  const [item, setItem] = useState<string>('')

  // General behaviour is that: React re-creates functions on every render.
  const handleCheckedToggle = (id: string) => {
    console.log('handleChecked Invoked!')
    setItems(prev => {
      return prev.map(item => {
        return item.id !== id ? item : { ...item, completed: !item.completed }
      })
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!item) return

    const newItem = {
      id: new Date().toISOString(),
      completed: false,
      name: item
    }

    setItems([...items, newItem])
    setItem('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value)
  }

  return (
    <div className="mt-7">
      <h1 className="text-2xl font-bold">Daily Tasks</h1>

      {/* ADDED FORM WITH A CONTROLLED INPUT TO TEST useCallback() hook */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 flex gap-4 mb-3">
        {/* Not a controlled component - to avoid re-renders on each input change */}
        <input
          type="text"
          value={item}
          onChange={handleInputChange}
          className="border border-gray-500 px-2 py-1 cursor-pointer rounded focus:border-blue-500 focus:ring-2 placeholder:text-gray-500 "
          placeholder="Add your item"
        />

        <button className="border border-gray-500 px-2  cursor-pointer rounded focus:border-blue-500 focus:ring-2 ">
          Add Item
        </button>
      </form>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(task => (
          <TaskItem
            item={task}
            key={task.id}
            handleCheckedToggle={handleCheckedToggle}
          />
        ))}
      </ul>
    </div>
  )
})
