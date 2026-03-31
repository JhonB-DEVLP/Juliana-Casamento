import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Great_Vibes } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpotifyPlayer } from '@/components/wedding/spotify-player'
import './globals.css'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-couple',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#e8b4b8',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Flávio & Juliana | Nosso Casamento',
  description: 'Celebre conosco o nosso grande dia. Encontre todas as informações sobre a cerimônia, festa e muito mais.',
  openGraph: {
    title: 'Flávio & Juliana | Nosso Casamento',
    description: 'Celebre conosco o nosso grande dia!',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${cormorantGaramond.variable} ${greatVibes.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <SpotifyPlayer />
        <Analytics />
      </body>
    </html>
  )
}
