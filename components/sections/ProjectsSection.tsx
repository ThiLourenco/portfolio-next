'use client'

import {
  AnimationContainer,
  SectionContainer,
  TitleSectionPageContainer,
} from '../utils'
import { SearchAllProjects } from '../content'

const myGithub = 'https://github.com/thilourenco'

export const ProjectsSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="Projetos" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="w-full text-base text-gray-600 dark:text-gray-400">
            Estes são meus principais projetos que fiz desde que comecei a
            programar, alguns deles são projetos pessoais, freelancer, e práticas
            seguindo tutoriais e blogs. Para visualizar absolutamente todos os
            projetos publicos acesse meu Github {' '}
            <a
              href={myGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-black dark:hover:text-white hover:underline transition-all ease"
            >
              github.com/thilourenco
            </a>
            .
          </p>
        </AnimationContainer>

        <SearchAllProjects />
      </div>
    </SectionContainer>
  )
}
