<div align="center">
  <img src="docs/assets/xp-inc.png" width="150" />

## Desafio técnico PSel - Turma XP 🚀

> Esse projeto tem como objetivo desenvolver um aplicativo de investimento em ações, com algumas funcionalidades de conta digital

#### 🖥 [Link do deploy](https://xp-technical-challenge.vercel.app/)

##### Desenvolvido com 💙 por [Rafael França](https://www.linkedin.com/in/rafaelgiori/) 👨‍💻

<br/>

  <kbd>
    <img
      src="docs/assets/dark.gif"
      title="Dark theme"
    >
  </kbd>
  <kbd>
    <img
      src="docs/assets/light.gif"
      title="Light theme"
    >
  </kbd>

</div>

<br />
<hr />
<br />

## 💭 Abordagem do desafio

- <details>
  <summary><strong>🎯 Objetivos principais</strong></summary><br />

  - Foco na experiência e intuição do cliente ao utilizar a aplicação.
  - Desenvolver uma interface bonita e responsiva para diversos dispositivos.
  - Utilizar uma base de dados para simular as ações do cliente.
  - Prover um ambiente em nuvem (deploy e base de dados) para o teste e desenvolvimento da aplicação se assemelhar a um case real.
  - Prover código limpo e legível.

</details>

- <details>
  <summary><strong>🔌 Tomadas de decisão</strong></summary><br />

  - Para criar a interface, foram utilizados os frameworks [NextJS](https://nextjs.org/) e o [Tailwind CSS](https://tailwindcss.com/) em conjunto com a biblioteca de componentes [Daisy UI](https://daisyui.com/) 💄.
  - Com o objetivo de maximizar a experiência do cliente e validar as suas ações em tempo real, foi utilizado a biblioteca [React Hook Form](https://react-hook-form.com/) em conjunto com [Yup](https://github.com/jquense/yup) para validação de formulários 🚨.
  - O ambiente escolhido para armazenar as informações do cliente foi o [Supabase](https://supabase.com/), que oferece um acesso baseado em nuvem a um banco de dados [PostgreSQL](https://www.postgresql.org/) 🐘.
  - A modelagem das [entidades](prisma/ERD.svg) da base de dados e sua comunicação com as ações do cliente, foram realizadas com [Prisma ORM](https://www.prisma.io/) e as [API Routes](https://nextjs.org/docs/api-routes/introduction) do NextJS 🚀.
  - No desenvolvimento de testes unitários, foi utilizado o framework [Jest](https://jestjs.io/) e a [React Testing Library](https://testing-library.com/) 🐙.

</details>

- <details>
  <summary><strong>💻 Processo de desenvolvimento</strong></summary><br />
  Foram utilizadas tecnologias auxiliares para o processo de desenvolvimento com o objetivo de padronização de commits, formatação e execução dos testes unitários relativos ao escopo das mudanças, prevenindo assim que uma nova feature impactasse no código base.

  <br>

  - O desenvolvimento da aplicação foi dividido em três fases, sendo as duas últimas cíclicas:

    - <strong>🏗️ Fase 1:</strong> Desenvolvimento de um boilerplate com as tecnologias a serem utilizadas na aplicação.
    - <strong>⌨️ Fase 2 (Feature):</strong> Desenvolvimento da interface do usuário, posteriormente funcionalidades relativas aquele escopo e por fim testes unitários.
    - <strong>✅ Fase 3:</strong> Testes manuais em ambiente de produção, correção e melhorias contínuas.<br/>

</details>

<br />
<hr />
<br />

## 💻 Instruções de compilação e execução

1. Esse projeto utiliza o [pnpm](https://pnpm.io/) como gerenciador de pacotes. Para instalá-lo, basta seguir [esse passo a passo](https://pnpm.io/installation).

2. Para rodar a aplicação é necessário um banco de dados Postgres. Para isso, recomendo que o faça com [Docker](https://hevodata.com/learn/docker-postgresql/) ou simplesmente crie um projeto no [Supabase](https://supabase.com/) - e copie a URI fornecida para seu .env 😄 <strong>(Settings -> Database -> Connection String -> URI).</strong>

3. Clone o repositório do projeto:

   ```bash
   git clone git@github.com:rafaelmfranca/xp-technical-challenge.git
   ```

4. Instale os pacotes
   ```bash
   cd xp-technical-challenge
   pnpm install
   ```
5. Configure um arquivo `.env` conforme o `.env.example` na raiz do repositório.

   ```env
   DATABASE_URL=postgres://USUÁRIO:SENHA@HOST:PORTA/NOME_DO_BANCO?schema=NOME_DO_SCHEMA
   ```

6. Execute as migrações e seeders:

   ```bash
   pnpm prisma migrate dev
   pnpm prisma db seed
   ```

   <strong>Obs:</strong> No arquivo seed.ts é possível verificar as contas que estão elegíveis para fazer login 😁

7. Execute o projeto:
   ```bash
   pnpm dev
   ```
