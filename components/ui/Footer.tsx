import Link from 'next/link'
import { AnimationContainer } from '../utils'
import { ExternalLink } from './'

export const Footer = () => {
  return (
    <footer className="w-full lg:min-w-xs lg:max-w-screen-md flex flex-col justify-center items-center mx-auto">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />

      <AnimationContainer customClassName="w-full max-w-2xl grid place-items-center grid-cols-3 gap-1 lg:gap-4 pb-8 sm:grid-cols-3 mx-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                clipRule="evenodd"
              />
            </svg>
            Home
          </Link>

          <Link
            href="/about"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
            </svg>
            Sobre
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/contact"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease"
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h9.454a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73zm3.068-5.852A1.25 1.25 0 015.273 4.5h9.454a1.25 1.25 0 011.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 00-.86.49l-.606 1.02a1 1 0 01-.86.49H8.236a1 1 0 01-.894-.553l-.448-.894A1 1 0 006 11H2.53l.015-.062 1.523-5.52z"
                clipRule="evenodd"
              />
            </svg> */}
            <svg
              fill="currentColor"
              className="w-5 h-5"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path
                    fillRule="evenodd"
                    d="M486.4,210.506l-25.6,17.002L270.164,354.125c-4.291,2.85-9.226,4.275-14.164,4.275c-4.937,0-9.873-1.425-14.164-4.275
			L51.2,227.511l-25.6-17.003L0,193.504V486.4C0,500.538,11.464,512,25.6,512h460.8c14.14,0,25.6-11.462,25.6-25.6V193.502
			L486.4,210.506z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    fillRule="evenodd"
                    d="M270.2,4.299c-8.596-5.733-19.799-5.733-28.401,0L25.141,148.738l23.12,15.355L71.38,179.45L256,302.068l184.62-122.621
			l23.12-15.355l23.117-15.357L270.2,4.299z"
                  />
                </g>
              </g>
            </svg>
            Contato
          </Link>

          <Link
            href="/projects"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease"
          >
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="M6.3,7l3.85,6L14,7Z" />

                <path d="M7,1V5h4V1Zm3,3H8V2h2Z" />

                <path d="M1,1V5H5V1ZM4,4H2V2H4Z" />

                <path d="M1,7v4H5V7Zm3,3H2V8H4Z" />
              </g>
            </svg>
            Projetos
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/thilourenco">
            <svg
              className="w-5 h-5"
              viewBox="0 -3.5 256 256"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />

              <path
                fillRule="evenodd"
                d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"
              />
            </svg>
            GitHub
          </ExternalLink>

          <ExternalLink href="https://linkedin.com/in/thilourenco">
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="7.025 7.025 497.951 497.951"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
                fill="evenodd"
              />
            </svg>
            LinkedIn
          </ExternalLink>
        </div>
      </AnimationContainer>
      <span className="text-zinc-400 hover:text-zinc-100 transition-colors text-1xl leading-tight text-center mb-5">
        © 2023{' '}
        <a
          href="https://github.com/thilourenco/"
          title="Thiago Lourenço"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Thiago Lourenço
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  )
}
