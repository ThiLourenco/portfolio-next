'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { AnimationContainer } from '@/components/utils/AnimationContainer'

import { z } from 'zod'
import { SectionContainer, TitleSectionPageContainer } from '@/components/utils'

const confirmFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome precisa no mínimo de 3 caracteres.' }),
  email: z
    .string()
    .email({ message: 'Digite um e-mail válido. Ex: johndoe@example.com.' }),
  subject: z.string().min(1, { message: 'Digite o assunto.' }),
  message: z
    .string()
    .min(10, 'Digite no mínimo 10 caracteres.')
    .max(500, 'Mensagem muito grande.'),
})

type ConfirmFormData = z.infer<typeof confirmFormSchema>

export const ContactSection = () => {
  const [isSent, setIsSent] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema),
  })

  async function handleSendEmail(data: ConfirmFormData) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: new URLSearchParams(data),
      })
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`)
      }
      setIsSent(true)
      reset()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <SectionContainer>
      <AnimationContainer customClassName="w-full mb-16 ">
        <TitleSectionPageContainer title="Contato" />

        <p className="font-light text-lg text-gray-600 dark:text-gray-400 mb-5">
          Preencha os dados e deixe sua mensagem
        </p>
        <div className="w-full flex justify-center items-center flex-col">
          <form
            method="POST"
            className="w-full space-y-4 text-zinc-200"
            onSubmit={handleSubmit(handleSendEmail)}
          >
            <div>
              <label className="sr-only" htmlFor="name">
                Nome
              </label>
              <input
                className="form-input w-full rounded p-3 text-base outline-none border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 focus:border-gray-800 dark:focus:border-gray-500 transition ease"
                placeholder="Nome"
                type="text"
                id="name"
                {...register('name', { required: true })}
              />
              <span className="dark:text-red-500 text-red-500 text-sm italic">
                {errors.name?.message}
              </span>
            </div>

            <div>
              <label className="sr-only" htmlFor="email">
                E-mail
              </label>
              <input
                className="form-input w-full rounded p-3 text-base outline-none border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 focus:border-gray-800 dark:focus:border-gray-500 transition ease"
                placeholder="E-mail"
                type="email"
                id="email"
                {...register('email', { required: true })}
              />
              <span className="dark:text-red-500 text-red-500 text-sm italic">
                {errors.email?.message}
              </span>
            </div>
            <div>
              <label className="sr-only" htmlFor="subject">
                Assunto
              </label>
              <input
                className="form-input w-full rounded p-3 text-base outline-none border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 focus:border-gray-800 dark:focus:border-gray-500 transition ease"
                placeholder="Assunto"
                type="subject"
                id="subject"
                {...register('subject', { required: true })}
              />
              <span className="dark:text-red-500 text-red-500 text-sm italic">
                {errors.subject?.message}
              </span>
            </div>
            <div>
              <label className="sr-only" htmlFor="message">
                Mensagem
              </label>
              <textarea
                className="form-input w-full h-32 rounded p-3 text-base outline-none border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 focus:border-gray-800 dark:focus:border-gray-500 transition ease"
                placeholder="Digite aqui a sua mensagem"
                id="message"
                {...register('message', { required: true })}
              ></textarea>
              <span className="dark:text-red-500 text-red-500 text-sm italic">
                {errors.message?.message}
              </span>
            </div>
            {isSent ? (
              <div
                id="alert-border-3"
                className="flex p-4 mb-4 text-green-500 border-t-4 border-green-300 bg-gray-800 dark:text-green-400 dark:bg-gray-800 dark:border-green-800"
                role="alert"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="ml-3 text-sm font-medium">
                  Mensagem enviada com sucesso. Obrigado!
                </div>
              </div>
            ) : null}
            <button
              type="submit"
              title="Enviar"
              className="flex items-center justify-center px-5 py-3 hover:border-2 rounded-lg dark:border-gray-600 border-gray-600 text-black dark:text-white bg-white hover:bg-gray-200 dark:bg-black dark:hover:bg-gray-800 shadow-sm ease mx-auto transition ease border-2 disabled:opacity-100 disabled:cursor-not-allowed disabled:transform-none disabled:transition-none"
              disabled={isSubmitting}
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
      </AnimationContainer>
    </SectionContainer>
  )
}
