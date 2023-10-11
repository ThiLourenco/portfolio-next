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
          Desenvolvimento fullstack implementando as melhores práticas usando
          tecnologias atuais: JavaScript, TypeScript, React, React-Native,
          Next.js, TailwindCSS, Nodejs, Express, NestJs, Fastify e outros...
        </TimelineEvent.Description>
      </TimelineEvent>
    </Timeline>
  )
}
