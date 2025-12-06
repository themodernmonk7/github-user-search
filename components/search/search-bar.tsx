import React, { useEffect, useState } from "react"
import { Search } from "lucide-react"

interface SearchBarProps {
  onSearch: (query: string) => void
}
const DEBOUNCE_DELAY_VALUE = 500

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("")

  // const debouncedValue = useDebounce(query, DEBOUNCE_DELAY_VALUE)

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query.trim())
    }, DEBOUNCE_DELAY_VALUE)

    return () => clearTimeout(timer)
  }, [query])

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {/* <form onSubmit={handleSubmit} className="relative"> */}
      <form className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          // onChange={(e) => handleInputChange(e)}
          placeholder="Search GitHub username..."
          className="w-full pl-12 pr-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
        />
        <button
          type="submit"
          className="absolute left-0 top-0 mt-3 ml-3 text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          <Search className="size-6" />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
