"use client"

import { ClerkProvider } from "@clerk/nextjs"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()
  return (
    <ClerkProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ClerkProvider>
  )
}
