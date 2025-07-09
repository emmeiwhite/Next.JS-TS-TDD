import LoaderSpinner from '@/components/LoaderSpinner/LoaderSpinner'
import Views from '@/components/Views/Views'
import Link from 'next/link'
import { Suspense } from 'react'

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
              className="hover:underline text-orange-500 hover:text-orange-600 transition-colors duration-300">
              TypeScript
            </Link>
          </p>

          <p>
            <Link
              href={'/blog/nextjs'}
              className="hover:underline text-orange-500 hover:text-orange-600 transition-colors duration-300">
              Next.js
            </Link>
          </p>

          <p>
            <Link
              href={'/blog/reactjs'}
              className="hover:underline text-orange-600 hover:text-orange-700 transition-colors duration-300">
              React.js
            </Link>
          </p>
        </div>

        {/* Views */}

        <h3 className="mt-8 mb-3 text-xl font-bold">Stats:</h3>

        <Suspense fallback={<LoaderSpinner />}>
          <Views />
        </Suspense>
      </div>
    </div>
  )
}
