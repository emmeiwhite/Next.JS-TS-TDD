'use client'
import TaskManager from '@/components/TodoApp/TaskManager'

export default function Home() {
  function handleClick() {
    console.log('I am a server component, do not use event handlers here mate!')
  }

  return (
    <div className="">
      <TaskManager />
      <button onClick={handleClick}>Click Me! Testing</button>
    </div>
  )
}
