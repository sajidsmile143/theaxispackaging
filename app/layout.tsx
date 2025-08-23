import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Providers } from "./providers"
import { ChatSupport } from "@/components/chat-support"

export const metadata: Metadata = {
  title: "Axis Packaging - Premium Custom Packaging Solutions",
  description:
    "Leading provider of custom packaging solutions including boxes, retail packaging, and sustainable packaging options.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <Providers>{children}</Providers>
        <ChatSupport />
      </body>
    </html>
  )
}
