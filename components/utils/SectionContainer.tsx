import { ReactNode } from 'react'

export const SectionContainer = ({ children }: { children: ReactNode }) => {
  return (
    <section className="w-full lg:min-w-xs lg:max-w-screen-md flex flex-col justify-center items-center lg:items-start lg:mx-auto mt-8 pb-16 px-5">
      {children}
    </section>
  )
}
