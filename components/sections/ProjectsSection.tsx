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
          <p className="w-full text-base text-justify text-gray-600 dark:text-gray-400">
            Aqui estão alguns dos projetos mais relevantes que desenvolvi ao longo da minha trajetória como desenvolvedor. Eles incluem aplicações web completas, APIs, automações e experimentos técnicos, criados tanto em projetos pessoais quanto profissionais. Para ver todos os projetos públicos e o código-fonte, acesse meu GitHub:{' '}
            <a
              href={myGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-black dark:hover:text-white hover:underline transition-all ease"
            >
              github.com/thilourenco
            </a>
          </p>
        </AnimationContainer>

        <SearchAllProjects />
      </div>
    </SectionContainer>
  )
}
