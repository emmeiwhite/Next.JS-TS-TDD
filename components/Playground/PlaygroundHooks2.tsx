'use client'

import { useCallback, useReducer, useContext, useState } from 'react'
import PlaygroundHeading from './PlaygroundHeading'

export default function PlaygroundHooks3() {
  return (
    <div className="mt-7">
      <PlaygroundHeading title="Playground Hooks 3 - useContext, useReducer" />

      <p>Life moves on!</p>
    </div>
  )
}
