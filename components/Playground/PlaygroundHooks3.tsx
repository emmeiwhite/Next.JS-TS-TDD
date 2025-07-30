'use client'

import { useCallback, useReducer, useRef, useState } from 'react'
import PlaygroundHeading from './PlaygroundHeading'

type Item = {
  id: string
  name: string
  quantity: number
  completed: boolean
}

type ActionType =
  | { type: 'ADD'; text: string; quantity: number }
  | { type: 'DELETE'; id: string }
  | { type: 'UPDATE'; id: string }

// State updates will now happen from the reducer, not within the Application(View)
function reducer(state: Item[], action: ActionType): Item[] {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: new Date().toISOString(),
          name: action.text,
          completed: false,
          quantity: action.quantity
        }
      ]
    case 'DELETE':
      return state.filter(item => item.id !== action.id)
    case 'UPDATE':
      return state.map(item =>
        item.id !== action.id ? item : { ...item, completed: !item.completed }
      )
    default:
      return state
  }
}

export default function PlaygroundHooks3() {
  return (
    <div className="mt-7">
      <PlaygroundHeading title="Custom Toggle Hook" />
    </div>
  )
}
