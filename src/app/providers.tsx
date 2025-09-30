"use client"

import { ClerkProvider } from "@clerk/nextjs"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { RouterProvider } from "react-aria-components"
import { useRouter } from "next/navigation"
import { ThemeProvider as NextThemeProvider } from "next-themes"

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()
  const router = useRouter()
  return (
    <ClerkProvider>
      <NextThemeProvider attribute="class" enableSystem>
        <QueryClientProvider client={queryClient}>
          <RouterProvider navigate={router.push}>{children}</RouterProvider>
        </QueryClientProvider>
      </NextThemeProvider>
    </ClerkProvider>
  )
}
