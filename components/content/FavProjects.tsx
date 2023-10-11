'use client'

import { Carousel } from '@mantine/carousel'
import { useMediaQuery } from '@mantine/hooks'
import {
  createStyles,
  Paper,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import { AnimationContainer } from '../utils'
import { ExternalLink } from '../ui'

const useStyles = createStyles((theme: any) => ({
  card: {
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-center',
    padding: '10px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}))

interface CardProps {
  image: string
  title: string
  category: string
  repo: string
  link: string
}

const Card = ({ image, title, category, repo, link }: CardProps) => {
  const { classes } = useStyles()

  return (
    <Paper
      shadow="md"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title} size="xs">
          {title}
        </Title>
      </div>

      <div className="flex items-center justify-end gap-3">
        <ExternalLink
          href={repo}
          customClassName="text-black dark:text-white inline-flex items-center rounded-lg bg-white dark:bg-black p-2 dark:hover:bg-gray-800 hover:bg-gray-200 transition-all ease shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        >
          <svg
            color="currentColor"
            width="24"
            height="24"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Github</title>
            <path
              fill="currentColor"
              d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"
            ></path>
          </svg>
        </ExternalLink>

        {!link || '' ? (
          <a className="text-black dark:text-white inline-flex items-center rounded-lg bg-white dark:bg-black p-2 cursor-not-allowed">
            <svg
              fill="currentColor"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.975 14.51a1.05 1.05 0 0 0 0-1.485 2.95 2.95 0 0 1 0-4.172l3.536-3.535a2.95 2.95 0 1 1 4.172 4.172l-1.093 1.092a1.05 1.05 0 0 0 1.485 1.485l1.093-1.092a5.05 5.05 0 0 0-7.142-7.142L9.49 7.368a5.05 5.05 0 0 0 0 7.142c.41.41 1.075.41 1.485 0zm2.05-5.02a1.05 1.05 0 0 0 0 1.485 2.95 2.95 0 0 1 0 4.172l-3.5 3.5a2.95 2.95 0 1 1-4.171-4.172l1.025-1.025a1.05 1.05 0 0 0-1.485-1.485L3.87 12.99a5.05 5.05 0 0 0 7.142 7.142l3.5-3.5a5.05 5.05 0 0 0 0-7.142 1.05 1.05 0 0 0-1.485 0z"
              />
            </svg>
          </a>
        ) : (
          <ExternalLink
            href={link}
            customClassName="text-black dark:text-white inline-flex items-center rounded-lg bg-white dark:bg-black p-2 dark:hover:bg-gray-800 hover:bg-gray-200 transition-all ease shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          >
            <svg
              fill="currentColor"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Projeto</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.975 14.51a1.05 1.05 0 0 0 0-1.485 2.95 2.95 0 0 1 0-4.172l3.536-3.535a2.95 2.95 0 1 1 4.172 4.172l-1.093 1.092a1.05 1.05 0 0 0 1.485 1.485l1.093-1.092a5.05 5.05 0 0 0-7.142-7.142L9.49 7.368a5.05 5.05 0 0 0 0 7.142c.41.41 1.075.41 1.485 0zm2.05-5.02a1.05 1.05 0 0 0 0 1.485 2.95 2.95 0 0 1 0 4.172l-3.5 3.5a2.95 2.95 0 1 1-4.171-4.172l1.025-1.025a1.05 1.05 0 0 0-1.485-1.485L3.87 12.99a5.05 5.05 0 0 0 7.142 7.142l3.5-3.5a5.05 5.05 0 0 0 0-7.142 1.05 1.05 0 0 0-1.485 0z"
              />
            </svg>
          </ExternalLink>
        )}
      </div>
    </Paper>
  )
}

const favProjects = [
  {
    image:
      'https://portfolio-next-thilourenco.vercel.app/static/images/store.png',
    title: '',
    category: '',
    repo: 'https://github.com/ThiLourenco/e-commerce',
    link: 'https://e-commerce-thilourenco.vercel.app/',
  },
  {
    image:
      'https://thilourenco.dev.br/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FgCv97gwMRJaTLuqmjn3y&w=640&q=100',
    title: '',
    category: '',
    repo: 'https://github.com/ThiLourenco/rentalx',
    link: '',
  },
  {
    image:
      'https://thilourenco.dev.br/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2Fx2ctlyrgTRC91wCSK0dj&w=640&q=100',
    title: '',
    category: '',
    repo: 'https://github.com/ThiLourenco/habit',
    link: '',
  },
]

const myGithub = 'https://github.com/thilourenco'

export const FavProjects = () => {
  const theme = useMantineTheme()

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`)

  const slides = favProjects.map((item, index) => (
    <Carousel.Slide key={`${item.title}_${index}`}>
      <Card {...item} />
    </Carousel.Slide>
  ))

  return (
    <AnimationContainer customClassName="w-full flex flex-col justify-center text-center lg:items-start mb-16">
      <h2 className="font-bold text-2xl lg:text-2xl tracking-tight mb-8 text-black dark:text-white text-center lg:text-start">
        Principais projetos
      </h2>

      <p className="text-base text-gray-600 dark:text-gray-400 mb-10 text-start">
        Esses são meus projetos favoritos e também os que considero os mais
        completos e complexos que já fiz, se quiser ver todos os meus projetos
        acesse meu{' '}
        <a
          href={myGithub}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white hover:underline transition-all ease"
        >
          GitHub
        </a>
        .
      </p>

      <Carousel
        slideSize="50%"
        breakpoints={[{ maxWidth: 'xs', slideSize: '100%', slideGap: 1 }]}
        slideGap="xs"
        align="center"
        slidesToScroll={mobile ? 1 : 2}
        withControls={false}
        style={{ width: '100%', cursor: 'grab' }}
        loop
      >
        {slides}
      </Carousel>
    </AnimationContainer>
  )
}
