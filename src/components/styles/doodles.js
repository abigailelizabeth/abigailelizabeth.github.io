import styled, {keyframes} from 'styled-components';

const experienceEntrance = keyframes`
   0% {
      right: -100vw;
   }
   100% {
      right: 0vw;
   }
`;
const changeFrame = keyframes`
0%{
    opacity: 0;
}
49.5%{
    opacity: 0;
}
50%{
    opacity: 1;
}
100%{
    opacity: 1;
}
`;
const changeFrameb = keyframes`
0%{
    opacity: 1;
}
49.5%{
    opacity: 1;
}
50%{
    opacity: 0;
}
100%{
    opacity: 0;
}
`;

const doodleEntranceTitle = keyframes`
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
   transform: ${props => props.showMenu&&!props.here? "translate(-15vw)" : props.showMenu&&props.here? "translate(-15vw, 3vh)":  "translate(0vw)"};

   > * {
      font-family: Karla, sans-serif;
      color: black;
      font-size: calc(.3em + 3vw);
   }

   @media only screen and (min-width: 768px) {
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
   justify-content: flex-start;
   flex-direction: row;
   right: 0;
   height: 100vh;
   width: 90vw;
   overflow: auto;
   animation: ${experienceEntrance} 2s ease-in-out 0s 1;
   > div {
      &:nth-child(2){
         width: 15vw;
         left: 50%;
         top: 15vh;
      }
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
   animation: ${doodleEntranceTitle} 2s ease-in-out 0s 1;
   
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

export const Animate = styled.div`
   width: 25vw;
   position: relative;
   top: 20vh;
   

`;
export const Frame = styled.img`
   position: absolute;
   width: 40vw;
   &:nth-child(1){
       opacity:1;
       animation: ${changeFrameb} 2s ease-in-out 2s infinite;

   }
   &:nth-child(2) {
    opacity: 0;
    animation: ${changeFrame} 2s ease-in-out 2s infinite;
   }
   &:nth-child(3) {
       position: relative;
       top: 0vh;
       left: 45vw;
       width: 25vw;
      opacity: 1;
   }
   &:nth-child(4) {
      top: 25vh;
      left: 40vw;
      width: 25vw;
      z-index: 1;
}
   &:nth-child(5) {
      width: 20vw;
      top: 15vh;
      left: 61vw;
      width: 15vw;
      opacity: 1;
   }

`;