import Link from 'next/link'

export default function BlogPage() {
  return (
    <div className="py-6">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <h1 className="text-2xl font-semibold">Blog ⇢ React, Next & TypeScript</h1>

        {/* {toursJSX} */}

        <div className="flex flex-col gap-2 mt-5">
          <p>
            <Link
              href={'/blog/typescript'}
              className="hover:underline">
              TypeScript
            </Link>
          </p>

          <p>
            <Link
              href={'/blog/nextjs'}
              className="hover:underline">
              Next.js
            </Link>
          </p>

          <p>
            <Link
              href={'/blog/reactjs'}
              className="hover:underline">
              React.js
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
