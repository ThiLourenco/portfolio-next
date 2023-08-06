'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex items-center justify-center">
      <div className="p-8 bg-transparent dark:bg-black rounded-lg shadow-lg">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-9xl text-blue-600 font-bold">404</h1>

          <h6 className="text-2xl text-gray-500 font-bold">
            <span className="text-red-500">Oops!</span> Page not found
          </h6>

          <p className="text-lg text-gray-500">Something went wrong!</p>

          <button
            className="px-6 py-2 text-sm rounded font-semibold text-blue-800 bg-blue-100"
            onClick={reset}
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  )
}
