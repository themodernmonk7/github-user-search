import { BASE_URL } from "@/constants"
import { Repo, User } from "@/types/user/user"

export const fetchGithubUser = async (username: string): Promise<User> => {
  const res = await fetch(`${BASE_URL}/users/${username}`)
  if (res.status === 404) {
    throw new Error("User not found")
  }
  if (!res.ok) {
    throw new Error("Failed to fetch user")
  }

  return res.json()
}

export const fetchGithubRepos = async (username: string): Promise<Repo[]> => {
  const res = await fetch(`${BASE_URL}/users/${username}/repos?per_page=100`)
  if (!res.ok) throw new Error("Failed to fetch repos")

  const data = await res.json()
  return data.map((repo: Repo) => ({
    name: repo.name,
    description: repo.description,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
  }))
}
