import Image from 'next/image'
import { AnimationContainer } from '../utils'

export const Hero = () => {
  return (
    <div className="w-full flex justify-between flex-col-reverse lg:flex-row items-center">
      <AnimationContainer customClassName="flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8">
        <h1 className="font-bold text-3xl lg:text-5xl text-center lg:text-start tracking-tight mb-3 text-black dark:text-white mx-auto lg:mx-0 ">
          <span className="bg-gradient-to-r from-gray-800 via-blue-800 to-blue-900 inline-block dark:text-transparent bg-clip-text">
            Thi
          </span>
          ago Lourenço
        </h1>

        <h2 className="flex items-center gap-2 text-1xl lg:text-1xl text-gray-700 dark:text-gray-200 mb-8 mx-auto lg:mx-0">
          <span className="font-semibold tracking-tight">
            Software Developer
          </span>
          <svg
            stroke="currentColor"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 8L3 12L7 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 8L21 12L17 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 4L9.8589 19.4548"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </h2>

        <p className="w-full text-base text-center lg:text-start mb-5 lg:mb-0 text-gray-600 dark:text-gray-400 mx-auto lg:mx-0">
          building the future
        </p>
      </AnimationContainer>

      <AnimationContainer customClassName="w-[80px] sm:w-[176px] relative mb-6 lg:mb-0">
        <Image
          alt="Thiago Lourenço"
          height={176}
          width={176}
          src="/thi-lourenco.jpeg"
          sizes="30vw"
          priority
          className="rounded-3xl filter grayscale hover:grayscale-0 transition ease"
        />
      </AnimationContainer>
    </div>
  )
}
