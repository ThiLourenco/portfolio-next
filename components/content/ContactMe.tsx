import { AnimationContainer } from '../utils'

export const ContactMe = () => {
  return (
    <AnimationContainer customClassName="w-full">
      <h2
        className="font-bold text-2xl md:text-2xl tracking-tight mb-8 text-black dark:text-white text-center lg:text-start"
        id="#contato"
      >
        Contato
      </h2>

      <div className="w-full flex justify-between items-center flex-col mx-auto max-w-screen-xl">
        <div className="w-full flex justify-center items-center flex-col">
          <form
            action="https://formsubmit.co/thi.it.solutions@gmail.com"
            method="POST"
            className="w-full space-y-4"
          >
            <div>
              <label className="sr-only" htmlFor="name">
                Nome
              </label>
              <input
                className="w-full rounded p-3 text-base outline-none border bg-white dark:bg-black border-gray-200 dark:border-gray-800 focus:border-gray-800 dark:focus:border-gray-500 transition ease"
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded p-3 text-base outline-none border bg-white dark:bg-black border-gray-200 dark:border-gray-800 focus:border-gray-800 dark:focus:border-gray-500 transition ease"
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Telefone
                </label>
                <input
                  className="w-full rounded p-3 text-base outline-none border bg-white dark:bg-black border-gray-200 dark:border-gray-800 focus:border-gray-800 dark:focus:border-gray-500 transition ease"
                  placeholder="Phone"
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                />
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Mensagem
              </label>
              <textarea
                className="w-full h-32 rounded p-3 text-base outline-none border bg-white dark:bg-black border-gray-200 dark:border-gray-800 focus:border-gray-800 dark:focus:border-gray-500 transition ease"
                placeholder="Message"
                id="message"
                name="message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center rounded px-5 py-3 text-black dark:text-white bg-white hover:bg-gray-200 dark:bg-black dark:hover:bg-gray-800 shadow-sm transition ease mx-auto"
            >
              <span className="font-medium text-base">Enviar</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </AnimationContainer>
  )
}
