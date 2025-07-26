'use client'

type Item = {
  id: string
  name: string
}

type ListType = {
  items: Item[]
  handleClick?: (item: string) => void
}

export default function PlaygroundList({ items, handleClick }: ListType) {
  return (
    <div className="mt-7">
      <h1 className="font-bold text-2xl mb-5">Items</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(item => {
          return (
            <li
              key={item.id}
              onClick={() => handleClick?.(item.name)}
              className="cursor-pointer hover:text-amber-800 hover:font-bold">
              {item.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
