import React, { Fragment } from "react"

import Header from "../components/partials/header"

import Skill from '../components/Skill/index.jsx'

const Home = () => {
  return (
    <Fragment>
      <Header />

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

      <div class="flex items-center justify-center py-2">
        <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div class="flex justify-center md:justify-end -mt-16">
            <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
          </div>
          <div>
            <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
            <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
          </div>
          <div class="flex justify-end mt-4">
            <a href="#" class="text-xl font-medium text-indigo-500">John Doe</a>
          </div>
        </div>

        <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div class="flex justify-center md:justify-end -mt-16">
            <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
          </div>
          <div>
            <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
            <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
          </div>
          <div class="flex justify-end mt-4">
            <a href="#" class="text-xl font-medium text-indigo-500">John Doe</a>
          </div>
        </div>
      </div>

      <section class='skills'>
        <div class='about-container'>
          <h1 class="title">Skills</h1>
          <div class="skill-cards bg-gray-600">
            <Skill name={"Tim Berners-Lee"} tech={"HyperText Markup Language"} image="html" level="90" />
            <Skill name={"Extreme GoHorse"} tech={"Cascading Style Sheets"} image="css" level="87" />
            <Skill name={"Extreme GoHorse"} tech={"Javascript"} image="javascript" level="78" />
            <Skill name={"Extreme GoHorse"} tech={"Qualquer coisa menos Java"} image="docker" level="65" />
            <Skill name={"Extreme GoHorse"} tech={"Qualquer coisa menos Java"} image="nodejs" level="75" />
            <Skill name={"Facebook Inc."} tech={"Qualquer coisa menos Java"} image="reactjs" level="70" />
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Home
