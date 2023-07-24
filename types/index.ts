import { ReactNode } from 'react'

export interface TimelineEventProps {
  active?: boolean
  children: ReactNode
  last?: boolean
}

export interface ExternalLinkProps {
  href: string
  customClassName?: string
  children: ReactNode
}

export interface NavItemHeaderAnimation {
  name: string
  x: number
  y: number
  w: string
}

export interface NavItemProps {
  href: string
  text: string
}

export interface AnimationContainerProps {
  children: ReactNode
  customClassName?: string
  customDelay?: number
}

export interface CardProjectProps {
  id?: string
  title: string
  des: string
  category: string
  repo: string
  link: string
}
