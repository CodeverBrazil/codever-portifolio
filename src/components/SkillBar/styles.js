import styled from 'styled-components'

export const SkillBarLevel = styled.div`
    width: ${props => props.level}%;
    height:19px;
    border-radius: 15px;
    background-color: #3ACE63;
    display: flex;
    justify-content:flex-end;
    align-items: center;
`

export const SkillBarHideContent = styled.div`
    margin-right: 5px;
    position: ${props => props.level < 28 ? "relative" : ""};
    left: 40px;
    color: ${props => props.level < 28 ? "#000" : "#FFF"};
`
export const SkillBar = styled.div`
    width: 100%;
    height: 25px;
    background-color: #fff;
    margin: 1rem;
    border-radius: 15px;
    border: 3px solid var(--color-primary);
    box-sizing: border-box;
`