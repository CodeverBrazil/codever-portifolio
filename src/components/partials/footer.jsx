import React from 'react'

const Footer = () => {
  return (
    <footer class="p-4 bg-gray-900 md:p-8 lg:p-10">
      <div class="mx-auto max-w-screen-xl text-center">
        <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900">
          <img src="img/logotipo-theme-dark.png" alt="" srcset="" class="mr-2 h-8" />
        </a>

        <span class="text-sm text-gray-500 sm:text-center">© 2021-2022 <a href="#" class="hover:underline">Codever</a>. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer