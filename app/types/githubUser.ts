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
