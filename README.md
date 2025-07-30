### Zod

```ts
// ✅ Step 1: Install zod
import { z } from 'zod'

// ✅ Step 2: Define a Zod Schema for Tour
const TourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string()
})

// ✅ Step 3: Infer  TS type
type Tour = z.infer<typeof TourSchema>

// ✅ Step 4: safeParse data and then use (zod does gatekeeping for us). Here we use Schema.safeParse() e.g, TourSchema.safeParse(jsonData)
```

### Github User Example

```ts
import * as z from 'zod'

// Step-1: Create Schema of the type - Run-Time Schema to check the incoming data

export const GitHubUserSchema = z.object({
  login: z.string(),
  id: z.number(),
  node_id: z.string(),
  avatar_url: z.string().url(),
  gravatar_id: z.string(),
  url: z.string().url(),
  html_url: z.string().url(),
  followers_url: z.string().url(),
  following_url: z.string(),
  gists_url: z.string(),
  starred_url: z.string(),
  subscriptions_url: z.string().url(),
  organizations_url: z.string().url(),
  repos_url: z.string().url(),
  events_url: z.string(),
  received_events_url: z.string(),
  type: z.string(),
  user_view_type: z.string(),
  site_admin: z.boolean(),
  name: z.string(),
  company: z.nullable(z.string()),
  blog: z.string(),
  location: z.string(),
  email: z.nullable(z.string()),
  hireable: z.nullable(z.boolean()),
  bio: z.string(),
  twitter_username: z.nullable(z.string()),
  public_repos: z.number(),
  public_gists: z.number(),
  followers: z.number(),
  following: z.number(),
  created_at: z.string(),
  updated_at: z.string()
})

// Step-2: Compile Time Schema
export type GitHubUserType = z.infer<typeof GitHubUserSchema>
```

Usage: useFetch Custom Hook

```ts
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
```

### 🧠 What Are Generics (In Plain Words)?

A `Generic is like a placeholder for a type` — you don’t know yet what the type will be, so you leave it flexible.

Just like a `function parameter` lets you pass in values, `a generic lets you pass in types.`

### ✅ 1. Without Generics — Fixed Types

```ts
function echoString(value: string): string {
  return value
}

echoString('hello') // works
echoString(123) // ❌ error
```

Only works with `string`.

### ✅ 2. With Generics — Flexible Type!

```ts
function echo<T>(value: T): T {
  return value
}

echo<string>('hello') // T will be string
echo(123) // inferred as number
echo(true) // inferred as boolean
```

Here, T is a type variable — it will be whatever type the caller passes in.

### ✅ 3. Generics in Type Aliases

```ts
type ApiResponse<T> = {
  data: T
  error: string | null
}

const userResponse: ApiResponse<{ name: string }> = {
  data: { name: 'Imran' },
  error: null
}

const todosResponse: ApiResponse<string[]> = {
  data: ['Buy Milk', 'Pray Fajr'],
  error: null
}
```

You create generic types like `ApiResponse<T>` that can be reused across your app.

### 🧩 Bonus Tip: You Can Also Pass Generics Explicitly

```ts
echo<string>('Hello') // T is string
echo<number>(42) // T is number
```

## 🔁 Summary

| Concept                | Code                                             |          |
| ---------------------- | ------------------------------------------------ | -------- |
| Basic Generic Function | `function echo<T>(val: T): T`                    |          |
| Array                  | `function first<T>(arr: T[]): T`                 |          |
| Object                 | `function getKey<T>(obj: T, key: keyof T)`       |          |
| Generic Type           | \`type ApiResponse<T> = { data: T; error: string | null }\` |
| Custom Hook            | `useFetch<T>(url: string): { data: T }`          |          |

`Note:` Generic takes some time to digest, So take time
