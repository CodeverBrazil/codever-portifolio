import React from "react"

import Navbar from '../../components/navbar/index'

import '../../styles/global.css'

function Home() {
  return (
    <>
      <header className="header">
        <h1>$: Codever</h1>
        <Navbar />
      </header>
      <img src="imagem-home.png" alt="Imagem da página home" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corrupti repellendus cupiditate sapiente eos ut, neque explicabo veritatis praesentium! Quisquam impedit veritatis mollitia totam, quis nostrum repudiandae ullam error voluptates?</p>
    </>
  )
}

export default Home