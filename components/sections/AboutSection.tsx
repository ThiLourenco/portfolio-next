'use client'

import {
  AnimationContainer,
  SectionContainer,
  ShowSkills,
  TitleSectionPageContainer,
} from '../utils'
import { CurrentFavTech, CurrentTimeLineExp } from '../content'
import { skills } from '../../types/skill'

export const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="Sobre mim" />



        <CurrentFavTech />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-600 text-justify dark:text-gray-400">Desenvolvedor full-stack focado em performance, automação e integração de sistemas.</p>
          <p className="text-base text-gray-600 text-justify dark:text-gray-400">
            Olá, sou Thiago Lourenço, desenvolvedor full-stack com foco em criar soluções web performáticas, escaláveis e bem estruturadas. Tenho experiência com aplicações modernas em React, Next.js, Node.js e Python, atuando desde o frontend até integrações e backend.
            Atualmente trabalho com sistemas corporativos e hospitalares, integração de dados e automação de processos, sempre buscando melhorar eficiência, performance e experiência do usuário.
          </p>
        </AnimationContainer>

        <AnimationContainer customClassName="w-full flex flex-col gap-5">
          <h2 className="font-normal text-2xl md:text-2xl tracking-tight mb-2 text-black dark:text-white text-start">
            Interesses
          </h2>
            <ul className="text-base text-gray-600 dark:text-gray-400">
             <li>BI aplicado a tomada de decisão</li>
              <li>Automação de processos repetitivos</li>
              <li>Integrações entre sistemas</li>
              <li>IA aplicada a produtos e dados</li>
            </ul>
        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <h2 className="font-normal text-2xl md:text-2xl tracking-tight mb-2 text-black dark:text-white text-start">
            Habilidades e ferramentas
          </h2>

          <p className="text-base text-gray-600 dark:text-gray-400">
            Abaixo estão algumas das principais tecnologias e ferramentas com as quais já trabalhei em projetos profissionais, pessoais e estudos contínuos.
          </p>

          <div className="flex flex-col items-start gap-3 mt-3">
            {skills.map(({ title, techs }) => (
              <div key={title}>
                <h3 className="font-normal text-1xl md:text-1xl tracking-tight mb-5 text-black dark:text-white text-start">
                  {title}
                </h3>

                <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5 ">
                  <ShowSkills skills={techs} />
                </AnimationContainer>
              </div>
            ))}
          </div>
        </AnimationContainer>
      </div>
    </SectionContainer>
  )
}
