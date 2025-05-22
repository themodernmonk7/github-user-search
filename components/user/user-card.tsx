import React from "react"
import { MapPin, Link, Building, User as UserIcon } from "lucide-react"
import Image from "next/image"
import { User } from "@/types/user/user"

type PropsType = {
  user: User | null
}

const UserCard: React.FC<PropsType> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="relative">
        <div className="h-32 bg-gradient-to-r from-gray-200 to-gray-300"></div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex justify-between  w-full items-center px-4">
          {user?.avatar_url ? (
            <Image
              src={user.avatar_url}
              width={100}
              height={100}
              alt={`${user?.login} avatar`}
              className="w-24 h-24 rounded-full border-4 border-white"
            />
          ) : (
            <UserIcon className="h-6 w-6 text-gray-500" />
          )}
          <a
            href={user?.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-full text-white bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            Follow
          </a>
        </div>
      </div>

      <div className="pt-16 flex">
        <div className="text-left px-4">
          <h2 className="text-xl font-bold text-gray-800">{user?.name}</h2>
          <a
            href={user?.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            @{user?.login}
          </a>

          <p className="mt-2 text-gray-600">{user?.bio}</p>
        </div>
      </div>
      <div className=" flex px-4 mt-2 gap-x-3 text-sm">
        {user?.location && (
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span>{user?.location}</span>
          </div>
        )}
        {user?.blog && (
          <div className="flex items-center text-gray-600">
            <Link className="h-4 w-4 mr-1 flex-shrink-0" />
            <a
              href={user?.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline truncate"
            >
              {user?.blog}
            </a>
          </div>
        )}

        {user?.company && (
          <div className="flex items-center text-gray-600">
            <Building className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{user?.company}</span>
          </div>
        )}
      </div>
      <div className="mt-3 mb-6 px-4 ">
        <div className="flex gap-6 text-sm">
          <p className="text-gray-600">
            <span className="text-black font-semibold">
              {" "}
              {user?.following}{" "}
            </span>{" "}
            Following
          </p>
          <p className="text-gray-600">
            <span className="text-black font-semibold">
              {" "}
              {user?.followers}{" "}
            </span>{" "}
            Followers
          </p>
          <p className="text-gray-600">
            <span className="text-black font-semibold">
              {" "}
              {user?.public_repos}{" "}
            </span>{" "}
            Repositories
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserCard
