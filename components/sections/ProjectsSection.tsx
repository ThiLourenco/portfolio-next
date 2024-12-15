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
            Aqui estão destacados alguns dos projetos mais relevantes que
            desenvolvi desde o início da minha trajetória na programação. Eles
            incluem iniciativas pessoais, trabalhos freelance e projetos
            realizados a partir de estudos em tutoriais e conteúdos
            especializados. Para conferir os projetos públicos, acesse meu
            perfil no GitHub:{' '}
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
