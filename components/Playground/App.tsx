'use client'

import { people } from '@/data/data'
import AppList from './AppList'
import { useCallback, useEffect, useState, useReducer } from 'react'

type User = {
  id: number
  name: string
}

type stateType = {
  users: typeof people
  isLoading: boolean
  isError: string
}
type actionType = { type: string; items?: typeof people }

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
const set_items = 'set_items'
// reducer may seem as if we are reducing something, Please do not be misled by naming. Reducer function is a pure function which actually returns an updated form of our state everytime user performs an action. And React team has also named that thing within React as action object with a type.
function reducer(state: stateType, action: actionType) {
  if (action.type === clear_all) {
    return { ...state, users: [] }
  }

  if (action.type === reset) {
    return { ...state, users: action.items }
  }

  return state
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
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
        // setUsers(parsed)
        dispatch({ type: set_items, items: parsed })
      } else {
        console.log('First time or after all items are deleted!')
        console.log(parsed)
        // setUsers(people)
        dispatch({ type: reset, items: people })
      }
    }
  }, [])

  // Load from localStorage only after the component has mounted (avoids hydration error)
  useEffect(() => {
    // getAllUsers()
    dispatch({ type: reset, items: people })
  }, [getAllUsers])

  // Sync any user changes to localStorage
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(state.users))
  }, [state.users])

  const deleteUser = useCallback(
    function deleteUser(id: number) {
      const updatedUsers = state.users.filter((user: User) => user.id !== id)
      // setUsers(updatedUsers)
    },
    [state.users]
  )

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
