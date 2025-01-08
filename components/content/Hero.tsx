// import Image from 'next/image'
import Image from 'next/image'
import { AnimationContainer } from '../utils'

export const Hero = () => {
  return (
    <div className="w-full flex justify-between flex-col-reverse lg:flex-row items-center">
      <AnimationContainer customClassName="flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8">
        <h1 className="font-medium inline-flex animate-shine dark:bg-[linear-gradient(110deg,#939393,45%,#121820,55%,#939393)] dark:bg-[length:250%_100%] bg-[linear-gradient(110deg,#464646,45%,#939393,55%,#464646)] bg-[length:250%_100%] bg-clip-text text-transparent text-3xl lg:text-5xl lg:leading-relaxed text-center lg:text-start tracking-tight mb-3 mx-auto lg:mx-0 ">
          Thiago Lourenço
        </h1>

        <h2 className="dark:bg-gradient-to-b dark:from-white dark:to-neutral-700 bg-gradient-to-b from-neutral-700 to-neutral-500 text-transparent bg-clip-text flex items-center gap-2 text-1xl lg:text-1xl mb-8 mx-auto lg:mx-0">
          <span className="tracking-tight">Software Enginner</span>
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

        <p className="relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-base text-center lg:text-start mb-5 lg:mb-0 text-gray-600 dark:text-gray-400 mx-auto lg:mx-0  dark:bg-gradient-to-b dark:from-white dark:to-neutral-700 bg-gradient-to-b from-neutral-900 to-neutral-900  text-transparent bg-clip-text flex items-center gap-2 text-1xl lg:text-1xl">
          <span className="text-neutral-500">building the future</span>
        </p>
      </AnimationContainer>

      <AnimationContainer customClassName="w-[80px] sm:w-[176px] relative mb-6 lg:mb-0">
        <Image
          alt="Thiago Lourenço"
          height={400}
          width={500}
          quality={100}
          src="/thiago-tl.jpeg"
          priority
          className="rounded-3xl filter grayscale hover:grayscale-0 transition ease"
        />
      </AnimationContainer>
    </div>
  )
}
