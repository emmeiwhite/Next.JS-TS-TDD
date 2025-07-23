type PromotionsProps = {
  coupon: string
  updateCoupon: () => void
}

export default function Promotions({ coupon, updateCoupon }: PromotionsProps) {
  return (
    <div>
      <h1>Promotions</h1>
      <p>{coupon}</p>

      <button onClick={updateCoupon}>New Coupon</button>
    </div>
  )
}
