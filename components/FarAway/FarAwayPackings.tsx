import { Item } from './types'

export default function FarAwayPackings({ listItems }: { listItems: Item[] }) {
  return (
    <div>
      <h1>Total List Items: {listItems.length}</h1>
    </div>
  )
}
