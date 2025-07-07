import Link from 'next/link'

export default function Header() {
  return (
    <div className="bg-gradient-to-tr from-teal-300 to-teal-400">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 flex items-center justify-between py-4">
        <h2 className="font-extrabold text-blue-900 text-2xl">TaskManager</h2>
        <div>
          <Link
            href="https://imran-rafiq-rather.netlify.app/"
            target="_blank"
            className="hover:underline">
            My Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}
