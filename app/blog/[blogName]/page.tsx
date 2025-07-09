type PageProps = {
  params: {
    blogName: string
  }
  searchParams?: {
    [key: string]: string | string[] | undefined
  }
}

export default async function page({ params }: PageProps) {
  const { blogName } = await params

  return (
    <div className="py-6">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <h1 className="text-2xl font-semibold">
          {blogName.charAt(0).toUpperCase() + blogName.slice(1)}
        </h1>
      </div>
    </div>
  )
}
