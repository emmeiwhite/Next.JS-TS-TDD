'use client'
import Link from 'next/link'
import { useState } from 'react'

type Link = {
  link: string
  id: number
}

const links: Link[] = [
  {
    link: 'Home',
    id: 1
  },
  {
    link: 'About',
    id: 2
  }
]

type UserType = {
  user: string | null
  logout: () => void
}

export default function NavbarChallenge() {
  const [user, setUser] = useState<string | null>('Roufi')

  function logout() {
    setUser(null)
  }

  return (
    <div className="flex space-between items-center py-2 gap-5 bg-blue-200 px-4">
      <h2 className="text-xl font-bold">Context API</h2>
      <NavLinks
        user={user}
        logout={logout}
      />
    </div>
  )
}

function UserContainer({ user, logout }: UserType) {
  return (
    <div className="flex space-between items-center gap-4 ">
      {user !== null ? (
        <div className="flex gap-3 items-center">
          <p className="font-bold text-green-900">{user}</p>
          <button className="bg-blue-600 rounded px-3 py-1 text-white cursor-pointer">
            logout
          </button>{' '}
        </div>
      ) : (
        <div className="flex gap-3 items-center">
          <p>Please login</p>
          <button
            className="bg-blue-600 rounded px-3 py-1 text-white"
            cursor-pointer>
            logout
          </button>{' '}
        </div>
      )}
    </div>
  )
}

function NavLinks({ user, logout }: UserType) {
  return (
    <div className="flex space-between items-center gap-4 flex-1">
      <ul className="flex space-between items-center gap-4 flex-1">
        {links.map(item => {
          const { id, link } = item
          return (
            <li
              key={id}
              className="text-blue-600 hover:text-orange-700 hover:underline ">
              <Link href={`/${link}`}>{link}</Link>
            </li>
          )
        })}
      </ul>

      <UserContainer
        user={user}
        logout={logout}
      />
    </div>
  )
}
