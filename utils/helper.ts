import { Repo } from "@/types/user/user"

export const sortReposByStars = (repos: Repo[]) => {
  return repos.sort((a, b) => b.stars - a.stars)
}
