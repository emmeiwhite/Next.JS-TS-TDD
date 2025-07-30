'use client'

import Image from 'next/image'
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner'
import PlaygroundHeading from './PlaygroundHeading'
import useFetch from './useFetch'
import useToggle from './useToggle'

const url = 'https://api.github.com/users/emmeiwhite'

export default function PlaygroundHooks3() {
  const { show, toggle } = useToggle(true)

  // useFetch custom hook for github user run-time data
  const { loading, error, user } = useFetch(url)

  if (loading) {
    return <LoaderSpinner />
  }

  if (error) {
    return <p className="text-xl text-red-500">Error: Could not fetch the user</p>
  }
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

      <PlaygroundHeading title="Custom Fetch Hook | Github Users" />

      {user ? (
        <div>
          <h1>{user?.name}</h1>
          <Image
            src={user?.avatar_url}
            alt={user?.login}
            className="rounded-full"
            height={300}
            width={300}
            // quality={75} by default
          />
          <p>{user?.bio}</p>
          <a
            href={user?.html_url}
            target="_blank"
            rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  )
}
