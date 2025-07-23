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
      <h1>Checkout</h1>
      <Promotions
        coupon={coupon}
        updateCoupon={updateCoupon}
      />
      <Total coupon={coupon} />
    </div>
  )
}
