import '../styles/globals.css'
import Head from 'next/head'
import Link from 'next/link'

const PageNotFound = () => {
  return (
    <>
      <Head>
        <meta name="googlebot" content="noindex,nofollow" />
        <meta name="robots" content="noindex" />
      </Head>
      <div className="grid h-screen px-4 bg-gray-900 place-content-center">
        <div className="text-center">
          <h1 className="text-white tracking-tight text-9xl">404</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-400 sm:text-4xl mt-3">
            Oops...
          </p>

          <p className="mt-4 text-gray-400">We cant find that page.</p>

          <Link
            href="/"
            className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-gray-900 rounded hover:bg-black outline-none transition-all ease delay-75"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  )
}

export default PageNotFound
