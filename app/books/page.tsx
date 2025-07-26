import { BookType } from '../types/book'

export default async function BooksPage() {
  const response = await fetch('https://openlibrary.org/people/mekBot/books/want-to-read.json')
  const data = await response.json()

  const { reading_log_entries: books } = data
  console.log(books)
  return (
    <div className="py-6">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <h1 className="text-2xl font-semibold my-5">All Books </h1>

        <section className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {books.map((book: BookType) => {
            const {
              work: { cover_id, title, first_publish_year }
            } = book
            return (
              <div
                key={cover_id}
                className="shadow-lg px-3 py-4 ">
                <h3 className="flex gap-3">
                  <span className="font-bold">Title: </span>
                  <span className="line-clamp-2">{title}</span>
                </h3>
                <p>
                  <span className="font-bold">Published in: </span> {first_publish_year}
                </p>
              </div>
            )
          })}
        </section>
      </div>
    </div>
  )
}
