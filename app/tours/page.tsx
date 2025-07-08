const url: string = 'https://www.course-api.com/react-tours-project'

type Tour = {
  id: string
  name: string
  info: string
  image: string
  price: string
}

async function fetchTours(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Could not fetch Tours')
    }

    const data: Tour[] = await response.json()
    return data
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'there was an error ...'

    console.log(errorMsg)
    return []
  }
}

/** --- Server Side Rendering in Next.js --- */
export default async function ToursPage() {
  const tours = await fetchTours(url)
  console.log(tours)
  const toursJSX: React.ReactNode = tours?.map((tour: Tour) => {
    return (
      <div
        key={tour.id}
        className="p-3 rounded shadow-sm shadow-indigo-400">
        <h2>{tour.name}</h2>
        <p>{tour.price}</p>
      </div>
    )
  })
  return (
    <div className="py-6">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <h1 className="text-2xl font-semibold">Tours</h1>

        {/* {toursJSX} */}

        <h2 className="my-3 text-xl font-bold">Total Tours: {tours.length}</h2>

        <div className="flex flex-col gap-4">{toursJSX}</div>
      </div>
    </div>
  )
}
