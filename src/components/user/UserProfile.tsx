// src/components/user/UserProfile.tsx
import { useQuery } from '@apollo/client/react';
import { GET_USER } from '@/queries';
import type { UserData, GetUserVariables } from '@/types';

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

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (error) return <div className="text-red-500 p-8">Error: {error.message}</div>;
  if (!data?.user) return <div className="text-yellow-500 p-8">User not found</div>;

  const { bio, name, avatarUrl, login, followers, following, repositories, company, location } = data.user;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-2xl mx-auto">
      {/* مرحله 2: هدر با عکس پروفایل و نام */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-24"></div>
      
      <div className="px-6 pb-6">
        <div className="flex items-end -mt-12 mb-4">
          <img 
            src={avatarUrl} 
            alt={login}
            className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          />
          <div className="ml-4 mb-2">
            <h2 className="text-xl font-bold text-gray-900">{name || login}</h2>
            <p className="text-gray-500">@{login}</p>
          </div>
        </div>

        {/* مرحله 1: بیو (همین الان داریم) */}
        {bio && (
          <p className="text-gray-700 border-l-4 border-blue-500 pl-3 py-1 my-3">
            {bio}
          </p>
        )}

        {/* مرحله 3: شرکت و موقعیت */}
        {(company || location) && (
          <div className="flex gap-4 text-sm text-gray-500 my-3">
            {company && <span>🏢 {company}</span>}
            {location && <span>📍 {location}</span>}
          </div>
        )}

        {/* مرحله 4: آمار (فالوور، فالووینگ، ریپو) */}
        <div className="flex gap-6 my-4 text-center">
          <div>
            <div className="font-bold text-lg">{followers.totalCount}</div>
            <div className="text-xs text-gray-500">Followers</div>
          </div>
          <div>
            <div className="font-bold text-lg">{following.totalCount}</div>
            <div className="text-xs text-gray-500">Following</div>
          </div>
          <div>
            <div className="font-bold text-lg">{repositories.totalCount}</div>
            <div className="text-xs text-gray-500">Repositories</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;