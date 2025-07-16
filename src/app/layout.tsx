import Providers from "./providers"
import { fontsClassName } from "@/styles/fonts"
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
