import { Suspense } from 'react'

type PageProps = {
  params: Promise<{
    blogName: string
  }>
  searchParams?: Promise<{
    [key: string]: string | string[] | undefined
  }>
}

async function fetchBlogs(blogName: string): Promise<any> {
  // Just a 3s delay
  await new Promise(resolve => setTimeout(resolve, 3000))
  const res = await fetch(`https://dev.to/api/articles?tag=${blogName}`)

  if (!res.ok) {
    throw new Error('Cannot fetch Article on :' + blogName)
  }

  const articles = await res.json()
  return articles
}

export default async function page({ params }: PageProps) {
  const { blogName } = await params

  const articles = await fetchBlogs(blogName)
  return (
    <div className="py-6">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <h1 className="text-2xl font-semibold">
          {blogName.charAt(0).toUpperCase() + blogName.slice(1)}
        </h1>

        <Suspense fallback={'loading ...'}>
          <ul className="space-y-4 mt-8">
            {articles.slice(0, 5).map((article: any) => (
              <li key={article.id}>
                <a
                  href={article.url}
                  target="_blank"
                  className="text-blue-600 hover:underline">
                  {article.title}
                </a>
                <p className="text-sm text-gray-600">By {article.user.name}</p>
              </li>
            ))}
          </ul>
        </Suspense>
      </div>
    </div>
  )
}
