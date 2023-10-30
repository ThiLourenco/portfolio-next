import '../../styles/globals.css'
import { Providers } from '../providers'
import {
  // Inter,
  // Montserrat,
  // Open_Sans,
  // DM_Sans,
  // Lato,
  Poppins,
} from 'next/font/google'
import { Header, Footer } from '@/components/ui'
import { ReactNode, Suspense } from 'react'
import { Analytics } from '@vercel/analytics/react'
import GoogleAnalytics from '@/components/utils/Analytics'
import { meta } from '@/components/utils/SEO'
import GoogleTagAnalytics from '@/components/utils/Gtags'

const fontVariable = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '600'],
})

export const viewport = {
  themeColor: '#111010',
  colorScheme: 'dark',
}

export const metadata = {
  title: {
    default: meta.title,
    template: '%s | Thiago Lourenço',
  },
  description: meta.description,
  keywords: meta.keywords,
  generator: meta.generator,
  applicationName: meta.applicationName,
  referrer: 'origin-when-cross-origin',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    siteName: meta.applicationName,
    description: meta.og_description,
    title: meta.og_title,
    url: meta.url,
    images: {
      url: 'https://thilourenco.dev.br/static/images/og-image.png',
      width: 400,
      height: 300,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.og_title,
    description: meta.description,
    siteId: '1613712013590405122',
    creator: '@iam3c1',
    creatorId: '1613712013590405122',
    images: ['https://thilourenco.dev.br/static/images/og-image.png'],
  },
  metadataBase: new URL('https://thilourenco.dev.br'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/pt-BR',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: 'https://thilourenco.dev.br/site.webmanifest',
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 dark:bg-gray-900 transition ease">
        <Providers>
          <Header />

          <main
            className={
              fontVariable.className +
              ' min-w-xs max-w-screen-md flex flex-col justify-center items-center mx-auto'
            }
          >
            {children}
            <Suspense>
              <Analytics mode={'production'} />
              <GoogleAnalytics />
              <GoogleTagAnalytics />
            </Suspense>
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
