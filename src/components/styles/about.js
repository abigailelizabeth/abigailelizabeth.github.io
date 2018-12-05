import styled, {keyframes} from 'styled-components';


const helloFlow = keyframes`
0% {
   right: 60vw;
   top: 50vh;
}
100% {
   right: 15vw;
   top: 0vh;
}
`;
const helloFlowSm = keyframes`
0% {
   right: 30vw;
   top: 50vh;
}
100% {
   right: 45vw;
   top: 0vh;
}
`;
const techScroll = keyframes`
0%{
   left: -50vw;
}
50%{
   left: 1vw;
}
100%{
   left: -50vw;
}
`;
const contentFlow = keyframes `
0%{
   left: -100vw;
}
100% {
   left: 0vw;
}

`;
const pinkFlow = keyframes`
0%{
   right: -50%;

}
100% {
   right: -100%;
}
`;
export const Container = styled.div`
   position: relative;
   background-color: #2ab7ca;
   height: 100vh;
   width: 100vw;
   transition-timing-function: ease-in-out;
   transition-duration: ${props => props.here? ".2s" : "1s"};
   transform: ${props => props.showMenu&&!props.here? "translate(-30vw)" : props.showMenu&&props.here? "translate(-30vw, 3vh)": "translate(0vw)"};
   > * {
      font-family: Karla, sans-serif;
      color: white;
      font-size: calc(.3em + 3vw);
   }
   @media only screen and (min-width: 768px) {
      transition-duration: ${props => props.here? ".2s" : "1s"};
      transform: ${props => props.showMenu&&!props.here? "translate(10vw)" : props.showMenu&&props.here? "translate(10vw, 3vh)": "translate(0vw)"};
      > * {
         font-family: Karla, sans-serif;
         color: #f8f4f8;
         font-size: calc(.3em + 1vw);
   }
`;
 export const Hello = styled.h1`
    z-index: 1;
    position: absolute;
    top: 0vh;
    right: 45vw;
    margin-top: 0vh;
    font-size: calc(2.5em + 12vw);
    font-weight: bold;
    animation: ${helloFlowSm} 2s ease-in-out 0s 1; 

    @media only screen and (min-width: 768px) {
      margin-top: 5vh;
      font-size: calc(1em + 10vw);
      animation: ${helloFlow} 2s ease-in-out 0s 1; 
      top: 0vh;
      right: 15vw;
   }
 `;

 export const PinkBlock = styled.div`
   position: relative;
   top: 0vh;
   height: 100vh;
   width: 50vw;
   right: -100%;
   background-color: pink;
   animation: ${pinkFlow} 2s ease-in-out 0s 1;

 `;

 export const Content = styled.div`
   z-index: 2;
   position: absolute;
   width: 100vw;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: column;
   top: 15vh;
   text-align: left;
   animation: ${contentFlow} 2s ease-in-out 0s 1;
   color: white;
   @media only screen and (min-width: 768px) {
      top: 25vh;
      flex-direction: row;
      justify-content: space-evenly;
   }
 `;

 export const ImageWrapper = styled.img`
   width: 35vw;
   height: auto;
   border-radius: 20%;
   order: 1;
   src: ${props => props.src};
   @media only screen and (min-width: 768px) {
      width: 25vw;
   }
 `;
 export const BioWrapper = styled.div`
   border-top: 1px solid white;
   padding: 2vw 2vh 2vh 2vw;
   margin-top: 2vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   order: 2;
   width: 70vw;
   @media only screen and (min-width: 768px) {
      width: 45vw;
      margin-top: 0vh;
   }
 `;
 export const BioSection = styled.div`
   padding: 1.5vh;
 `;
export const TechSection = styled.div`
   width: 60vw;
   overflow: hidden;

   @media only screen and (min-width: 768px) {
      width: 25vw;
   }
   
   
`;
export const TechWrapper = styled.div`
   display: flex;
   flex-direction: row;
   position: relative;
   animation: ${techScroll} 20s ease-in-out 0s infinite; 
   &:hover {

   }

`;
 export const TechItem = styled.div`
   width: auto; 
   height: auto;
   display: flex;
   align-items: center;
   margin: 4px; 
   margin-left: 10px;
   margin-right: 10px;
   border-radius: 8px;
   padding: 4px 10px;
   text-transform: uppercase;
   border: 2px solid #f4f4f8;
   font-size: calc(.25em + .5vw);
 `;
