import React from "react"
import { Star, GitFork, TrendingUp } from "lucide-react"
import { useGithubSearch } from "@/context/github"
import { REPOS_PER_PAGE } from "@/constants"

type PropsType = {
  title: string
}

const ReposCard: React.FC<PropsType> = ({ title }) => {
  const { repos, repoPage, setRepoPage } = useGithubSearch()

  if (!repos) return null
  const totalPages = Math.ceil(repos.length / REPOS_PER_PAGE)
  const startIndex = (repoPage - 1) * REPOS_PER_PAGE
  const currentRepos = repos?.slice(startIndex, startIndex + REPOS_PER_PAGE)

  return (
    <div className="bg-white rounded-lg shadow p-6 h-full">
      <div className="flex items-center mb-6">
        <TrendingUp className="h-6 w-6 text-gray-700 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>

      <div className="space-y-4">
        {currentRepos?.map((repo) => (
          <div
            key={repo.name}
            className="border border-gray-100 rounded-md p-4 hover:border-gray-300 transition-colors"
          >
            <h4 className="font-medium text-gray-800 mb-1">{repo.name}</h4>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {repo.description}
            </p>

            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-600">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span>{repo.stars}</span>
              </div>

              <div className="flex items-center text-sm text-gray-600">
                <GitFork className="h-4 w-4 text-gray-500 mr-1" />
                <span>{repo.forks}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-6 flex justify-between items-center space-x-2">
          <button
            onClick={() => setRepoPage(Math.max(1, repoPage - 1))}
            disabled={repoPage === 1}
            className="px-3 py-1 text-sm rounded border disabled:opacity-40"
          >
            Prev
          </button>
          <span className="text-sm text-gray-600">
            Page {repoPage} of {totalPages}
          </span>
          <button
            onClick={() => setRepoPage(Math.min(totalPages, repoPage + 1))}
            disabled={repoPage === totalPages}
            className="px-3 py-1 text-sm rounded border disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default ReposCard
