'use client'

import { usePathname } from 'next/navigation'

const Head = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string

  const titleFixedToShow =
    pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)

  const meta = {
    title: `Thiago Lourenço ${pathname === '/' ? '' : '· ' + titleFixedToShow}`,
    description: `Thiago Lourenço desenvolvedor fullstack - Javascript, Typescript, Nodejs, ReactJS, React Native.`,
    keywords:
      'Web, Desenvolvedor Fullstack, Aplicativos Web, frontend, backend, Full-stack, Javascript, Typescript, React, React Native, Nextjs, Nodejs, Thiago Lourenço, ThiLourenco, ThiLourenço, Thiago Lourenço Portfólio, ThiLourenco Portfólio, thilourenco github, Thiago Lourenço LinkedIn',
    image: '../public/og-image.jpg',
    type: 'website',
  }

  return (
    <>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        name="robots"
      />
      <meta content={meta.description} name="description" />
      <meta name="keywords" content={meta.keywords} />
      <meta
        property="og:url"
        content={`https://thilourenco.dev.br/${pathname}`}
      />

      <meta content="#111010" name="theme-color" />
      <meta content="#111010" name="msapplication-TileColor" />
      <meta
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        name="robots"
      />
      <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
      <link href="/static/favicons/site.webmanifest" rel="manifest" />
      <link
        href="/static/favicons/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/static/favicons/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/static/favicons/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link rel="canonical" href={`https://thilourenco.dev.br/${pathname}`} />
      <link rel="me" href="mailto:thi.it.solutions@gmail.com" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Thiago Lourenço" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@iam3c1" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </>
  )
}

export default Head
