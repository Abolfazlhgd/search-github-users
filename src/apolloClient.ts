import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { toast } from 'sonner';

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

// Error Link برای مدیریت خطاها
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
    
    // ✅ پیام مخصوص کاربران ایرانی (به انگلیسی)
    toast.error("Connection Error", {
      description: "Unable to reach GitHub API. If you are in Iran, please enable your VPN and try again.",
      duration: 6000,
    });
  }
});

// Http Link با توکن در هدر 
const httpLink = new HttpLink({
  uri: GITHUB_GRAPHQL_API,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

// ترکیب لینک‌ها (اول errorLink بعد httpLink)
const link = ApolloLink.from([errorLink, httpLink]);

// ایجاد کلاینت
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

console.log("Token exists?", !!import.meta.env.VITE_GITHUB_TOKEN);
export default client;