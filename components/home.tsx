"use client"

import React, { useState } from "react"
import { SearchBar } from "@/components/search"
import { UserProfile } from "@/components/user"
import { EmptyState, Loader, SearchInstructions } from "@/components/common"
import { useGithubSearch } from "@/context/github"

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [hasSearched, setHasSearched] = useState(false)
  const { searchGithubUser, githubUser, isLoading, error } = useGithubSearch()

  const handleSearch = (query: string) => {
    if (query) {
      setSearchQuery(query)
      setHasSearched(true)
      searchGithubUser(query.trim())
    } else {
      setHasSearched(false)
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <SearchBar onSearch={handleSearch} />
      {hasSearched && searchQuery ? (
        <div>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <EmptyState />
          ) : (
            <UserProfile user={githubUser} />
          )}
        </div>
      ) : (
        <SearchInstructions />
      )}
    </main>
  )
}

export default Home
