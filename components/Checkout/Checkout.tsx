'use client'

import { useState } from 'react'
import Promotions from './Promotions'
import Total from './Total'

export default function Checkout() {
  const [coupon, setCoupon] = useState('uysfhg')

  function updateCoupon() {
    setCoupon('akjdsfhadskf')
  }
  return (
    <div>
      <h1 className="mt-4 font-bold ">Checkout</h1>
      <Promotions
        coupon={coupon}
        updateCoupon={updateCoupon}
      />
      <Total coupon={coupon} />
    </div>
  )
}
