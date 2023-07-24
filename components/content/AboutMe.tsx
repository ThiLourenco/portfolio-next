import { AnimationContainer } from '../utils'

export const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-black dark:text-white text-center lg:text-start">
        Sobre
      </h2>

      <p className="text-base text-gray-600 dark:text-gray-400">
        Eu me descrevo como um desenvolvedor apaixonado que adora codificação,
        código aberto e a plataforma da web. Amo o que faço e ajudo os outros
        com o que posso.
      </p>
    </AnimationContainer>
  )
}
