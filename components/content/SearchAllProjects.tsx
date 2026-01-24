'use client'

import { useMemo, useState } from 'react'
import { AnimationContainer } from '../utils'
import { CardProject } from './CardProject'
import { CardProjectProps } from '@/types'
import Link from 'next/link'
import { allProjectsInfo } from '@/types/projects'

export const SearchAllProjects = () => {
  const [projectSearch, setProjectSearch] = useState('')

  const resultSearch: CardProjectProps[] = useMemo(() => {
    const search = projectSearch.toLowerCase()

    return allProjectsInfo.filter((project) => {
      return (
        project.title.toLowerCase().includes(search) ||
        project.des.toLowerCase().includes(search) ||
        (Array.isArray(project.category)
          ? project.category
          : [project.category]
        ).some((cat) =>
          cat.toLowerCase().includes(search),
        )
      )
    })
  }, [projectSearch])

  return (
    <>
      <AnimationContainer customClassName="w-full flex justify-center mb-8">
        <div className="w-full lg:w-3/6 h-12 flex items-center rounded-lg shadow-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus-within:border-gray-400 transition-all">
          <div className="grid place-items-center w-12 text-gray-600 dark:text-gray-500">
            🔍
          </div>

          <input
            aria-label="Buscar projetos"
            className="h-full w-full bg-transparent outline-none text-sm px-2"
            type="text"
            placeholder="Buscar por tecnologia, linguagem ou projeto..."
            value={projectSearch}
            onChange={(e) => setProjectSearch(e.target.value)}
          />
        </div>
      </AnimationContainer>

      {resultSearch.length === 0 && (
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Nenhum projeto encontrado.
        </p>
      )}

      <section className="w-full flex flex-wrap justify-center gap-6">
        {resultSearch.map((project) => (
          <CardProject key={project.id} {...project} />
        ))}
      </section>

      <div className="flex justify-center mt-10">
        <Link href="/projects" aria-label="Voltar ao topo">
          ⬆️
        </Link>
      </div>
    </>
  )
}
