'use client'

import { useState } from 'react'
import { AnimationContainer } from '../utils'
import { CardProject } from './CardProject'
import { CardProjectProps } from '@/types'
import Link from 'next/link'
import { allProjectsInfo } from '@/types/projects'

export const SearchAllProjects = () => {
  const [projectSearch, setProjectSearch] = useState<string>('')

  const resultSearch: CardProjectProps[] = allProjectsInfo.filter((project) =>
    project.category.includes(projectSearch.toLowerCase()),
  )

  return (
    <>
      <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8">
        <div className="w-full flex items-center lg:w-3/6 h-12 rounded shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 group-hover:border-gray-600 dark:group-hover:border-gray-500 transition-all ease">
          <div className="grid place-items-center h-full w-12 text-gray-700 dark:text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none rounded text-sm bg-white dark:bg-gray-900 px-2 group-hover:border-gray-900 dark:group-hover:border-gray-500 transition-all ease"
            type="text"
            id="search"
            placeholder="Linguagens, frameworks, libraries..."
            onChange={(e) => setProjectSearch(e.target.value)}
          />
        </div>
      </AnimationContainer>

      <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
        {resultSearch.map(({ id, title, des, category, repo, link }) => (
          <CardProject
            key={id}
            title={title}
            des={des}
            category={category}
            repo={repo}
            link={link}
          />
        ))}
      </article>
      <div className="flex justify-center">
        <button name="Topo" title="Topo">
          <Link href="/projects">
            <svg
              className="hover:border-2 rounded-lg dark:border-gray-600 border-gray-900"
              fill="currentColor"
              width="48"
              height="48"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.18179 8.81819C4.00605 8.64245 4.00605 8.35753 4.18179 8.18179L7.18179 5.18179C7.26618 5.0974 7.38064 5.04999 7.49999 5.04999C7.61933 5.04999 7.73379 5.0974 7.81819 5.18179L10.8182 8.18179C10.9939 8.35753 10.9939 8.64245 10.8182 8.81819C10.6424 8.99392 10.3575 8.99392 10.1818 8.81819L7.49999 6.13638L4.81819 8.81819C4.64245 8.99392 4.35753 8.99392 4.18179 8.81819Z"
              />
            </svg>
          </Link>
        </button>
      </div>
    </>
  )
}
