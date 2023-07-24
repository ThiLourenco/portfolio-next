'use client'

import { useState } from 'react'
import { AnimationContainer } from '../utils'
import { CardProject } from './CardProject'
import { CardProjectProps } from '@/types'
import Link from 'next/link'

const allProjectsInfo = [
  {
    id: '1',
    title: '30 Day Vanilla JS',
    des: 'Desafio JS Vanilla de 30 dias.',
    category: 'javascript',
    repo: 'https://github.com/ThiLourenco/JS30days',
    link: 'https://thilourenco.github.io/JS30days/',
  },
  {
    id: '2',
    title: 'Blog',
    des: 'Blog desenvolvido em React.js consumindo a API do Github onde retorna as postagem através de "issues" do Github. ',
    category: 'react - styled-components - typescript',
    repo: 'https://github.com/ThiLourenco/blog',
    link: 'https://blog-thilourenco.vercel.app/',
  },
  {
    id: '3',
    title: 'Chat JS',
    des: 'Chat multiplataforma usando CLI (interface de linha de comando) - Node.js.',
    category: 'javascript - nodejs - cli',
    repo: 'https://github.com/ThiLourenco/chat-js',
    link: 'https://www.npmjs.com/package/@thidotl17/hacker-chat-client',
  },
  {
    id: '4',
    title: 'Coffee Delivery',
    des: 'E-commerce desenvolvido em ReactJS e Typescript.',
    category:
      'typescript - react - styled-components - React-hook-form - Zod - react-toastify',
    repo: 'https://github.com/ThiLourenco/coffee-delivery',
    link: 'https://coffee-delivery-thilourenco.vercel.app/',
  },
  {
    id: '5',
    title: 'Dev Finance',
    des: 'Aplicação de controle financeiro com persistência de dados no Local Storage, desenvolvido em Javascript.',
    category: 'javascript',
    repo: 'https://github.com/ThiLourenco/app-finance',
    link: 'https://thilourenco.github.io/app-finance/',
  },
  {
    id: '6',
    title: 'DoctorCare',
    des: 'DoctorCare é uma página institucional no formato One Page, responsiva, para usar em diversos tipos de micros, pequenas e médias empresas.',
    category: 'javascript',
    repo: 'https://github.com/ThiLourenco/doctor-care',
    link: 'https://thilourenco.github.io/doctor-care/',
  },
  {
    id: '7',
    title: 'Habits',
    des: 'Aplicação fullstack para registro de hábitos diários.',
    category: 'react - react-native - nodejs - express',
    repo: 'https://github.com/ThiLourenco/habit',
    link: '',
  },
  {
    id: '8',
    title: 'Happy',
    des: 'Aplicação desenvolvida em comemoração ao dia das crianças, onde conseguimos conectar diversas casas de acolhimento.',
    category: 'react - react-native - expo - nodejs',
    repo: 'https://github.com/ThiLourenco/happy-nlw3',
    link: '',
  },
  {
    id: '9',
    title: 'Ignite Feed',
    des: 'Aplicação em ReactJS que simula um feed de uma rede social com interação de comentário e curtidas.',
    category: 'react',
    repo: 'https://github.com/ThiLourenco/ignite_feed',
    link: 'https://ignite-feed-thilourenco.vercel.app/',
  },
  {
    id: '10',
    title: 'Ignite Lab React',
    des: 'Uma plataforma para assistir videoaulas online.',
    category: 'react - typescript - graphql - headless CMS',
    repo: 'https://github.com/ThiLourenco/ignite-lab-react',
    link: 'https://ignite-lab-react-thilourenco.vercel.app/',
  },
  {
    id: '11',
    title: 'Ignite Shop',
    des: 'E-commerce com "carrinho" de compras e integração com Stripe, desenvolvido em NextJS.',
    category: 'nextjs - stripe',
    repo: 'https://github.com/ThiLourenco/ignite-shop-2.0',
    link: 'https://ignite-shop-2-0-thilourenco.vercel.app/',
  },
  {
    id: '12',
    title: 'Node Quiz',
    des: 'Projeto feito para testar seus conhecimentos sobre Node desenvolvido em NextJS.',
    category: 'javascript - nodejs - nextjs',
    repo: 'https://github.com/ThiLourenco/project-quiz',
    link: 'https://project-quiz.thilourenco.vercel.app/',
  },
  {
    id: '13',
    title: 'Pitu',
    des: 'Pitu é um micro-SaaS simples, mas eficiente para encurtar links e URLs, desenvolvido em Node.js.',
    category: 'nodejs - typescript - react',
    repo: 'https://github.com/ThiLourenco/pitu',
    link: '',
  },
  {
    id: '14',
    title: 'Rentalx',
    des: 'Backend em Node.js usando princípios SOLID.',
    category: 'nodejs - typescript',
    repo: 'https://github.com/ThiLourenco/pitu',
    link: '',
  },
  {
    id: '15',
    title: 'Rocket Help',
    des: 'A aplicação para gerenciar em tempo real solicitações de manutenção e suporte a equipamentos, desenvolvido em ReactNative, Expo, Typescript e Firebase.',
    category: 'nodejs - react - react-native - typescript',
    repo: 'https://github.com/ThiLourenco/pitu',
    link: '',
  },
  {
    id: '16',
    title: 'Serviço de notificação',
    des: 'Microsserviço - Serviço de notificação desenvolvido em Nodejs, Prisma e NestJS.',
    category: 'nodejs - typescript - react',
    repo: 'https://github.com/ThiLourenco/notification-service',
    link: '',
  },
  {
    id: '17',
    title: 'Widget de feedback',
    des: 'Recurso Widget para realizar feedback, desenvolvido em Node.js.',
    category: 'nodejs - typescript',
    repo: 'https://github.com/ThiLourenco/nlw-return',
    link: 'https://nlw-return-thilourenco.vercel.app/',
  },
  {
    id: '18',
    title: 'zoomApp',
    des: 'Clone do aplicativo Zoom, o projeto permite realizar gravação das chamadas realizadas, desenvolvido em Javascript.',
    category: 'javascript',
    repo: 'https://github.com/ThiLourenco/project-clone-zoomApp',
    link: '',
  },
  {
    id: '19',
    title: 'Store 88',
    des: 'E-commerce de roupas moderno',
    category: 'nextjs - typescript - tailwind',
    repo: 'https://github.com/ThiLourenco/e-commerce',
    link: 'https://e-commerce-thilourenco.vercel.app/',
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
        <div className="w-full flex items-center lg:w-3/6 h-12 rounded shadow-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-800 group-hover:border-gray-800 dark:group-hover:border-gray-500 transition-all ease">
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
            className="peer h-full w-full outline-none rounded text-sm bg-white dark:bg-black px-2 group-hover:border-gray-800 dark:group-hover:border-gray-500 transition-all ease"
            type="text"
            id="search"
            placeholder="Languages, frameworks, libraries, etc..."
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

      <button>
        <Link href="/projects">
          <span className="p-2 m-2 border-2 rounded-md items-center justify-center">
            TOPO
          </span>
        </Link>
      </button>
    </>
  )
}
