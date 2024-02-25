'use client'

import { useTheme } from 'next-themes'
import { Badge } from '@mantine/core'

export const ShowSkills = ({ skills }: { skills: string | string[] }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { resolvedTheme } = useTheme()

  if (skills instanceof Array) {
    return (
      <>
        {skills.map((skill) => (
          <Badge
            key={skill}
            color={resolvedTheme === 'dark' ? 'blue' : 'dark'}
            className="inline-flex animate-shine items-center justify-center rounded-full text-xs border border-neutral-800 dark:bg-#000103 bg-[length:200%_100%] px-3 py-1 font-medium dark:text-neutral-400 text-neutral-600 transition-colors"
            size="sm"
            radius="sm"
            variant="outline"
          >
            {skill}
          </Badge>
        ))}
      </>
    )
  }

  return (
    <Badge
      color={resolvedTheme === 'dark' ? 'blue' : 'dark'}
      size="sm"
      radius="sm"
      className="inline-flex animate-shine items-center justify-center rounded-full text-xs border border-neutral-800 dark:bg-#000103 bg-[length:200%_100%] px-3 py-1 font-medium dark:text-neutral-400 text-neutral-600 transition-colors"
      variant="outline"
    >
      {skills}
    </Badge>
  )
}
