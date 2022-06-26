import React, { Fragment } from "react"

import Skill from '../../components/Skill/index.jsx'

import "../../styles/global.css"
import './styles.css'

const Home = () => {
  return (
    <Fragment>
      <section className="container">
        <div className="image-container">
          <img src="img/illustration.png" alt="Imagem da página home" />
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
      <section className='sobre'>
        <div className='about-container'>
          <h1 className="title">Sobre</h1>
          <p className='content'>Somos uma empresa de desemvolvimento
            de sites e sistemas recém criada. Essa será sua maior oportunidade
            de explorar estes jovens programadores que se protituem
            todos os dias, utilizando toda sua energia por salários baixíssimos.
            Não perca essa oportunidade, seja um membro desse grupo que
            só tem a crescer!</p>
        </div>
      </section>
      <section className='skills'>
        <div className='about-container'>
          <h1 className="title">Skills</h1>
          <div className="skill-cards">
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
