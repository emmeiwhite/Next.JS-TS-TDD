'use client'

import { people } from '@/data/data'
import AppList from './AppList'
import { useCallback, useEffect, useReducer } from 'react'

type stateType = {
  users: typeof people
  isLoading: boolean
  isError: string
}

/* This is a generic union-style action.
type actionType = { type: string; id?: number; users?: typeof people }
*/

// This is called a discriminated union, and TypeScript can then infer exactly which fields are required for which action.
type actionType =
  | { type: 'clear_all' }
  | { type: 'reset'; users: typeof people }
  | { type: 'set_users'; users: typeof people }
  | { type: 'delete_user'; id: number }

// type reducerType = (state:stateType,action:actionType)=>

// Default State
const initialState = {
  users: [],
  isLoading: false,
  isError: ''
}

// Actions
const clear_all = 'clear_all'
const reset = 'reset'
const set_users = 'set_users'
const delete_user = 'delete_user'

function reducer(state: stateType, action: actionType) {
  if (action.type === clear_all) {
    return { ...state, users: [] }
  }

  if (action.type === reset) {
    return { ...state, users: action.users }
  }

  if (action.type === delete_user) {
    const updatedState = state.users.filter(user => user.id !== action.id)
    return { ...state, users: updatedState }
  }

  return state
}

export default function App() {
  const [state, dispatch] = useReducer<stateType, actionType>(reducer, initialState)
  // const [users, setUsers] = useState<typeof people>([])

  const getAllUsers = useCallback(function getAllUsers() {
    const storedUsers = localStorage.getItem('users')

    console.log(typeof storedUsers) // string | So the below condition is true

    if (storedUsers) {
      console.log('storedUsers')
      const parsed = JSON.parse(storedUsers) // can be an [] or there can be users
      console.log(parsed)
      if (parsed.length !== 0) {
        console.log('From Local Storage')
        dispatch({ type: set_users, users: parsed })
      } else {
        console.log('First time or after all users are deleted!')
        dispatch({ type: reset, users: people })
      }
    }
  }, [])

  // Load from localStorage only after the component has mounted (avoids hydration error)
  useEffect(() => {
    dispatch({ type: reset, users: people })
  }, [getAllUsers])

  // Sync any user changes to localStorage
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(state.users))
  }, [state.users])

  const deleteUser = useCallback(function deleteUser(id: number) {
    dispatch({ type: delete_user, id })
  }, [])

  function deleteAll() {
    // setUsers([])
    dispatch({ type: 'clear_all' })
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      {state.users.length === 0 ? (
        <button
          className="border border-md border-gray-500 rounded px-3 py-1"
          onClick={() => getAllUsers()}>
          Reset
        </button>
      ) : (
        <>
          <AppList
            users={state.users}
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
