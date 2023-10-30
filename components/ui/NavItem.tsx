'use client'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { LinksNav, navItems } from './'

export const NavItem = () => {
  const pathname = usePathname() as string

  return (
    <>
      {navItems[pathname] ? (
        <>
          <div className="hidden lg:block">
            <motion.div
              className="bg-neutral-200 dark:bg-neutral-800"
              layoutId="test2"
              initial={{
                opacity: 0,
                x: navItems[pathname].x,
                y: navItems[pathname].y,
              }}
              animate={{
                opacity: 1,
                x: navItems[pathname].x,
                width: navItems[pathname].w,
              }}
              transition={{
                type: 'spring',
                stiffness: 350,
                damping: 30,
              }}
            />
          </div>
        </>
      ) : null}

      {<LinksNav />}
    </>
  )
}
