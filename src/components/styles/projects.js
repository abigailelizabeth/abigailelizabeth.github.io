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
`;
export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    right: 0;
    height: 100vh;
    width: 90vw;
    animation: ${projectsEntrance} 2s ease-in-out 0s 1;
`;

export const Title = styled.h1`
   position: absolute;
   right: 40vw;
   display: block;
   width: 50vw;
   border-bottom: 2px solid #2ab7ca;
   text-align: left;
   color: white;
   font-size: calc(.5em + 5vw);
   font-weight: bold;
   animation: ${projectEntranceTitle} 2s ease-in-out 0s 1;

`;
export const ProjectDesc = styled.div`
    background-color: pink;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 50vw;
`;
export const ProjectContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35vw;
    overflow: auto;
    height: 60vh;
    background-color: rgb(230,230,234, .5);

`;

export const ProjectWrapper = styled.div`
    box-shadow: 1px 2px 2px 4px rgba(170, 170, 170, .2);
    width: 30vw;
    height: 20vw;
    background-color: white;
    margin: 2vh 2vw 2vh 2vw;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
        transform: perspective(150px) translateZ(10px); 
    }
    transition: transform;
    transition-duration: .2s;

    transition-timing-function: ease-in-out;
    
`;
export const ProjectPreview = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    text-align: left;
    border-radius: 5px;
   


`;
export const ProjectTitle = styled.div`
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


`;
export const DescriptionWrapper = styled.div`
    background-color: rgb(255, 255, 255, .3);
    height: 80vh;
    width: 40vw;
`;