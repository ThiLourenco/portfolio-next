'use client'

import { usePathname } from 'next/navigation'

const Head = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string

  const titleFixedToShow =
    pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)

  const meta = {
    title: `Thiago Lourenço ${pathname === '/' ? '' : '· ' + titleFixedToShow}`,
    description: `Description xpto`,
    keywords: 'Keywords xpto',
    image: '../public/og-image.jpg',
    type: 'website',
  }

  return (
    <>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta name="keywords" content={meta.keywords} />
      <meta
        property="og:url"
        content={`https://thilourenco.vercel.app${pathname}`}
      />
      <link
        rel="canonical"
        href={`https://thilourenco.vercel.app${pathname}`}
      />
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
