'use client'
import { useEffect, useState } from 'react'

type Payload = {
  text: string
}
export default function PlaygroundHooks() {
  const [payload, setPayload] = useState<Payload | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPayload = async () => {
      try {
        const response = await fetch('/data/payload.json')
        const data = await response.json()
        setPayload(data)
      } catch (error) {
        console.error('Error fetching payload:', error)
        setError('Error: Could not get the payload data')
      } finally {
        setLoading(false)
      }
    }

    // Simulate 2s delay
    setTimeout(fetchPayload, 2000)
  }, [payload])

  if (loading) {
    return <p className="my-5 font-bold text-2xl">Loading ...</p>
  }

  if (error) {
    return <p className="my-5 font-bold text-2xl">Error ...</p>
  }
  return (
    <div>
      <p className="my-5 font-bold text-2xl">1. useState Hook Typing</p>

      <p>{JSON.stringify(payload)}</p>

      <p className="my-5 font-bold text-2xl">2. useReducer Hook </p>
    </div>
  )
}
