import styled from "styled-components"

const SkillContainer = styled.article`
    background-color: var(--light);
    padding: 1rem;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 350px;
`

const SkillInfo = styled.div`
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: var(--dark);
`

const SkillImage = styled.figure`
    width: 100%;
`

const Image = styled.img`
    width: 60px;
    height: 60px;
`

const Span = styled.span`
  font-family: 'Nanum Gothic', sans-serif;
  color: var(--gray);
`

const Titulo = styled.h3`
  font-family: 'Nanum Gothic', sans-serif;
`

export {
    SkillContainer,
    SkillInfo,
    SkillImage,
    Image,
    Span,
    Titulo
}