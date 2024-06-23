'use client'

import { useState } from 'react'
import { AnimationContainer } from '../utils'
import { CardProject } from './CardProject'
import { CardProjectProps } from '@/types'
import Link from 'next/link'

const allProjectsInfo = [
  {
    id: '1',
    title: 'Delivery Server',
    des: 'Backend em Node.js de uma aplicação de delivery',
    category: 'nodejs - typescript - express - prisma - jest',
    repo: 'https://github.com/ThiLourenco/delivery-backend',
    link: 'https://github.com/ThiLourenco/delivery-backend',
  },
  {
    id: '2',
    title: 'Store 88',
    des: 'E-commerce moderno com integração com a plataforma de processamento de pagamento Stripe.',
    category: 'nextjs - typescript - tailwindcss - stripe',
    repo: 'https://github.com/ThiLourenco/e-commerce',
    link: 'https://e-commerce-thilourenco.vercel.app/',
  },
  {
    id: '3',
    title: 'Rentalx',
    des: 'Backend em Node.js usando princípios SOLID.',
    category: 'nodejs - typescript',
    repo: 'https://github.com/ThiLourenco/rentalx',
    link: 'https://github.com/ThiLourenco/rentalx',
  },
  {
    id: '4',
    title: 'Serviço de notificação',
    des: 'Microsserviço - Serviço de notificação desenvolvido em NestJS e Prisma ORM.',
    category: 'nodejs - nestJS - typescript - react',
    repo: 'https://github.com/ThiLourenco/notification-service',
    link: 'https://github.com/ThiLourenco/notification-service',
  },
  {
    id: '5',
    title: 'Pitu',
    des: 'Pitu é um micro-SaaS simples, mas eficiente para encurtar links e URLs.',
    category: 'nodejs - typescript - react',
    repo: 'https://github.com/ThiLourenco/pitu',
    link: 'https://github.com/ThiLourenco/pitu',
  },
  {
    id: '6',
    title: 'Habits',
    des: 'Aplicação fullstack para registro de hábitos diários.',
    category: 'react - react-native - nodejs - express',
    repo: 'https://github.com/ThiLourenco/habit',
    link: 'https://github.com/ThiLourenco/habit',
  },
  {
    id: '7',
    title: 'Rocket Help',
    des: 'A aplicação para gerenciar em tempo real solicitações de manutenção e suporte a equipamentos, desenvolvido com Expo, Typescript e Firebase.',
    category: 'nodejs - react - react-native - typescript',
    repo: 'https://github.com/ThiLourenco/rockethelp',
    link: 'https://github.com/ThiLourenco/rockethelp',
  },
  {
    id: '8',
    title: 'Chat JS',
    des: 'Chat multiplataforma usando CLI (interface de linha de comando).',
    category: 'javascript - nodejs - cli',
    repo: 'https://github.com/ThiLourenco/chat-js',
    link: 'https://www.npmjs.com/package/@thidotl17/hacker-chat-client',
  },
  {
    id: '9',
    title: 'Coffee Delivery',
    des: 'E-commerce para realizar pedidos de café.',
    category: 'typescript - react  - React-hook-form - Zod',
    repo: 'https://github.com/ThiLourenco/coffee-delivery',
    link: 'https://coffee-delivery-thilourenco.vercel.app/',
  },
  {
    id: '10',
    title: '30 Day Vanilla JS',
    des: 'Desafio JS Vanilla de 30 dias.',
    category: 'javascript',
    repo: 'https://github.com/ThiLourenco/JS30days',
    link: 'https://thilourenco.github.io/JS30days/',
  },
  {
    id: '11',
    title: 'Dev Finance',
    des: 'Aplicação de controle financeiro com persistência de dados no Local Storage.',
    category: 'javascript',
    repo: 'https://github.com/ThiLourenco/app-finance',
    link: 'https://thilourenco.github.io/app-finance/',
  },
  {
    id: '12',
    title: 'DoctorCare',
    des: 'DoctorCare é uma página institucional no formato One Page, responsiva, para usar em diversos tipos de micros, pequenas e médias empresas.',
    category: 'javascript',
    repo: 'https://github.com/ThiLourenco/doctor-care',
    link: 'https://thilourenco.github.io/doctor-care/',
  },
  {
    id: '13',
    title: 'Blog',
    des: 'Blog desenvolvido em React.js consumindo a API do Github onde retorna as postagem através de "issues" do Github. ',
    category: 'react - styled-components - typescript',
    repo: 'https://github.com/ThiLourenco/blog',
    link: 'https://blog-thilourenco.vercel.app/',
  },
  {
    id: '14',
    title: 'Ignite Lab React',
    des: 'Uma plataforma para assistir videoaulas online.',
    category: 'react - typescript - graphql - headless CMS',
    repo: 'https://github.com/ThiLourenco/ignite-lab-react',
    link: 'https://ignite-lab-react-thilourenco.vercel.app/',
  },
]

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
