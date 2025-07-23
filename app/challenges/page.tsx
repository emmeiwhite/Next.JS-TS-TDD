import Challenge1 from '@/components/Challenges/Challenge1'
import Checkout from '@/components/Checkout/Checkout'

export default function page() {
  return (
    <div className="py-6">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <h1 className="text-2xl font-bold mb-8">Challenges in TypeScript & React</h1>

        {/* Challenge-1 */}
        <h2 className="text-xl  mb-4">Challenge-1 (Conditional type & rendering)</h2>
        <div className="flex flex-col gap-4 border-2 p-3 border-orange-400">
          <Challenge1
            type="basic"
            name="rafia"
          />

          <Challenge1
            type="advanced"
            name="imran"
            email="imran@gmail.com"
          />
        </div>

        <div>
          <Checkout />
        </div>
      </div>
    </div>
  )
}
