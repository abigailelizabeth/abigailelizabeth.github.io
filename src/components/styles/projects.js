import styled, {keyframes} from 'styled-components';

const projectsEntrance = keyframes`
   0% {
      right: -100vw;
   }
   100% {
      right: 0vw;
   }
`;
const projectEntranceTitle = keyframes`
   0% {
      right: -100vw;
   }
   100% {
      right: 40vw;
   }
`;
export const Container = styled.div`
    position: relative;
    height: 100vh;
    background: transparent;
    transition-timing-function: ease-in-out;
    transition-duration: ${props => props.here? ".2s" : "1s"};
    transform: ${props => props.showMenu&&!props.here? "translate(15vw)" : props.showMenu&&props.here? "translate(15vw, 3vh)":  "translate(0vw)"};

    > * {
    font-family: Karla, sans-serif;
    color: black;
    font-size: calc(.3em + 1vw);
    }
    @media only screen and (min-width: 768px) {
    }
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    height: 100vh;
    justify-content: center;
    width: 90vw;
    height: 100vh;
    right: 0;
    animation: ${projectsEntrance} 2s ease-in-out 0s 1;

    @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const Title = styled.h1`
   position: absolute;
   right: 40vw;
   display: block;
   width: 50vw;
   text-align: left;
   color: white;
   font-size: calc(2em + 5vw);
   font-weight: bold;
   animation: ${projectEntranceTitle} 2s ease-in-out 0s 1;
   @media only screen and (min-width: 768px) {
        position: absolute;
        right: 40vw;
        display: block;
        width: 50vw;
        text-align: left;
        color: white;
        font-size: calc(.5em + 5vw);
        font-weight: bold;
   }

`;
export const ProjectDesc = styled.div`
    display: none;
    @media only screen and (min-width: 768px) {
        background-color: pink;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 50vw;
    }
`;
export const ProjectContainer = styled.div`
    top: 5vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    overflow-y: auto;
    height: 70vh;
    justify-content: space-between;
    background-color: rgb(230,230,234, .5);

    @media only screen and (min-width: 768px) {
        justify-content: space-evenly;
        width: 35vw;
        background-color: rgb(230,230,234, .5);
    }

`;

export const ProjectWrapper = styled.div`
        width: 80vw;
        height: 30vh;
        background-color: white;
        margin: 5vh 0vw 5vh 0vw;
        border-radius: 5px;
        &:hover {
            cursor: pointer;
            transform: perspective(150px) translateZ(10px); 
        }
        transition: transform;
        transition-duration: .2s;
        transition-timing-function: ease-in-out; 

    @media only screen and (min-width: 768px) {
        box-shadow: 1px 2px 2px 4px rgba(170, 170, 170, .2);
        position: relative;
        width: 30vw;
        height: 30vh;
        top: 25vh;
        background-color: white;
        margin: 8vh 2vw 4vh 2vw;
        border-radius: 5px; 
    }  
`;
export const ProjectPreview = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    border-radius: 5px;
`;
export const ProjectTitle = styled.div`
    display: none;
    @media only screen and (min-width: 768px) {
        position: absolute;
        font-weight: bold;
        bottom: 0;
        margin-block-end: 0;
        height: 8vh;
        width: 100%;
        background-color: rgb(230,230,234, .9);
        color: white;
        display: flex;
        align-items: center;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
    }


`;
export const DescriptionWrapper = styled.div`
    background-color: rgb(255, 255, 255, .3);
    height: 80vh;
    width: 40vw;
`;