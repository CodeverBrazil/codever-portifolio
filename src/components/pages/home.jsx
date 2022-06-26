import React, { Fragment } from "react"

import Header from "../partials/header"
import Footer from "../partials/footer"

import Skill from '../components/Skill/index.jsx'

const Home = () => {
  return (
    <Fragment>
      {/* Cabeçalho */}
      <Header />

      {/* Hero center */}
      <div class="flex items-center justify-center py-2">
        <div class="mx-auto w-full bg-blue-700 py-10">
          <div class="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
            <div class="flex justify-center md:justify-end">
              <img class="w-full max-w-sm" src="img/illustration.png" alt="Marketing newsletter via computer Illustration in PNG, SVG" />
            </div>

            <div class="flex items-center">
              <div class="mx-auto md:mx-0">
                <h3 class="text-4xl font-bold text-white">Responsive left-aligned hero with image</h3>
                <p class="mt-2 max-w-[30rem] text-lg text-white/80">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Habilidades */}
      <div class="grid grid-cols-3 justify-center py-2 gap-x-4 mx-24 my-8">
        {/* Card HTML */}
        <div class="py-4 px-8 bg-slate-100 shadow-lg rounded-lg my-10">
          <div class="flex justify-center md:justify-end -mt-16">
            <img class="w-20 h-20 object-cover rounded-full border-2 bg-white border-indigo-500" src="img/html.png" />
          </div>

          <div>
            <h2 class="text-gray-800 text-3xl font-semibold">HyperText Markup Language</h2>
            <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
          </div>

          <div class="flex justify-end mt-4">
            <a href="#" class="text-xl font-medium text-indigo-500">Tim Berners-Lee</a>
          </div>
        </div>

        {/* Card CSS */}
        <div class="py-4 px-8 bg-slate-100 shadow-lg rounded-lg my-10">
          <div class="flex justify-center md:justify-end -mt-16">
            <img class="w-20 h-20 object-cover rounded-full border-2 bg-white border-indigo-500" src="img/css.png" />
          </div>

          <div>
            <h2 class="text-gray-800 text-3xl font-semibold">Cascading Style Sheets</h2>
            <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
          </div>

          <div class="flex justify-end mt-4">
            <a href="#" class="text-xl font-medium text-indigo-500">Extreme GoHorse</a>
          </div>
        </div>

        {/* Card Javascript */}
        <div class="py-4 px-8 bg-slate-100 shadow-lg rounded-lg my-10">
          <div class="flex justify-center md:justify-end -mt-16">
            <img class="w-20 h-20 object-cover rounded-full border-2 bg-white border-indigo-500" src="img/javascript.png" />
          </div>

          <div>
            <h2 class="text-gray-800 text-3xl font-semibold">Javascript</h2>
            <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
          </div>

          <div class="flex justify-end mt-4">
            <a href="#" class="text-xl font-medium text-indigo-500">Extreme GoHorse</a>
          </div>
        </div>

        {/* Card Docker */}
        <div class="py-4 px-8 bg-slate-100 shadow-lg rounded-lg my-10">
          <div class="flex justify-center md:justify-end -mt-16">
            <img class="w-20 h-20 object-cover rounded-full border-2 bg-white border-indigo-500" src="img/docker.png" />
          </div>

          <div>
            <h2 class="text-gray-800 text-3xl font-semibold">Docker</h2>
            <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
          </div>

          <div class="flex justify-end mt-4">
            <a href="#" class="text-xl font-medium text-indigo-500">Extreme GoHorse</a>
          </div>
        </div>

        {/* Card NodeJS */}
        <div class="py-4 px-8 bg-slate-100 shadow-lg rounded-lg my-10">
          <div class="flex justify-center md:justify-end -mt-16">
            <img class="w-20 h-20 object-cover rounded-full border-2 bg-white border-indigo-500" src="img/nodejs.png" />
          </div>

          <div>
            <h2 class="text-gray-800 text-3xl font-semibold">NodeJS</h2>
            <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
          </div>

          <div class="flex justify-end mt-4">
            <a href="#" class="text-xl font-medium text-indigo-500">Extreme GoHorse</a>
          </div>
        </div>

        {/* Card ReactJS */}
        <div class="py-4 px-8 bg-slate-100 shadow-lg rounded-lg my-10">
          <div class="flex justify-center md:justify-end -mt-16">
            <img class="w-20 h-20 object-cover rounded-full border-2 bg-white border-indigo-500" src="img/reactjs.png" />
          </div>

          <div>
            <h2 class="text-gray-800 text-3xl font-semibold">ReactJS</h2>
            <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
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
