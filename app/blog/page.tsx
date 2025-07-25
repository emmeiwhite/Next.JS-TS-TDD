import Link from 'next/link'

export default async function Blog() {
  return (
    <div className="py-6">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <h1 className="text-2xl font-semibold my-5">Blogs</h1>

        <section className="flex flex-col gap-4">
          <Link href="/blog/1">Blog-1</Link>
          <Link href="/blog/2">Blog-2</Link>
          <Link href="/blog/3">Blog-3</Link>
        </section>
      </div>
    </div>
  )
}
