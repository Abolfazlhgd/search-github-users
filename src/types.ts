// ==================== تایپ‌های مربوط به ریپازیتوری ====================

export type PrimaryLanguage = {
  name: string;
  color: string | null;
};

export type Repository = {
  id: string;
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: PrimaryLanguage | null;
  updatedAt: string;
};

// ==================== تایپ‌های مربوط به فالوور/فالووینگ/گیست ====================

export type Connection = {
  totalCount: number;
  nodes?: Repository[];  // برای repositories از nodes استفاده میشه
};

// ==================== تایپ اصلی User (طبق写法 آموزش‌دهنده) ====================

export type User = {
  id: string;
  login: string;
  name: string | null;
  avatarUrl: string;
  bio: string | null;
  company: string | null;
  location: string | null;
  websiteUrl: string | null;
  twitterUsername: string | null;
  followers: {
    totalCount: number;
  };
  following: {
    totalCount: number;
  };
  repositories: {
    totalCount: number;
    nodes: Repository[];
  };
  gists: {
    totalCount: number;
  };
};

// ==================== تایپ پاسخ کوئری GET_USER ====================

export type UserData = {
  user: User | null;
};

// ==================== تایپ متغیرهای کوئری GET_USER ====================

export type GetUserVariables = {
  login: string;
};

// ==================== تایپ‌های مربوط به جستجو (برای بعد) ====================

export type SearchResultNode = {
  id: string;
  login: string;
  name: string | null;
  avatarUrl: string;
  bio: string | null;
};

export type SearchUsersData = {
  search: {
    userCount: number;
    edges: {
      node: SearchResultNode;
      cursor: string;
    }[];
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string | null;
    };
  };
};

export type SearchUsersVariables = {
  query: string;
  first?: number;
};