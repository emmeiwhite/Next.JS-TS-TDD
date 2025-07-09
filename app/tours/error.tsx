'use client'
export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className="py-6">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <h1 className="text-xl my-5 text-red-600">Error fetching tours data: {error.message}</h1>
      </div>
    </div>
  )
}
