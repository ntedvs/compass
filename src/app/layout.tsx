import "@/styles/base.css"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: { default: "Concedure", template: "%s | Concedure" },
  description: "Check username availability across many different platforms",
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={"bg-background text-foreground " + inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
