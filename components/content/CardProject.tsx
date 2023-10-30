import { AnimationContainer, ShowSkills } from '../utils'
import { ExternalLink } from '../ui/ExternalLink'
import { CardProjectProps } from '@/types'

export const CardProject = ({
  title,
  des,
  category,
  repo,
  link,
}: CardProjectProps) => {
  return (
    <AnimationContainer customClassName="w-full h-42 flex flex-col justify-center items-center rounded border border-gray-200 hover:border-gray-300 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 bg-gray-0 dark:bg-gray-900 dark:hover:bg-gray-800 shadow-sm p-4 transition duration-150">
      <div className="w-full flex flex-col justify-center items-start rounded gap-5">
        <h3 className="text-2xl lg:text-2xl font-medium text-gray-900 dark:text-white">
          {title}
        </h3>

        <p className="text-base text-gray-600 dark:text-gray-400">{des}</p>

        <div className="w-full flex justify-between items-start flex-wrap flex-col lg:flex-row gap-5">
          <div className="flex justify-center items-start gap-3">
            <ShowSkills skills={category} />
          </div>

          <div className="flex justify-center items-end gap-3">
            <ExternalLink
              href={repo}
              customClassName="text-black dark:text-white inline-flex items-center rounded-lg bg-white dark:bg-black p-2 dark:hover:bg-gray-800 hover:bg-gray-200 transition-all ease"
            >
              <svg
                color="currentColor"
                width="24"
                height="24"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Github</title>
                <path
                  fill="currentColor"
                  d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"
                ></path>
              </svg>
            </ExternalLink>
            {!link || '' ? (
              <a className="text-black dark:text-white inline-flex items-center rounded-lg bg-white dark:bg-black p-2 cursor-not-allowed">
                <svg
                  fill="currentColor"
                  width="24"
                  height="24"
                  viewBox="0 0 14 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Indisponível</title>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.50021 0C4.77635 0 5.0002 0.223853 5.0002 0.49999V2.49995C5.0002 2.77609 4.77635 2.99994 4.50021 2.99994C4.22408 2.99994 4.00022 2.77609 4.00022 2.49995V0.49999C4.00022 0.223853 4.22408 0 4.50021 0ZM0.646451 0.64647C0.84171 0.451212 1.15829 0.451212 1.35354 0.64647L2.85351 2.14644C3.04877 2.3417 3.04877 2.65827 2.85351 2.85353C2.65826 3.04879 2.34168 3.04879 2.14642 2.85353L0.646452 1.35356C0.451193 1.1583 0.451193 0.841728 0.646451 0.64647ZM0.00030517 4.49991C0.00030517 4.22377 0.224158 3.99992 0.500295 3.99992H2.50025C2.77639 3.99992 3.00024 4.22377 3.00024 4.49991C3.00024 4.77605 2.77639 4.9999 2.50025 4.9999H0.500295C0.224158 4.9999 0.00030517 4.77605 0.00030517 4.49991ZM12.0001 10.4998C12.0001 10.2236 12.2239 9.9998 12.5001 9.9998H14.5C14.7761 9.9998 15 10.2236 15 10.4998C15 10.7759 14.7761 10.9998 14.5 10.9998H12.5001C12.2239 10.9998 12.0001 10.7759 12.0001 10.4998ZM10.5001 11.9998C10.7762 11.9998 11.0001 12.2236 11.0001 12.4997V14.4997C11.0001 14.7758 10.7762 14.9997 10.5001 14.9997C10.224 14.9997 10.0001 14.7758 10.0001 14.4997V12.4997C10.0001 12.2236 10.224 11.9998 10.5001 11.9998ZM12.1462 12.1462C12.3415 11.951 12.658 11.951 12.8533 12.1462L14.3533 13.6462C14.5485 13.8415 14.5485 14.158 14.3533 14.3533C14.158 14.5485 13.8414 14.5485 13.6462 14.3533L12.1462 12.8533C11.951 12.6581 11.951 12.3415 12.1462 12.1462ZM7.76478 3.69938C8.19177 3.27238 8.35724 3.11008 8.5116 3.00522C9.18794 2.54577 10.0431 2.53677 10.6784 2.95401C10.8227 3.04875 10.9767 3.19911 11.3886 3.61099C11.8005 4.02287 11.9509 4.17694 12.0456 4.3212C12.4628 4.95653 12.4539 5.81168 11.9944 6.48802C11.8895 6.64238 11.7272 6.80785 11.3002 7.23484L10.6815 7.85354C10.4863 8.0488 10.4863 8.36538 10.6815 8.56064C10.8768 8.75589 11.1934 8.75589 11.3886 8.56064L12.0073 7.94193L12.0502 7.89903C12.4199 7.5295 12.6564 7.29303 12.8216 7.04993C13.4968 6.05598 13.5316 4.7623 12.8815 3.77228C12.7229 3.53083 12.4918 3.29982 12.1404 2.94853L12.0957 2.9039L12.0511 2.85925C11.6998 2.50782 11.4688 2.27672 11.2273 2.11816C10.2373 1.46798 8.94364 1.50284 7.94968 2.17805C7.70659 2.34319 7.47012 2.57973 7.1006 2.94936L7.1006 2.94937L7.05769 2.99228L6.43898 3.61099C6.24372 3.80625 6.24372 4.12282 6.43898 4.31808C6.63424 4.51334 6.95081 4.51334 7.14607 4.31808L7.76478 3.69938ZM2.99191 7.05807L2.94899 7.10097C2.57935 7.4705 2.34282 7.70697 2.17767 7.95006C1.50246 8.94401 1.4676 10.2377 2.11778 11.2277C2.27634 11.4692 2.50744 11.7002 2.85886 12.0515L2.85888 12.0515L2.90352 12.0961L2.94815 12.1407L2.94815 12.1407L2.94817 12.1408C3.29945 12.4922 3.53045 12.7233 3.7719 12.8818C4.76193 13.532 6.0556 13.4972 7.04956 12.8219C7.29265 12.6568 7.52912 12.4203 7.89865 12.0506L7.94155 12.0077L8.56026 11.389C8.75552 11.1937 8.75552 10.8772 8.56026 10.6819C8.365 10.4867 8.04842 10.4867 7.85317 10.6819L7.23446 11.3006C6.80747 11.7276 6.642 11.8899 6.48764 11.9948C5.8113 12.4542 4.95615 12.4632 4.32082 12.046C4.17656 11.9512 4.02249 11.8009 3.61061 11.389C3.19873 10.9771 3.04837 10.8231 2.95363 10.6788C2.53639 10.0435 2.54539 9.18832 3.00484 8.51198C3.10971 8.35761 3.27201 8.19215 3.699 7.76516L4.3177 7.14645C4.51296 6.95119 4.51296 6.63462 4.3177 6.43936C4.12245 6.2441 3.80587 6.2441 3.61061 6.43936L2.99191 7.05807Z"
                  />
                </svg>
              </a>
            ) : (
              <ExternalLink
                href={link}
                customClassName="text-black dark:text-white inline-flex items-center rounded-lg bg-white dark:bg-black p-2 dark:hover:bg-gray-800 hover:bg-gray-200 transition-all ease"
              >
                <svg
                  fill="currentColor"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Projeto</title>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.975 14.51a1.05 1.05 0 0 0 0-1.485 2.95 2.95 0 0 1 0-4.172l3.536-3.535a2.95 2.95 0 1 1 4.172 4.172l-1.093 1.092a1.05 1.05 0 0 0 1.485 1.485l1.093-1.092a5.05 5.05 0 0 0-7.142-7.142L9.49 7.368a5.05 5.05 0 0 0 0 7.142c.41.41 1.075.41 1.485 0zm2.05-5.02a1.05 1.05 0 0 0 0 1.485 2.95 2.95 0 0 1 0 4.172l-3.5 3.5a2.95 2.95 0 1 1-4.171-4.172l1.025-1.025a1.05 1.05 0 0 0-1.485-1.485L3.87 12.99a5.05 5.05 0 0 0 7.142 7.142l3.5-3.5a5.05 5.05 0 0 0 0-7.142 1.05 1.05 0 0 0-1.485 0z"
                  />
                </svg>
              </ExternalLink>
            )}
          </div>
        </div>
      </div>
    </AnimationContainer>
  )
}
