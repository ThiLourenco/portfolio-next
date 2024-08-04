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
          <p className="text-base text-gray-600 dark:text-gray-400">
            Olá, me chamo Thiago Lourenço, sou completamente apaixonado por
            tecnologias e pela forma que podemos utiliza-lá para melhorar a
            nossa qualidade de vida. Me tornei um entusiasta com a transformação
            da web e busco sempre a construção de uma solução web rápida e
            eficiente, nos tempos vagos procuro sempre aprender coisas novas
            buscando sempre o próximo nível.
          </p>
        </AnimationContainer>

        <AnimationContainer customClassName="w-full flex flex-col gap-5">
          <h2 className="font-normal text-2xl md:text-2xl tracking-tight mb-2 text-black dark:text-white text-start">
            Interesses
          </h2>

          <p className="text-base text-gray-600 dark:text-gray-400">
            Web3 com o desenvolvimento Blockchain e automação com inteligência artificial (IA).
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
