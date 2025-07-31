import { memo } from 'react'
import { delete_item } from './App'

type User = {
  id: number
  name: string
}

type UsersType = {
  users: User[]
  deleteUser: (id: number) => void
}

function AppList({ users, deleteUser }: UsersType) {
  return (
    <ul className="space-y-3">
      {users.map(user => (
        <li
          key={user.id}
          className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded shadow">
          <span className="text-gray-800 font-medium">{user.name}</span>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            onClick={() => {
              deleteUser(user.id)
            }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default memo(AppList)
