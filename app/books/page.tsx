export default async function BooksPage() {
  const response = await fetch('https://openlibrary.org/people/mekBot/books/want-to-read.json')
  const data = await response.json()

  console.log(data)
  return (
    <div className="py-6">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <h1 className="text-2xl font-semibold my-5">All Books </h1>

        <section className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3>Book1</h3>
          </div>

          <div>
            <h3>Book2</h3>
          </div>

          <div>
            <h3>Book3</h3>
          </div>

          <div>
            <h3>Book4</h3>
          </div>

          <div>
            <h3>Book5</h3>
          </div>

          <div>
            <h3>Book6</h3>
          </div>

          <div>
            <h3>Book7</h3>
          </div>

          <div>
            <h3>Book8</h3>
          </div>
        </section>
      </div>
    </div>
  )
}
