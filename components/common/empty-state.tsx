import React from "react"
import { UserX } from "lucide-react"

const EmptyState: React.FC = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="flex flex-col justify-center items-center p-12 mt-8 bg-white rounded-lg shadow max-w-2xl grow">
        <UserX className="size-24 text-gray-300" />
        <h2 className="mt-6 text-2xl font-semibold text-gray-700">
          User Not Found
        </h2>
        <p className="mt-2 text-gray-500 text-center max-w-md">
          We couldn&apos;t find a GitHub user with that username. Please check
          the spelling and try again.
        </p>
      </div>
    </div>
  )
}

export default EmptyState
