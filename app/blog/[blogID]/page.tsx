import Link from 'next/link'

type SingleBlogType = {
  params: Promise<{ blogID: number }>
  searchParams?: Promise<{
    [key: string]: string | string[] | undefined
  }>
}

export default async function SingleBlog({ params }: SingleBlogType) {
  const { blogID } = await params

  console.log(blogID)

  return (
    <div className="py-6">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <h1 className="text-2xl font-semibold my-5">Blogs</h1>

        <section className="flex flex-col gap-4 mb-8">
          <h2 className="font-bold">Current BlogID: {blogID}</h2>

          <p>
            Now we can make an API call with this id and get whole blog details and render in UI
          </p>
        </section>

        <Link href={`/blog`}>🔙 Back </Link>
      </div>
    </div>
  )
}
