"use client"

import { createContext, useContext, useState } from "react"
import { Repo, User } from "@/types/user/user"
import { fetchGithubRepos, fetchGithubUser } from "@/services/api/api"
import { sortReposByStars } from "@/utils/helper"

type GithubContextType = {
  githubUser: User | null
  repos: Repo[] | null
  isLoading: boolean
  searchGithubUser: (user: string) => Promise<void>
  repoPage: number
  setRepoPage: (page: number) => void
  error: string | null
}

const GithubContext = createContext<GithubContextType | undefined>(undefined)

const GithubProvider = ({ children }: { children: React.ReactNode }) => {
  const [githubUser, setGithubUser] = useState<User | null>(null)
  const [repos, setRepos] = useState<Repo[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [repoPage, setRepoPage] = useState(1)
  const [cachedUsers, setCachedUsers] = useState<Record<string, User>>({})
  const [cachedRepos, setCachedRepos] = useState<Record<string, Repo[]>>({})

  const searchGithubUser = async (username: string) => {
    try {
      setIsLoading(true)
      setError(null)
      setRepoPage(1)

      if (cachedUsers[username] && cachedRepos[username]) {
        setGithubUser(cachedUsers[username])
        setRepos(cachedRepos[username])
        return
      }

      const userData = await fetchGithubUser(username)
      const reposData = await fetchGithubRepos(username)
      const sortedRepos = sortReposByStars(reposData)

      setGithubUser(userData)
      setRepos(sortedRepos)

      setCachedUsers((prev) => ({ ...prev, [username]: userData }))
      setCachedRepos((prev) => ({ ...prev, [username]: sortedRepos }))
    } catch (error: unknown) {
      if (error instanceof Error) {
        setGithubUser(null)
        setError("User not found")
      } else {
        setError("Something went wrong")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const contextValues = {
    githubUser,
    isLoading,
    searchGithubUser,
    repos,
    error,
    repoPage,
    setRepoPage,
  }

  return (
    <GithubContext.Provider value={contextValues}>
      {children}
    </GithubContext.Provider>
  )
}
export default GithubProvider

export const useGithubSearch = () => {
  const githubContext = useContext(GithubContext)
  if (!githubContext) {
    throw new Error("useGithubSearch must be used within a GithubProvider")
  }
  return githubContext
}
