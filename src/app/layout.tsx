import { fontsClassName } from "@/app/_root/fonts"
import Providers from "@/app/_root/providers"
import "./_root/index.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontsClassName}>
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  )
}
