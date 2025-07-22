'use client'

import { useState } from 'react'

export default function Quiz() {
  const [count, setCount] = useState(1 || 0)

  const handleIncrease = e => {
    setCount(prev => Number(prev + 1))
  }

  const handleDecrease = e => {
    if (count === 0) {
      return
    }
    setCount(prev => Number(prev - 1))
  }

  function getUpdatedDate() {
    const date = new Date()

    date.setDate(date.getDate() + Number(count))
    return date.toDateString()
  }

  return (
    <div className="py-6">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <h1 className="text-2xl font-semibold my-5">Quiz App</h1>

        <section className="grid gap-5">
          <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-lg shadow-md w-fit">
            <button
              className="text-2xl w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              onClick={handleDecrease}>
              -
            </button>

            <input
              type="number"
              value={count}
              onChange={e => setCount(Number(e.target.value) || '')}
              className="w-30 text-center text-xl border border-md rounded border-gray-400  focus:outline-none focus:ring-2 focus:ring-blue-400 "
            />

            <button
              className="text-2xl w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              onClick={handleIncrease}>
              +
            </button>
          </div>

          <div>
            <button
              onClick={() => setCount(0)}
              className="border border-gray-400 rounded border-lg px-4 py-1 cursor-pointer">
              Reset
            </button>
          </div>
        </section>

        <div>{count === 0 && <p>Today is {getUpdatedDate()}</p>}</div>
        <div>{count === 1 && <p>One day from now is {getUpdatedDate()}</p>}</div>
        <div>
          {count > 1 && (
            <p>
              {count} days from now is {getUpdatedDate()}
            </p>
          )}
        </div>

        <div>
          {count < 0 && (
            <p>
              {count} days from now is {getUpdatedDate()}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
