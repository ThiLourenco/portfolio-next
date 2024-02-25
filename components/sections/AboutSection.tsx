'use client'

import {
  AnimationContainer,
  SectionContainer,
  ShowSkills,
  TitleSectionPageContainer,
} from '../utils'
import { CurrentTimeLineExp } from '../content'
import { skills } from '../utils/skill'

export const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="Sobre mim" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-600 dark:text-gray-400">
            Olá, me chamo Thiago Lourenço, sou estudante do curso de engenharia
            de software e desenvolvedor full-stack JavaScript, sou completamente
            apaixonado por tecnologias e pela forma que podemos utiliza-lá para
            melhorar a nossa qualidade de vida. Me tornei um entusiasta com a
            transformação da web e busco sempre a construção de uma solução web
            rápida e eficiente, nos tempos vagos procuro sempre aprender coisas
            novas buscando sempre o próximo nível.
          </p>
        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <h2 className="font-normal text-2xl md:text-2xl tracking-tight mb-2 text-black dark:text-white text-start">
            Habilidades e ferramentas
          </h2>

          <p className="text-base text-gray-600 dark:text-gray-400">
            Abaixo listo algumas tecnologias com as quais já desenvolvi, comecei
            a programar há cerca de 3 anos. Embora o escopo do desenvolvimento
            web seja amplo, fiquei muito interessado e resolvi focar no
            desenvolvimento backend e banco de dados.
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

        <AnimationContainer customClassName="w-full flex flex-col gap-5">
          <h2 className="font-normal text-2xl md:text-2xl tracking-tight mb-2 text-black dark:text-white text-start">
            Interesses
          </h2>

          <p className="text-base text-gray-600 dark:text-gray-400">
            Tenho interesses em aprender sobre a web3 com o desenvolvimento
            Blockchain e Inteligência Artificial (AI).
          </p>

          <p className="text-base text-gray-600 dark:text-gray-400">
            Por enquanto decidi que vou me envolver em cada uma das coisas que
            quero aprender para poder descobrir qual me agrada mais.
          </p>
        </AnimationContainer>
      </div>
    </SectionContainer>
  )
}
