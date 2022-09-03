import React from 'react'

const Header = () => {
  return (
    <header>
      <nav class="bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" class="flex items-center">
            <img src="img/logotipo-theme-dark.png" class="mr-3 h-6 sm:h-9" alt="Codever Logo" />
          </a>

          <div class="grid items-center lg:order-2">
            <a href="tel:+5522999363638" class="text-white bg-primary-700 font-medium rounded-lg text-sm">+55 (22) 99936-3638</a>
            <a href="tel:+5522999363638" class="text-white bg-primary-700 font-medium rounded-lg text-sm">+55 (22) 99936-3638</a>
          </div>

          <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a href="#about" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0" aria-current="page">Sobre</a>
              </li>
              <li>
                <a href="#skills" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0" aria-current="page">Habilidades</a>
              </li>
              <li>
                <a href="#contact" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0" aria-current="page">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header