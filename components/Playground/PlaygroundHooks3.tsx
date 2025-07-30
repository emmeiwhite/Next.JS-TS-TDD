'use client'

import { useState } from 'react'
import PlaygroundHeading from './PlaygroundHeading'

export default function PlaygroundHooks3() {
  const [isToggle, setIsToggle] = useState<boolean>(true)

  function handleToggle() {
    setIsToggle(prev => !prev)
  }
  return (
    <div className="mt-7">
      <PlaygroundHeading title="Custom Toggle Hook" />

      <button
        onClick={handleToggle}
        className="border border-gray-500 px-3 py-1 rounded block">
        Toggle JSX Div
      </button>

      {isToggle ? (
        <div className="mt-3 bg-green-800 inline-block px-4 py-1 text-white">
          Live and let live! Never Give up!
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
