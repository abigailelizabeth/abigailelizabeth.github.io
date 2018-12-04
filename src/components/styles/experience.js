import styled, {keyframes} from 'styled-components';

const experienceEntrance = keyframes`
   0% {
      right: -100vw;
   }
   100% {
      right: 0vw;
   }
`;
const experienceEntranceTitle = keyframes`
   0% {
      right: -100vw;
   }
   100% {
      right: 40vw;
   }
`;
const showJobDescription = keyframes` 
   0% {
      height: 0vh;
   }
   100% {
      height: 90vh;
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
   position: absolute;
   display: flex;
   justify-content: center;
   flex-direction: column;
   right: 0;
   height: 100vh;
   width: 90vw;
   animation: ${experienceEntrance} 2s ease-in-out 0s 1;
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
   animation: ${experienceEntranceTitle} 2s ease-in-out 0s 1;

`;
export const JobContainer = styled.div`
   padding: 5vh 0vw 0vw 4vh;
   position: relative;
   min-height: 70vh;
   justify-content: flex-center;
   display: flex;
   width: 80vw;
   flex-direction: row;
   text-align: left;

`;
export const Jobs = styled.div`
order: 2;
position: relative;
background-color: rgb(244,244,248, .3);
   width: 30vw;
   display: flex;
   flex-direction: column;
   margin-left: 10vw;
   border-radius: 4px;
`;

export const JobDescip = styled.div`
   order: 1;
   margin: 2vh 5vw 0vh 1vw;
   color: white;
   width: 50vw;
   text-align: left;
`;
export const Job = styled.div`
    position: ${props => props.selected? "absolute" : ""}
   ${props => props.selected? "transform: translate(-30vw,-8vh);color: white;border-left:2px solid #2ab7ca; border-bottom:2px solid #2ab7ca; " : ""};
   width: auto;
   padding: 1vh 0vw 1vh 1vw;
   &:hover {
      background-color: ${props => !props.selected? "#d5dada" : ""};
    }
    transition-duration: .5s;
    transition-timing-function: ease-in-out;
`;

export const JobTitle = styled.div`

`;
export const JobYear = styled.div`
   font-size: calc(.2em + .8vw);
   margin: .5vh 0vw 0vw .5vh;
`;
export const Company = styled.div`
   font-weight: bold;
   padding: 2vh 0vw 2vh 0vh;

`;
export const Summary = styled.div`
   font-size: calc(.4em + .5vw);
   padding: 2vh 0vw 2vh 0vh;

`;

export const Intro = styled.div`
   font-size: calc(.4em + .5vw);
   padding: 2vh 0vw 2vh 0vh;

`;

export const Efforts = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
`;

export const Effort = styled.div`
   padding: 1vh 1vw 1vh 1vw;
   width: auto;
   font-size: calc(.4em + .5vw);
   background-color: ${props => props.selected? "#b4b8b8" : ""};
   &:hover {
      background-color: ${props => !props.selected? "#d5dada" : ""};
   }
   transition-duration: .2s;
   transition-timing-function: ease-in-out;

`;

export const EffortSummary = styled.div`
   font-size: calc(.4em + .5vw);
   padding: 2vh 0vw 2vh 0vh;

`;

export const EffortSkills = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   flex-wrap: wrap;

`;
export const Skill = styled.div`
   order: ${props => props.order};
   margin: .5vh .5vw .5vh .5vw;
   width: auto;
   border-radius: 8px;
   padding: .5vh .5vh;
   text-transform: uppercase;
   border: 2px solid white;
   font-size: calc(.05em + .7vw);

`;