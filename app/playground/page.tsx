'use client'

import PlaygroundBox from '@/components/Playground/PlaygroundBox'
import PlaygroundHeading from '@/components/Playground/PlaygroundHeading'
import PlaygroundList from '@/components/Playground/PlaygroundList'
import { useCallback } from 'react'

const items = [
  { id: '1', name: 'Toothbrush' },
  { id: '2', name: 'Passport' },
  { id: '3', name: 'Travel Adapter' },
  { id: '4', name: 'Phone Charger' },
  { id: '5', name: 'Sunglasses' },
  { id: '6', name: 'Snacks' },
  { id: '7', name: 'Water Bottle' },
  { id: '8', name: 'Notebook' },
  { id: '9', name: 'Pen' },
  { id: '10', name: 'Headphones' }
]

export default function Playground() {
  const handleClick = useCallback((item: string) => {
    console.log(item)
  }, [])
  return (
    <div className="py-6">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <PlaygroundHeading title="The FarAway Dream Home" />
        <PlaygroundBox>
          <p>
            We are type casting the children props with <code>React.ReactNode</code>
          </p>
        </PlaygroundBox>

        <PlaygroundList
          items={items}
          handleClick={handleClick}
        />
      </div>
    </div>
  )
}
