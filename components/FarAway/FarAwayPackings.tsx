import { Item } from './types'

type FawAwayPackingsType = {
  listItems: Item[]
  handleCheckboxChange: (id: string) => void
}

export default function FarAwayPackings({ listItems, handleCheckboxChange }: FawAwayPackingsType) {
  console.log(listItems)
  return (
    <div className="mt-8">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {listItems.map((item: Item) => {
          return (
            <div key={item.id}>
              <p className="flex gap-3 border-1 border-gray-500 px-2 py-1">
                <label htmlFor="checkItem">
                  <input
                    type="checkbox"
                    id="checkItem"
                    checked={item.completed}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </label>

                <span>{item.quantity}</span>
                <span>{item.userName}</span>
              </p>
            </div>
          )
        })}
      </section>
    </div>
  )
}
