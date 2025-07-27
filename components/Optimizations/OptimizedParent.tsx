'use client'

import React, { useRef, useState } from 'react'
import ListItemsParent from './ListItemsParent'

// Remember O Imran: The React.memo() mostly comes into play when we have a Child Component  to which the props are passed from the Parent Component. We want the Child to re-render only when that particular prop updates, otherwise not!

const Child = React.memo(function ChildComponent({ advice }: { advice: string }) {
  console.log('Child Component Re-Renders')
  return (
    <div className="mt-5">
      <h1 className="font-bold text-xl my-2">Advice of the Day</h1>
      <h2 className="">{advice}</h2>
    </div>
  )
})

export default function OptimizedParent() {
  const [count, setCount] = useState(0)
  const [advice, setAdvice] = useState('')

  const intputElemRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!intputElemRef.current) return

    setAdvice(intputElemRef.current.value)
    intputElemRef.current.value = ''
  }

  return (
    <div className="mt-7">
      <h1 className="font-bold text-2xl mb-5">Optimized Parent</h1>

      <div className="flex gap-6 items-center">
        <button
          className="border border-gray-500 px-4 py-2 cursor-pointer rounded focus:border-blue-500 focus:ring-2"
          onClick={() => setCount(prev => prev + 1)}>
          Increase Count
        </button>

        <h2 className="text-3xl font-bold">{count}</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 flex gap-4">
        {/* Not a controlled component - to avoid re-renders on each input change */}
        <input
          type="text"
          ref={intputElemRef}
          className="border border-gray-500 px-2 py-1 cursor-pointer rounded focus:border-blue-500 focus:ring-2 placeholder:text-gray-500"
          placeholder="Live and let live ..."
        />

        <button className="border border-gray-500 px-2 py-1 cursor-pointer rounded focus:border-blue-500 focus:ring-2 ">
          Add Advice
        </button>
      </form>

      {/* React.memo(Component) to memoize the Child component and prevent unnecessary re-renders unless the props change within Child */}

      <Child advice={advice} />

      {/* useCallback() Example */}

      <ListItemsParent test="test" />
    </div>
  )
}

// GOLDEN TRICK:
/*
💬 “Every optimization should begin with a question: Will this part cause unnecessary re-renders?” —
*/
