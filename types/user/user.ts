export type Repo = {
  name: string
  stars: number
  forks: number
  description: string
  stargazers_count: number
  forks_count: number
}

export type User = {
  login: string
  avatar_url: string
  html_url: string
  name: string
  company: string
  blog: string
  bio: string
  location: string
  twitter_username: string
  followers: number
  following: number
  public_repos: number
}
