import { Timeline, TimelineEvent } from './'

export const CurrentTimeLineExp = () => {
  return (
    <Timeline>
      <TimelineEvent active>
        <TimelineEvent.Title>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white hover:underline transition-all ease"
          >
            Analista de Sistema e Desenvolvedor
          </a>{' '}
          | agosto. 2021 - Atualmente
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Analista de Sistemas atuando diretamente com o ERP Bionexo Tasy, participando da implantação end-to-end do Tasy HTML5 em um hospital de médio porte, desde o planejamento até o pós-go-live, com atuação nas áreas de backoffice e assistencial, adquirindo uma visão sistêmica dos fluxos operacionais e dos processos de negócio.
      </TimelineEvent.Description>
      <TimelineEvent.Description>
          Atualmente, atuo na parametrização do ERP, na implantação de novas funcionalidades, na otimização de processos e no suporte às áreas de negócio, garantindo a aderência dos fluxos hospitalares ao sistema e contribuindo para a melhoria contínua dos processos.
        </TimelineEvent.Description>
        <TimelineEvent.Description>
          Criação de dashboards utilizando a plataforma WeKnow, especializada em Inteligência de Dados e Business Intelligence (BI), integrando diferentes fontes de dados para a construção de painéis gerenciais e indicadores de desempenho (KPIs) em tempo real.
        </TimelineEvent.Description>
        <TimelineEvent.Description>
          Desenvolvimento de relatórios gerenciais utilizando SQL/PLSQL em banco de dados Oracle, com foco na extração, análise e disponibilização de informações estratégicas para apoio à tomada de decisão. 
        </TimelineEvent.Description>
      </TimelineEvent>
      <TimelineEvent active>
        <TimelineEvent.Title>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white hover:underline transition-all ease"
          >
            Freelancer
          </a>{' '}
          | jun. 2023 - Atualmente
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Desenvolvimento fullstack implementando as melhores práticas usando
          tecnologias atuais: Nodejs, Express, NestJs, Fastify, JavaScript,
          TypeScript, React, React-Native, Next.js, TailwindCSS e outros...
        </TimelineEvent.Description>
      </TimelineEvent>
    </Timeline>
  )
}
