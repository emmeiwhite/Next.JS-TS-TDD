'use client'

import { useState } from 'react'

type Item = {
  id: number
  name: string
  completed: boolean
}

type ListItem = {
  item: Item
  handleCheckedToggle: (id: number) => void
}

function TaskItem({ item, handleCheckedToggle }: ListItem) {
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
}
export default function ListItemsParent() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'Pray Fajr', completed: false },
    { id: 2, name: 'Read Quran', completed: false },
    { id: 3, name: 'Master React & TS', completed: false }
  ])

  console.log(items)
  // General behaviour is that: React re-creates functions on every render.
  function handleCheckedToggle(id: number) {
    console.log('handleChecked Invoked!')
    setItems(prev => {
      return prev.map(item => {
        return item.id !== id ? item : { ...item, completed: !item.completed }
      })
    })
  }
  return (
    <div className="mt-7">
      <h1 className="text-2xl font-bold">Daily Tasks</h1>

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
}
