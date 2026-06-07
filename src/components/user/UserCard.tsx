// src/components/user/UserCard.tsx
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  ExternalLink, 
  UserPlus, 
  MapPin, 
  Building, 
  Users, 
  Star, 
//   Twitter,
  Link2 
} from 'lucide-react';

type UserCardProps = {
  avatarUrl: string;
  name: string;
  bio: string;
  login: string;
  url: string;
  followers: number;
  following: number;
  repositories: number;
  company?: string;
  location?: string;
  twitterUsername?: string;
  websiteUrl?: string;
};

const UserCard = ({ 
  avatarUrl, 
  name, 
  bio, 
  login, 
  url, 
  followers, 
  following, 
  repositories,
  company,
  location,
//   twitterUsername,
  websiteUrl
}: UserCardProps) => {
  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Cover Image */}
      <div className="h-32 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
      
      <CardHeader className="relative pt-0">
        <div className="flex flex-col sm:flex-row gap-4 -mt-12">
          <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
            <AvatarImage src={avatarUrl} alt={login} />
            <AvatarFallback className="text-2xl bg-blue-500 text-white">
              {login.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 pt-2 sm:pt-8">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
              <Badge variant="secondary" className="text-xs">
                @{login}
              </Badge>
            </div>
            
            {bio && (
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {bio}
              </p>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <StatCard icon={Users} label="Followers" value={followers} />
          <StatCard icon={Users} label="Following" value={following} />
          <StatCard icon={Star} label="Repositories" value={repositories} />
        </div>

        <Separator />

        {/* Info Section */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-700">Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {location && (
              <InfoItem icon={MapPin} text={location} />
            )}
            {company && (
              <InfoItem icon={Building} text={company} />
            )}
            {websiteUrl && (
              <InfoItem icon={Link2} text={websiteUrl} link={websiteUrl} />
            )}
            {/* {twitterUsername && (
              <InfoItem icon={Twitter} text={`@${twitterUsername}`} link={`https://twitter.com/${twitterUsername}`} />
            )} */}
          </div>
        </div>
      </CardContent>

      <Separator />

      <CardFooter className="flex justify-end gap-3 pt-4">
        <Button variant="outline" asChild className="gap-2">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
            View Profile
          </a>
        </Button>
        <Button asChild className="gap-2 bg-green-600 hover:bg-green-700">
          <a href={`${url}/follow`} target="_blank" rel="noopener noreferrer">
            <UserPlus className="h-4 w-4" />
            Follow
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

// StatCard کامپوننت کوچک برای آمار
const StatCard = ({ icon: Icon, label, value }: { icon: any; label: string; value: number }) => (
  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
    <Icon className="h-5 w-5 text-blue-500 mb-1" />
    <span className="text-xl font-bold text-gray-900">{value.toLocaleString()}</span>
    <span className="text-xs text-gray-500">{label}</span>
  </div>
);

// InfoItem کامپوننت برای اطلاعات جانبی
const InfoItem = ({ icon: Icon, text, link }: { icon: any; text: string; link?: string }) => (
  <div className="flex items-center gap-2 text-gray-600">
    <Icon className="h-4 w-4 text-gray-400" />
    {link ? (
      <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline truncate">
        {text}
      </a>
    ) : (
      <span className="truncate">{text}</span>
    )}
  </div>
);

export default UserCard;