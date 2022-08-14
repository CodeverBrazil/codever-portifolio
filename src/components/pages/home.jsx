import React, { Fragment } from "react"

import Header from "../partials/header"
import Footer from "../partials/footer"

import { Card } from '../Card'

const Home = () => {
  return (
    <Fragment>
      {/* Cabeçalho */}
      <Header />

      {/* Hero center */}
      <div className="flex items-center justify-center py-2">
        <div className="mx-auto w-full py-10">
          <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
            <div className="flex justify-center md:justify-end">
              <img className="w-full max-w-sm" src="img/illustration.png" alt="Marketing newsletter via computer Illustration in PNG, SVG" />
            </div>

            <div className="flex items-center">
              <div className="mx-auto md:mx-0">
                <p className="mt-2 text-lg text-gray-900/80">Portifólio Codever</p>
                <h3 className="text-4xl font-bold text-gray-900 max-w-[30rem]">Portifólio responsivo de projetos da equipe Codever</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sobre */}
      <div className="bg-gray-50 dark:bg-gray-900" id="about">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Powering innovation at <span className="font-extrabold">200,000+</span> companies worldwide</h2>
            <p className="mb-4 font-light">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
            <p className="mb-4 font-medium">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
            <a href="#" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
              Learn more
              <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Habilidades */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center py-2 gap-x-8 mx-8 lg:mx-24 my-8" id="skills">
        {/* Card HTML */}
        <Card
          title={'HTML'}
          description={'HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web.'}
          imageUrl={'img/html5.png'}
          altImage={'Image HTML'}
          anchor={'Tim Berners-Lee'}
          anchorLink={'#'} />

        {/* Card CSS */}
        <Card
          title={'CSS'}
          description={'CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo (en-US) usada para descrever a apresentação de um documento escrito em HTML ou em XML (incluindo várias linguagens em XML como SVG, MathML ou XHTML).'}
          imageUrl={'img/css3.png'}
          altImage={'Image CSS3'}
          anchor={'Extreme GoHorse'}
          anchorLink={'#'} />

        {/* Card Javascript */}
        <Card
          title={'Javascript'}
          description={'JavaScript é a linguagem de programação usada para adicionar interatividade ao seu site (por exemplo: jogos, respostas quando botões são pressionados ou dados são inseridos em formulários, estilo dinâmico, animações).'}
          imageUrl={'img/ecmascript.jpg'}
          altImage={'Image Javascript'}
          anchor={'Extreme GoHorse'}
          anchorLink={'#'}
          style={{ background: "#fade34", padding: "0.5rem" }} />

        {/* Card PHP */}
        <Card
          title={'PHP'}
          description={'PHP (um inicialismo recursivo para PHP: Hypertext Preprocessor) é uma linguagem de script do lado do servidor de código aberto que pode ser utilizada junto com HTML para construir aplicações web e sites dinâmicos.'}
          imageUrl={'img/php.png'}
          altImage={'Image PHP'}
          anchor={'Extreme GoHorse'}
          anchorLink={'#'}
          style={{ background: "#4c6394", padding: "0.5rem" }} />

        {/* Card NodeJS */}
        <Card
          title={'NodeJS'}
          description={'Como um tempo de execução JavaScript assíncrono orientado por eventos, o Node.js foi projetado para criar aplicativos de rede escaláveis.'}
          imageUrl={'img/nodejs.png'}
          altImage={'Image PHP'}
          anchor={'Extreme GoHorse'}
          anchorLink={'#'}
          style={{ background: "#c8d3d9", padding: "0.5rem" }} />

        {/* Card ReactJS */}
        <Card
          title={'ReactJS'}
          description={'React é uma biblioteca para construção de interfaces de usuário. React não é um framework – nem mesmo é exclusivo para web. É utilizado com outras bibliotecas para renderização em certos ambientes.'}
          imageUrl={'img/reactjs.png'}
          altImage={'Image ReactJS'}
          anchor={'Extreme GoHorse'}
          anchorLink={'#'}
          style={{ background: "#212121", padding: "0.5rem" }} />
      </div>

      {/* Rodapé */}
      <Footer />
    </Fragment>
  )
}

export default Home
