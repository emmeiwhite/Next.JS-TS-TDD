'use client'

import PlaygroundHooks4 from '@/components/Playground/PlaygroundHooks4'

// import PlaygroundHooks from '@/components/Playground/PlaygroundHooks'
// import PlaygroundHooks2 from '@/components/Playground/PlaygroundHooks3'

export default function Playground() {
  return (
    <div className="py-6">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        {/* Hooks */}
        {/* <PlaygroundHooks /> */}

        {/* <PlaygroundHooks2 /> */}
        <PlaygroundHooks4 />
      </div>
    </div>
  )
}
