import { gql } from '@apollo/client';

// فقط کوئری‌ها - بدون تایپ
export const GET_USER = gql`
  query GetUser($login: String!) {
    user(login: $login) {
      id
      login
      name
      avatarUrl
      bio
      company
      location
      websiteUrl
      twitterUsername
      followers(first: 10) {
        totalCount
      }
      following(first: 10) {
        totalCount
      }
      repositories(first: 10, orderBy: {field: UPDATED_AT, direction: DESC}) {
        totalCount
        nodes {
          id
          name
          description
          url
          stargazerCount
          forkCount
          primaryLanguage {
            name
            color
          }
          updatedAt
        }
      }
      gists(first: 10) {
        totalCount
      }
    }
  }
`;

export const SEARCH_USERS = gql`
  query SearchUsers($query: String!, $first: Int = 10) {
    search(query: $query, type: USER, first: $first) {
      userCount
      edges {
        node {
          ... on User {
            id
            login
            name
            avatarUrl
            bio
          }
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;