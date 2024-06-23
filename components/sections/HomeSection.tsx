'use client'

import { Hero, AboutMe, FavProjects } from '../content'
import { SectionContainer } from '../utils'

export const HomeSection = () => {
  return (
    <SectionContainer>
      <Hero />
      <div className="w-full flex flex-col items-start">
        <AboutMe />
        <FavProjects />
      </div>
    </SectionContainer>
  )
}
