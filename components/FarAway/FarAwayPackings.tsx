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
              <div className="flex gap-3 border-1 border-gray-500 px-4 py-1 justify-between">
                <p className="flex gap-3">
                  <label htmlFor="checkItem">
                    <input
                      type="checkbox"
                      id="checkItem"
                      checked={item.completed}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </label>

                  <span className="font-bold">{item.quantity}</span>
                  <span className="font-bold capitalize">{item.itemName}</span>
                </p>

                <button>❌</button>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}
