'use client'

import Link from 'next/link'

export default function Services() {
  return (
    <div className="py-6">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <h1 className="text-2xl font-semibold my-5">Web Development Services</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, ratione. Quos
          veritatis rerum amet perferendis impedit. Architecto sapiente hic corporis, assumenda
          fugit beatae, laboriosam ab deleniti qui natus iusto ipsum, modi veritatis quod omnis
          quis! Rerum, impedit doloribus eaque magni dignissimos, soluta quo voluptate odit,
          nesciunt adipisci sint labore! Blanditiis minus porro vitae hic, assumenda illo officiis
          voluptatibus excepturi rem totam aliquid ab unde reiciendis nostrum provident molestiae
          non. Nam et quae veritatis libero, excepturi nisi corrupti vitae iste ratione nesciunt.
          Ullam vitae eligendi, nobis delectus ipsum natus nemo nulla dicta? Ut illum distinctio
          quaerat ab quidem culpa accusantium harum!
        </p>

        <section className="flex flex-col gap-4 mt-8">
          <Link href="/services">🔙 Services</Link>
        </section>
      </div>
    </div>
  )
}
