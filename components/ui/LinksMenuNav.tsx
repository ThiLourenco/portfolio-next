import Link from 'next/link'

const LinksMenu = [
  {
    name: 'Home',
    path: '/',
    delay: '150ms',
  },
  {
    name: 'Sobre',
    path: '/about',
    delay: '175ms',
  },
  {
    name: 'Projetos',
    path: '/projects',
    delay: '200ms',
  },
  {
    name: 'Contato',
    path: '/contact',
    delay: '225ms',
  },
]

export const LinksMenuNav = () => {
  return (
    <>
      {LinksMenu.map(({ name, path, delay }) => (
        <li
          key={name}
          className="border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold text-justify items-center"
          style={{ transitionDelay: delay }}
        >
          <Link href={path} className="pb-4">
            {name}
          </Link>
        </li>
      ))}
    </>
  )
}
