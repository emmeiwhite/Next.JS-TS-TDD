import { GitHubUserSchema, GitHubUserType } from '@/app/types/githubUser'
import { useEffect, useState } from 'react'

export default function useFetch(url: string) {
  const [user, setUser] = useState<GitHubUserType | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const fetchUser = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const json = await response.json()

      // Parse the Run-Time Data | Gate Keeping by zod at run-time
      const parsed = GitHubUserSchema.safeParse(json)

      if (parsed.success) {
        setUser(parsed.data)
      } else {
        console.error('Zod Validation Failed:', parsed.error)
        setError('Invalid data shape from API.')
      }
    } catch (err) {
      console.error('Fetch Error:', err)
      setError('Error fetching data.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [url])

  return { user, loading, error }
}
