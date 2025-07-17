import { fontsClassName } from "@/styles/fonts"
import Providers from "@/app/providers"
import "@/styles/globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontsClassName}>
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  )
}
