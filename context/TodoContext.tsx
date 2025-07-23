import { createContext, useContext, useState } from 'react'

// 1. Create Context
const TodoContext = createContext(null)

// 2. Create Provider frm
export default function TodoContextProvider({ children }) {
  const [testValue, setTestValue] = useState(4)

  const numbers: Array<number> = [2, 3, 4]
  const strings: string[] = ['a', 'ddd', 'uu']
  let myRegex: RegExp = /foo/

  console.log(numbers)
  console.log(strings)
  console.log(myRegex)

  myRegex = /boo/

  type PersonType = {
    firstName: string
    lastName: string
  }

  const person: PersonType = {
    firstName: 'Imi',
    lastName: 'jimmi'
  }

  console.log(person)

  /** Map of ids */
  /** Objects as Maps in JavaScript Record Type: Define both key and value type */
  const ids: Record<number, string> = {
    10: 'a',
    20: 'b'
  }

  ids[30] = '30'

  const arr = [1, 2, 3].map(v => `${v * 10}`)
  console.log(arr)
  // All handlers here itself at Context Level that work on the State data
  function updateValue() {
    setTestValue(prev => prev + 1)
  }
  return <TodoContext.Provider value={{ testValue, updateValue }}>{children}</TodoContext.Provider>
}

// 3. Custom Hook to use context quickly without too much code
export const useTodoContext = () => useContext(TodoContext)
