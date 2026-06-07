// src/components/user/UserProfile.tsx
import { useQuery } from '@apollo/client/react';
import { GET_USER } from '@/queries';
import type { UserData, GetUserVariables } from '@/types';
import UserCard from './UserCard';

interface UserProfileProps {
  userName: string;
}

const UserProfile = ({ userName }: UserProfileProps) => {
  const { loading, error, data } = useQuery<UserData, GetUserVariables>(
    GET_USER,
    {
      variables: { login: userName },
    }
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center p-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-8 text-center bg-red-50 rounded-lg">
        ❌ Error: {error.message}
      </div>
    );
  }

  if (!data?.user) {
    return (
      <div className="text-yellow-500 p-8 text-center bg-yellow-50 rounded-lg">
        ⚠️ User "{userName}" not found.
      </div>
    );
  }

  const user = data.user;

  return (
    <UserCard 
      avatarUrl={user.avatarUrl}
      name={user.name || user.login}
      bio={user.bio || ''}
      login={user.login}
      url={user.url}
      followers={user.followers.totalCount}
      following={user.following.totalCount}
      repositories={user.repositories.totalCount}
      company={user.company || undefined}
      location={user.location || undefined}
      twitterUsername={user.twitterUsername || undefined}
      websiteUrl={user.websiteUrl || undefined}
    />
  );
};

export default UserProfile;