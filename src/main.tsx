// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from "@/components/ui/sonner"
// import '/App.css'
import App from './App.tsx'
import { ApolloProvider } from '@apollo/client/react'
import client from './apolloClient.ts'


createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <Toaster richColors position="top-right" />
    <App />
  </ApolloProvider>,
)
