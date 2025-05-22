import { ReposCard, UserCard } from "@/components/user"
import { User } from "@/types/user/user"

type PropsType = {
  user: User | null
}

const UserProfile: React.FC<PropsType> = ({ user }) => {
  return (
    <div className="mt-8 flex justify-center items-center">
      <div className="max-w-2xl grow space-y-8">
        <UserCard user={user} />
        <ReposCard title="Popular repository" />
      </div>
    </div>
  )
}

export default UserProfile
