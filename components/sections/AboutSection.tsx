'use client'

import {
  AnimationContainer,
  SectionContainer,
  ShowSkills,
  TitleSectionPageContainer,
} from '../utils'
import { CurrentFavTech, CurrentTimeLineExp } from '../content'
import { skills } from '../utils/skill'

export const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="Sobre mim" />

        <CurrentFavTech />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-600 text-justify dark:text-gray-400">
          Olá, sou Thiago Lourenço, um apaixonado por tecnologia e pelo seu potencial de transformar e melhorar a qualidade de vida das pessoas. Sou um entusiasta da evolução da web e tenho como objetivo desenvolver soluções web rápidas, eficientes e inovadoras. Nos meus momentos livres, estou constantemente explorando novos aprendizados e desafios, sempre em busca do próximo nível.
          </p>
        </AnimationContainer>

        <AnimationContainer customClassName="w-full flex flex-col gap-5">
          <h2 className="font-normal text-2xl md:text-2xl tracking-tight mb-2 text-black dark:text-white text-start">
            Interesses
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Web3 com o desenvolvimento Blockchain e automação com inteligência
            artificial (IA).
          </p>
        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <h2 className="font-normal text-2xl md:text-2xl tracking-tight mb-2 text-black dark:text-white text-start">
            Habilidades e ferramentas
          </h2>

          <p className="text-base text-gray-600 dark:text-gray-400">
            Abaixo listo algumas tecnologias com as quais já trabalhei.
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
