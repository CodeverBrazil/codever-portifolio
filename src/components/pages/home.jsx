import React, { Fragment } from "react"

import Header from "../partials/header"
import Footer from "../partials/footer"

const Home = () => {
  return (
    <Fragment>
      {/* Cabeçalho */}
      <Header />

      {/* Hero center */}
      <div class="flex items-center justify-center py-2">
        <div class="mx-auto w-full py-10">
          <div class="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
            <div class="flex justify-center md:justify-end">
              <img class="w-full max-w-sm" src="img/illustration.png" alt="Marketing newsletter via computer Illustration in PNG, SVG" />
            </div>

            <div class="flex items-center">
              <div class="mx-auto md:mx-0">
                <p class="mt-2 text-lg text-gray-900/80">Portifólio Codever</p>
                <h3 class="text-4xl font-bold text-gray-900 max-w-[30rem]">Portifólio responsivo de projetos da equipe Codever</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sobre */}
      <div class="bg-gray-50 dark:bg-gray-900 dark:bg-gray-800" id="about">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Powering innovation at <span class="font-extrabold">200,000+</span> companies worldwide</h2>
            <p class="mb-4 font-light">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
            <p class="mb-4 font-medium">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
            <a href="#" class="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
              Learn more
              <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Habilidades */}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center py-2 gap-x-8 mx-8 lg:mx-24 my-8" id="skills">
        {/* Card HTML */}
        <div class="py-4 px-8 bg-slate-100 shadow-lg rounded-lg my-10">
          <div class="flex justify-center md:justify-end -mt-16">
            <img class="w-20 h-20 object-cover rounded-full" style={{ background: "#ff6d00", padding: "0.5rem" }} src="img/html5.png" alt="Image CSS3" />
          </div>

          <div>
            <h2 class="text-gray-800 text-3xl font-semibold">HTML</h2>
            <p class="mt-2 text-gray-600">HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web.</p>
          </div>

          <div class="flex justify-end mt-4">
            <a href="#" class="text-xl font-medium text-indigo-500">Tim Berners-Lee</a>
          </div>
        </div>

        {/* Card CSS */}
        <div class="py-4 px-8 bg-slate-100 shadow-lg rounded-lg my-10">
          <div class="flex justify-center md:justify-end -mt-16">
            <img class="w-20 h-20 object-cover rounded-full" style={{ background: "#039be5", padding: "0.5rem" }} src="img/css3.png" alt="Image CSS3" />
          </div>

          <div>
            <h2 class="text-gray-800 text-3xl font-semibold">CSS</h2>
            <p class="mt-2 text-gray-600">CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo (en-US) usada para descrever a apresentação de um documento escrito em HTML ou em XML (incluindo várias linguagens em XML como SVG, MathML ou XHTML).</p>
          </div>

          <div class="flex justify-end mt-4">
            <a href="#" class="text-xl font-medium text-indigo-500">Extreme GoHorse</a>
          </div>
        </div>

        {/* Card Javascript */}
        <div class="py-4 px-8 bg-slate-100 shadow-lg rounded-lg my-10">
          <div class="flex justify-center md:justify-end -mt-16">
            <img class="w-20 h-20 object-cover rounded-full" style={{ background: "#fade34", padding: "0.5rem" }} src="img/ecmascript.jpg" alt="Image CSS3" />
          </div>

          <div>
            <h2 class="text-gray-800 text-3xl font-semibold">Javascript</h2>
            <p class="mt-2 text-gray-600">JavaScript é a linguagem de programação usada para adicionar interatividade ao seu site (por exemplo: jogos, respostas quando botões são pressionados ou dados são inseridos em formulários, estilo dinâmico, animações).</p>
          </div>

          <div class="flex justify-end mt-4">
            <a href="#" class="text-xl font-medium text-indigo-500">Extreme GoHorse</a>
          </div>
        </div>

        {/* Card PHP */}
        <div class="py-4 px-8 bg-slate-100 shadow-lg rounded-lg my-10">
          <div class="flex justify-center md:justify-end -mt-16">
            <img class="w-20 h-20 object-cover rounded-full" style={{ background: "#4c6394", padding: "0.5rem" }} src="img/php.png" alt="Image CSS3" />
          </div>

          <div>
            <h2 class="text-gray-800 text-3xl font-semibold">PHP</h2>
            <p class="mt-2 text-gray-600">PHP (um inicialismo recursivo para PHP: Hypertext Preprocessor) é uma linguagem de script do lado do servidor de código aberto que pode ser utilizada junto com HTML para construir aplicações web e sites dinâmicos.</p>
          </div>

          <div class="flex justify-end mt-4">
            <a href="#" class="text-xl font-medium text-indigo-500">Extreme GoHorse</a>
          </div>
        </div>

        {/* Card NodeJS */}
        <div class="py-4 px-8 bg-slate-100 shadow-lg rounded-lg my-10">
          <div class="flex justify-center md:justify-end -mt-16">
            <img class="w-20 h-20 object-cover rounded-full" style={{ background: "#c8d3d9", padding: "0.5rem" }} src="img/nodejs.png" alt="Image CSS3" />
          </div>

          <div>
            <h2 class="text-gray-800 text-3xl font-semibold">NodeJS</h2>
            <p class="mt-2 text-gray-600">Como um tempo de execução JavaScript assíncrono orientado por eventos, o Node.js foi projetado para criar aplicativos de rede escaláveis.</p>
          </div>

          <div class="flex justify-end mt-4">
            <a href="#" class="text-xl font-medium text-indigo-500">Extreme GoHorse</a>
          </div>
        </div>

        {/* Card ReactJS */}
        <div class="py-4 px-8 bg-slate-100 shadow-lg rounded-lg my-10">
          <div class="flex justify-center md:justify-end -mt-16">
            <img class="w-20 h-20 object-cover rounded-full" style={{ background: "#212121", padding: "0.5rem" }} src="img/reactjs.png" alt="Image CSS3" />
          </div>

          <div>
            <h2 class="text-gray-800 text-3xl font-semibold">ReactJS</h2>
            <p class="mt-2 text-gray-600"> React é uma biblioteca para construção de interfaces de usuário. React não é um framework – nem mesmo é exclusivo para web. É utilizado com outras bibliotecas para renderização em certos ambientes.</p>
          </div>

          <div class="flex justify-end mt-4">
            <a href="#" class="text-xl font-medium text-indigo-500">Facebook Inc.</a>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <Footer />
    </Fragment>
  )
}

export default Home
