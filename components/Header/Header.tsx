import Link from 'next/link'

export default function Header() {
  return (
    <div className="bg-gradient-to-tr from-teal-300 to-teal-400">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 flex items-center justify-between py-4">
        <Link href={'/'}>
          {' '}
          <h2 className="font-extrabold text-blue-900 text-xl">TaskManager</h2>
        </Link>

        <div className="flex items-center gap-4 text-sm">
          <Link
            href={'/tours'}
            className="hover:underline">
            Tours
          </Link>

          <Link
            href={'/blog'}
            className="hover:underline">
            My Blog
          </Link>
        </div>
      </div>
    </div>
  )
}
