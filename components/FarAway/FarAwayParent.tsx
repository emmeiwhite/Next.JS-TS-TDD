'use client'

import { useState } from 'react'
import FarAwayFooter from './FarAwayFooter'
import FarAwayForm from './FarAwayForm'
import FarAwayHeader from './FarAwayHeader'
import FarAwayPackings from './FarAwayPackings'
import { Item } from './types'

export default function FarAwayParent() {
  const [listItems, setListItems] = useState<Item[]>([])

  /** Passing function down as prop for child to parent data passing trick */
  function addListItem(item: Item) {
    setListItems([...listItems, item])
  }
  return (
    <div>
      <FarAwayHeader />
      <FarAwayForm addListItem={addListItem} />
      <FarAwayPackings listItems={listItems} />
      <FarAwayFooter />
    </div>
  )
}
