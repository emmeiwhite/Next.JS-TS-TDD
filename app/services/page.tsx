'use client'

import Link from 'next/link'

export default function Services() {
  return (
    <div className="py-6">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <h1 className="text-2xl font-semibold my-5">All Services</h1>

        <section className="flex flex-col gap-4">
          <Link href="/services/web-dev">Web Development</Link>
          <Link href="/services/seo">SEO & a11y</Link>
        </section>
      </div>
    </div>
  )
}
