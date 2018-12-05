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
      font-size: calc(.3em + 3vw);
   }

   @media only screen and (min-width: 768px) {
      > * {
         font-family: Karla, sans-serif;
         color: #f8f4f8;
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
   font-size: calc(2em + 5vw);
   font-weight: bold;

   color: white;
   position: absolute;
   display: block;
   width: 65vw;
   right: 40vw;

   animation: ${experienceEntranceTitle} 2s ease-in-out 0s 1;

   @media only screen and (min-width: 768px) {
      text-align: left;
      right: 40vw;

      width: 50vw;

      border-bottom: 2px solid #2ab7ca;
      
      font-size: calc(.5em + 5vw);
   }
`;
export const JobContainer = styled.div`
   padding: 5vh 0vw 0vw 4vh;
   position: relative;
   
   width: 80vw;
   text-align: left;
   @media only screen and (min-width: 768px) {
      justify-content: center;
      display: flex;
      padding: 5vh 0vw 0vw 4vh;
      position: relative;
      min-height: 70vh;
      justify-content: flex-center;
      display: flex;
      flex-direction: row;
   }

`;
export const Jobs = styled.div`
   color: white;
   position: absolute;
   top: -30vh;
   width: 80vw;
   padding: 2px;
   left:0;
   right: 0;
   transform: ${props => props.viewJob? "translate(100vw,40vh)" : ""};
   transition-timing-function: linear;
   transition-duration: 1s;


   @media only screen and (min-width: 768px) {
      order: 2;
      position: relative;
      top: 0;
      background-color: rgb(244,244,248, .2);
      width: 30vw;
      display: flex;
      flex-direction: column;
      margin-left: 10vw;
      border-radius: 4px;
      transform: none;
   }
`;
export const Back = styled.button`
   position: absolute;
   border: 1px solid red;
   width: 4vw;
   height: 4vw;
   padding: 2px;
   padding-top: 0px;
   border-radius: 50%;
   background-color: red;
   right: 2vw;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: calc(.2em + 1vw);
   @media only screen and (min-width: 768px) {
      display: none;
   }
`;
export const JobDescip = styled.div`
   position: absolute;
   top: -30vh;
   width: 70vw;
   padding: 8px;
   font-size: calc(1em + 3vw);
   border: 2px solid white;
   border-radius: 2%;
   left: 0;
   right: 0;

   color: white;
   @media only screen and (min-width: 768px) {
      order: 1;
      padding: none;
      top: 0;
      position: relative;
      margin: 2vh 5vw 0vh 1vw;
      width: 50vw;
      text-align: left;
      border: none;
      font-size: calc(.3em + 1vw);

   }
`;
export const Job = styled.div`
   box-shadow: 1px 2px 2px 4px rgba(128, 128, 128, .2);
   margin: 10px;
   height: 8vh;
   border: 1px solid white;
   border-radius: 2%;
   padding: 5px;
@media only screen and (min-width: 768px) {
   &:hover {
      background-color: ${props => !props.selected? "#d5dada" : ""};
      }
      position: ${props => props.selected? "absolute" : ""}
   ${props => props.selected? "transform: translate(-30vw,-8vh);color: white;border-left:2px solid #2ab7ca; border-bottom:2px solid #2ab7ca; " : ""};
   width: auto;
   box-shadow: none;
   border: none;
   margin: none;
   height: auto;
   padding: 1vh 0vw 1vh 1vw;
   color: white;
   transition-duration: .5s;
   transition-timing-function: ease-in-out;
}
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