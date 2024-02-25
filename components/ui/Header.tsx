import Link from 'next/link'
import { HeaderAnimation } from '../utils'
import { MobileMenuNav, NavItem, ButtonTheme } from './'

export const Header = () => {
  return (
    <HeaderAnimation>
      <nav className="w-full flex items-center justify-start lg:justify-between flex-row-reverse lg:flex-row relative border-gray-200 dark:border-gray-700 px-5 py-8 sm:pb-8 text-gray-900 bg-opacity-60 dark:text-gray-100 gap-5 lg:gap-0">
        <div>
          <h1>
            <Link href="/" title="ThiLourenco">
              <strong className="inline-flex text-1xl font-medium animate-shine dark:bg-[linear-gradient(110deg,#939393,45%,#1e2631,55%,#939393)] bg-[linear-gradient(110deg,#464646,45%,#939393,55%,#464646)] bg-[length:250%_100%] bg-clip-text text-transparent">
                TL.it
              </strong>
            </Link>
          </h1>
        </div>

        <div className="ml-[-0.80rem]">
          <MobileMenuNav />

          <NavItem />
        </div>

        <ButtonTheme />
      </nav>
    </HeaderAnimation>
  )
}
