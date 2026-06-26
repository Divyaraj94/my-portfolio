import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Divyarajsinh Chudasama | AI Automation & Frontend Developer',
  description: 'Fresh graduate specializing in agentic AI systems, MCP, n8n, LLM APIs, and React/Next.js. Based in Ahmedabad, Gujarat.',
  openGraph: {
    title: 'Divyarajsinh Chudasama | AI Automation & Frontend Developer',
    description: 'Fresh graduate specializing in agentic AI systems, MCP, n8n, LLM APIs, and React/Next.js. Based in Ahmedabad, Gujarat.',
    images: [
      {
        url: '/profile.png',
        width: 1200,
        height: 630,
        alt: 'Divyarajsinh Chudasama',
      },
    ],
    siteName: 'Divyarajsinh Chudasama Portfolio',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.jpg" />
        {/* Custom Fonts */}
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
