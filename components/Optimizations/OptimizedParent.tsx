'use client'

import React, { useState } from 'react'

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

      {/* React.memo(Component) to memoize the Child component and prevent unnecessary re-renders unless the props change within Child */}

      <Child advice="Keep the head high, as you are trying from best" />
    </div>
  )
}
