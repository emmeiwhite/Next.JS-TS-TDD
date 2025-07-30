'use client'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { createContext } from 'react'

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
  login: () => void
}

// 1. Create Context
const NavbarContext = createContext<UserType | null>(null)

// custom context --- save lines of codes
export const useCustomContext = () => {
  const context = useContext(NavbarContext)
  if (!context) {
    throw new Error('useCustomContext must be used within a NavbarContext.Provider')
  }
  return context
}

export default function NavbarChallenge() {
  const [user, setUser] = useState<string | null>('Roufi')

  function logout() {
    console.log('logout clicked')
    setUser(null)
  }

  function login() {
    console.log('login clicked')
    setUser('Roufi')
  }

  const valueState: UserType | null = {
    user,
    logout,
    login
  }
  return (
    <NavbarContext.Provider value={valueState}>
      <div className="flex space-between items-center py-2 gap-5 bg-blue-200 px-4">
        <h2 className="text-xl font-bold">Context API</h2>
        <NavLinks />
      </div>
    </NavbarContext.Provider>
  )
}

function NavLinks() {
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

      <UserContainer />
    </div>
  )
}

function UserContainer() {
  const { user, logout, login } = useCustomContext()
  return (
    <div className="flex space-between items-center gap-4 ">
      {user === null ? (
        <div className="flex gap-3 items-center">
          <p>Please login</p>
          <button
            className="bg-blue-600 rounded px-3 py-1 text-white cursor-pointer"
            onClick={login}>
            login
          </button>
        </div>
      ) : (
        <div className="flex gap-3 items-center">
          <p className="font-bold text-green-900">Hello, {user}</p>
          <button
            className="bg-blue-600 rounded px-3 py-1 text-white cursor-pointer"
            onClick={logout}>
            logout
          </button>
        </div>
      )}
    </div>
  )
}
