'use client'

export default function LoaderSpinner() {
  return (
    <div className="py-6">
      <div className="animate-pulse flex flex-col gap-2 mb-4 border-1 border-gray-300 shadow-sm p-3 rounded">
        <div className="h-4 bg-gray-300 rounded w-4/5"></div>
        <div className="h-3 bg-gray-400 rounded w-32"></div>
      </div>
    </div>
  )
}
