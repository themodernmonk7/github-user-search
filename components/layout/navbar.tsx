import React from "react"
import { User } from "lucide-react"

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-4 py-5">
          <div className="size-10 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="size-6 text-gray-500" />
          </div>
          <p className=" text-gray-600">
            Welcome,{" "}
            <span className="font-semibold uppercase text-black">Kumar!</span>
          </p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
