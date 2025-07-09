export default async function Views() {
  // Simulating an API call - A 3s delay
  await new Promise(resolve => setTimeout(resolve, 3000))
  return <div>159 Views</div>
}

// We'll practice Suspense in Next.js when a call is made within a page
