import styled, {keyframes} from 'styled-components';

const jobContainerEnter = keyframes`
0%{
   top: 100vh;
}
83.3%{
   top: 100vh;
}
100%{
   top: -10vh;
}
`;
const doodleTranslate = keyframes`
0%{
   top: 0vh;
   left: 0vw;
   width: 90vw;
}
80%{
   top: 0vh;
   left: 0vw;
   width: 90vw;
}
100%{
   width: 30vw;
   top: -18vh;
   left: 40vw;
}
`;
const experienceEntrance = keyframes`
   0% {
      right: -100vw;
   }
   100% {
      right: 0vw;
   }
`;
const jobsHeightFlow = keyframes`
   0% {
      height: 10vh;
   }
   100% {
      height: 60vh;
   }
`;
const pairPrograma = keyframes`
0%{
   opacity: 1;
}
32.5%{
   opacity: 1;
}
33%{
   opacity: 0;
}
100%{
   opacity: 0;
}
`;
const pairProgramb = keyframes`
0%{
   opacity: 0;
}
32.5%{
   opacity: 0;
}
33%{
   opacity: 1;
}
65.5%{
   opacity: 1;
}
66%{
   opacity: 0;
}
100%{
   opacity: 0;
}
`;
const pairProgramc = keyframes`
0%{
   opacity: 0;
}
65.5%{
   opacity: 0;
}
66%{
   opacity: 1;
}
100%{
   opacity: 1;
}
`;
const experienceEntranceTitle = keyframes`
   0% {
      right: -200vw;
   }
   100% {
      right: 0vw;
   }
`;
const descriptionEntrance = keyframes`
   0% {
      top: -30vh;
      left: -100vw;
   }
   100% {
      top: -30vh;
      left: 0;
   }
`;
const descriptionEntranceLg = keyframes`
   0% {
      top: 0vh;
      right: -100vw;
   }
   100% {
      top: 0vh;
      right: 0;
   }
`;

export const Container = styled.div`
   position: relative;
   height: 100vh;
   width: 100vw;
   background: transparent;
   transition-timing-function: ease-in-out;
   transition-duration: ${props => props.here? ".2s" : "1s"};
   transform: ${props => props.showMenu&&!props.here? "translate(-15vw)" : props.showMenu&&props.here? "translate(-15vw, 3vh)":  "translate(0vw)"};

   > * {
      font-family: Karla, sans-serif;
      color: black;
      font-size: calc(.3em + 3vw);
   }

   @media only screen and (min-width: 768px) {
      display: flex;
      flex-direction: column;
      transition-duration: ${props => props.here? ".2s" : "1s"};
      transform: ${props => props.showMenu&&!props.here? "translate(15vw)" : props.showMenu&&props.here? "translate(15vw, 3vh)":  "translate(0vw)"};
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
   height: 100vh;
   right: 0vw;
   width: 90vw;
   
   animation: ${experienceEntrance} 2s ease-in-out 0s 1;
   @media only screen and (min-width: 768px) {
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
   }
`;
export const ContentWrapper = styled.div`
   position: relative;
   order: 2;
   width: 100%;
   height: 95vh;
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: center;
`;

export const Title = styled.h1`
   content: 1;
   font-size: calc(2em + 5vw);
   font-weight: bold;
   z-index: 5;
   color: white;
   position: relative;
   display: block;
   width: 65vw;
   right: 20vw;

   animation: ${experienceEntranceTitle} 2s ease-in-out 0s 1;

   @media only screen and (min-width: 768px) {
      top: 0vh;
      text-align: left;
      right: 0vw;
      height: 10vh;
      width: 20vw;
      margin-top: 5vh;

      
      font-size: calc(.5em + 6vw);
   }
`;
export const JobContainer = styled.div`
   padding: 5vh 0vw 0vw 4vh;
   position: relative;
   order: 2;
   width: 80vw;
   text-align: left;
   top: -10vh;
   height: auto;
   animation: ${jobContainerEnter} 6s linear 0s 1;
   @media only screen and (min-width: 768px) {
      animation: none;
      top: 0;
      width: 45vw;
      justify-content: space-between;
      align-items: center;
      padding: 0;
      position: relative;
      min-height: 80vh;
      display: flex;
      flex-direction: column;
      border: none;
   }

`;
export const Jobs = styled.div`

   color: white;
   position: absolute;
   background-color: #2ab7ca;
   top: -30vh;
   width: 80vw;
   padding: 2px;
   left:0;
   right: 0;
   transition-timing-function: linear;
   transition-duration: 1s;


   @media only screen and (min-width: 768px) {
      width: 80%;
      order: 1;
      top: 0vh;
      padding: 0;
      position: relative;
      overflow: hidden;
      height: auto;
      animation: ${jobsHeightFlow} 2s ease-in-out 0s 1;
      background-color: rgb(244,244,248, .2);
      display: flex;
      flex-direction: column;
      border-radius: 4px;
   }
`;

export const JobDescip = styled.div`
   position: absolute;
   top: -30vh;
   width: 70vw;
   padding: 8px;
   font-size: calc(1em + 3vw);
   right: 10vw;
   color: white;
   animation: ${descriptionEntrance} .5s ease-in-out 0s 1;
   > button {
      background: transparent;
      color: white;
      padding: 8px;
      border: none;
      cursor: pointer;
   }
   

   @media only screen and (min-width: 768px) {
      order: 2;
      padding: 0;
      right: 0;
      position: relative;
      margin: 0;
      top: 0vh;
      width: 90%;
      text-align: left;
      border: none;
      font-size: calc(.3em + 1vw);
      height: 68vh;
      animation: ${descriptionEntranceLg} 1s ease-in-out 0s 1;

   }
`;
export const Job = styled.div`
   margin: 8px;
   height: 10vh;
   border: 1px solid white;
   background-color: rgb(244,244,248, .2);

   border-radius: 3px;
   padding: 5px;
@media only screen and (min-width: 768px) {
   order: 2;
   &:hover {
      background-color: ${props => !props.selected? "#d5dada" : ""};
      }
   ${props => props.selected? "color: white;border-left:2px solid #2ab7ca; border-bottom:2px solid #2ab7ca; order:1; " : ""};
   width: auto;
   box-shadow: none;
   
   background-color: transparent;
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
   @media only screen and (min-width: 768px) {
      font-size: calc(.2em + .8vw);
      margin: .5vh 0vw 0vw .5vh;
   }
`;
export const Company = styled.div`
   font-weight: bold;
   padding: 2vh 0vw 2vh 0vh;
   font-size: calc(.4em + 1vw);
   @media only screen and (min-width: 768px) {

      font-weight: bold;
   }

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
   flex-wrap: no-wrap;
   overflow: auto;

`;
export const Skill = styled.div`
   order: ${props => props.order};
   margin: .5vh .5vw .5vh .5vw;
   width: auto;
   border-radius: 8px;
   padding: .5vh .5vh;
   text-transform: uppercase;
   border: 2px solid white;
   font-size: calc(.2em + 1vw);
   @media only screen and (min-width: 768px) {
      font-size: calc(.05em + .7vw);

   }

`;

export const Doodle = styled.img`
   position: absolute;
   top: 0vh;
   width: 100%;
   height: auto;
   left: 0;
   &:nth-child(1){
      opacity: 1;
      animation: ${pairPrograma} 2s linear 2s 1;

   }
   &:nth-child(2){
      opacity: 0;
      animation: ${pairProgramb} 2s linear 2s 1;

   }
   &:nth-child(3){
      opacity: 0;
      animation: ${pairProgramc} 2s linear 2s 1;
   }
   @media only screen and (min-width: 768px) {
      &:nth-child(1){
         opacity: 1;
         animation: ${pairPrograma} 5s linear 2s infinite;
   
      }
      &:nth-child(2){
         opacity: 0;
         animation: ${pairProgramb} 5s linear 2s infinite;
   
      }
      &:nth-child(3){
         opacity: 0;
         animation: ${pairProgramc} 5s linear 2s infinite;
      }
   }

`;
export const Animate = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: center;
   width: 30vw;
   position: absolute;
   top: -18vh;
   left: 40vw;
   min-height: 70vh;
   animation: ${doodleTranslate} 5s linear 0s 1;

@media only screen and (min-width: 768px) {
   animation: none;
   position: relative;
   top: 0vh;
   left: 0;
   order: 1;
   width: 40vw;
   min-height: 70vh;
   
}

`;
export const AnimateContainer = styled.div`
   width: 90%;
   position: relative;
   height: 70vh;
@media only screen and (min-width: 768px) {
   width: 90%;
   position: relative;
   height: 60vh;
}
`;