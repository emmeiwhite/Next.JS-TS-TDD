'use client'

type ListType = {
  items: string[]
}
export default function PlaygroundList({ items }: ListType) {
  return (
    <div className="mt-7">
      <h1 className="font-bold text-2xl">Items</h1>
      {items.map(item => {
        return <p key={item}>{item}</p>
      })}
    </div>
  )
}
