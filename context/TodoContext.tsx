import { createContext, useContext, useState } from 'react'

// 1. Create Context
const TodoContext = createContext(null)

// 2. Create Provider frm
export default function TodoContextProvider({ children }) {
  const [testValue, setTestValue] = useState<number>(4)

  // All handlers here itself at Context Level that work on the State data
  function updateValue() {
    setTestValue(prev => prev + 1)
  }
  return <TodoContext.Provider value={{ testValue, updateValue }}>{children}</TodoContext.Provider>
}

// 3. Custom Hook to use context quickly without too much code
export const useTodoContext = () => useContext(TodoContext)
