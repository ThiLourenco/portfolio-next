'use client'

import {
  Hero,
  CurrentFavTech,
  AboutMe,
  FavProjects,
  // ProcessWork,
  // ContactMe,
} from '../content'
import { SectionContainer } from '../utils'
// import { CirclesColorBg } from '../ui'

export const HomeSection = () => {
  return (
    <SectionContainer>
      <Hero />

      {/* <CirclesColorBg /> */}

      <CurrentFavTech />

      <div className="w-full flex flex-col items-start">
        <AboutMe />

        <FavProjects />
      </div>
    </SectionContainer>
  )
}
