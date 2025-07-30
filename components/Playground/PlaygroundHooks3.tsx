'use client'

import PlaygroundHeading from './PlaygroundHeading'
import useToggle from './useToggle'

const url = 'https://api.github.com/users/emmeiwhite'

export default function PlaygroundHooks3() {
  const { show, toggle } = useToggle(true)

  return (
    <div className="mt-7">
      <PlaygroundHeading title="Custom Toggle Hook" />

      <button
        onClick={toggle}
        className="border border-gray-500 px-3 py-1 rounded block">
        Toggle JSX Div
      </button>

      {show ? (
        <div className="mt-3 bg-green-800 inline-block px-4 py-1 text-white">
          Live and let live! Never Give up!
        </div>
      ) : (
        ''
      )}

      <PlaygroundHeading title="Custom Fetch Hook" />
    </div>
  )
}
