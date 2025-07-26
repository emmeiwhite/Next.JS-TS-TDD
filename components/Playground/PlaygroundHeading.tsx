'use client'

export default function PlaygroundHeading({ title }: { title: string }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold my-5">{title}</h1>
    </div>
  )
}
