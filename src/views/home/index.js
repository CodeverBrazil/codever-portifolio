import React from "react"

import Navbar from "../../components/navbar/index"

import "../../styles/global.css"

function Home() {
  return (
    <>
      <header className="header">
        <div className="container-blink">
          <p className="logo-title">@Codever:~$ </p><span className="logo-title" id="blink">|</span>
        </div>
        <Navbar />
      </header>
      <section className="container">
        <div className="image-container">
          <img src="imagem-home.png" alt="Imagem da página home" />
        </div>
        <div className="home-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
    </>
  )
}

export default Home
