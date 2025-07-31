import React, { createContext, useContext, useState } from 'react'
type ContextType = { testValue: number; updateValue: () => void }

// 1. Create Context
const GlobalContext = createContext<ContextType | null>(null)

// 2. Create Provider frm
export default function GlobalContextProvider({ children }: { children: React.ReactNode }) {
  const [testValue, setTestValue] = useState<number>(4)

  // All handlers here itself at Context Level that work on the State data
  function updateValue() {
    setTestValue(prev => prev + 1)
  }
  return (
    <GlobalContext.Provider value={{ testValue, updateValue }}>{children}</GlobalContext.Provider>
  )
}

// 3. Custom Hook to use context quickly without too much code
export const useGlobalContext = () => useContext(GlobalContext)
