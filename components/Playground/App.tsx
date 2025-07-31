'use client'

import { people } from '@/data/data'
import AppList from './AppList'
import { useCallback, useEffect, useState } from 'react'

type User = {
  id: number
  name: string
}

export default function App() {
  const [users, setUsers] = useState<typeof people>([])

  const getAllUsers = useCallback(function getAllUsers() {
    const storedUsers = localStorage.getItem('users')

    console.log(typeof storedUsers) // string | So the below condition is true

    if (storedUsers) {
      console.log('storedUsers')
      const parsed = JSON.parse(storedUsers) // can be an [] or there can be users
      console.log(parsed)
      if (parsed.length !== 0) {
        console.log('From Local Storage')
        setUsers(parsed)
      } else {
        console.log('First time or after all items are deleted!')
        setUsers(people)
      }
    }
  }, [])

  // Load from localStorage only after the component has mounted (avoids hydration error)
  useEffect(() => {
    getAllUsers()
  }, [getAllUsers])

  // Sync any user changes to localStorage
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  const deleteUser = useCallback(
    function deleteUser(id: number) {
      const updatedUsers = users.filter((user: User) => user.id !== id)
      setUsers(updatedUsers)
    },
    [users]
  )

  function deleteAll() {
    setUsers([])
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      {users.length === 0 ? (
        <button
          className="border border-md border-gray-500 rounded px-3 py-1"
          onClick={() => getAllUsers()}>
          Reset
        </button>
      ) : (
        <>
          <AppList
            users={users}
            deleteUser={deleteUser}
          />

          <div className="mt-10 text-center">
            <button
              onClick={deleteAll}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition cursor-pointer">
              Clear All
            </button>
          </div>
        </>
      )}
    </div>
  )
}
