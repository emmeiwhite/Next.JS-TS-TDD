const url: string = 'https://www.course-api.com/react-tours-project'

async function fetchTours(url: string) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Could not fetch Tours')
  }

  const data = await response.json()
  return data
}

/** --- Server Side Rendering in Next.js --- */
export default async function ToursPage() {
  const tours = await fetchTours(url)
  console.log(tours)
  return (
    <div className="py-6">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <h1 className="text-2xl font-semibold">Tours</h1>
      </div>
    </div>
  )
}
