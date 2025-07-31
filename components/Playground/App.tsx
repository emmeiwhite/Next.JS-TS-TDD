'use client'

import { people } from '@/data/data'
import AppList from './AppList'
import { useEffect, useState } from 'react'

type User = {
  id: number
  name: string
}

export default function App() {
  const [users, setUsers] = useState(() => {
    // On first render (client-side only), check localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('users')
      if (stored) {
        return JSON.parse(stored)
      }
    }
    return people
  })

  // Every time users change, sync to localStorage
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  function deleteUser(id: number) {
    const updatedUsers = users.filter((user: User) => user.id !== id)
    setUsers(updatedUsers)
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <AppList
        users={users}
        deleteUser={deleteUser}
      />
    </div>
  )
}
