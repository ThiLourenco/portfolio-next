import { Timeline, TimelineEvent } from './'

export const CurrentTimeLineExp = () => {
  return (
    <Timeline>
      <TimelineEvent active>
        <TimelineEvent.Title>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white hover:underline transition-all ease"
          >
            Freelancer
          </a>{' '}
          | jun. 2023 - Atualmente
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Desenvolvimento fullstack implementando metodologias ágeis e melhores
          práticas usando as seguintes tecnologias: JavaScript, TypeScript,
          React, Next.js, Tailwind, Nodejs, Express, NestJs, Fastify e outros...
        </TimelineEvent.Description>
      </TimelineEvent>
    </Timeline>
  )
}
