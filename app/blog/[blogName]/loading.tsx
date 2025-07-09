'use client'

export default function LoaderSpinner() {
  return (
    <div className="py-6">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <h1 className="text-2xl font-semibold my-5">Blog Loading</h1>

        <section className="grid gap-5">
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <div
                className="animate-pulse flex flex-col gap-2 mb-4 border-1 border-gray-300 shadow-sm p-3 rounded"
                key={index}>
                <div className="h-4 bg-gray-300 rounded w-4/5"></div>
                <div className="h-3 bg-gray-400 rounded w-32"></div>
              </div>
            )
          })}
        </section>
      </div>
    </div>
  )
}
