'use client'

export default function Services() {
  return (
    <div className="py-6">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <h1 className="text-2xl font-semibold my-5">Services</h1>

        <section className="grid gap-5">
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <div key={index}>
                <h1>Service {index + 1}</h1>
              </div>
            )
          })}
        </section>
      </div>
    </div>
  )
}
