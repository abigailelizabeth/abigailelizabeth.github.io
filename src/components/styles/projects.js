import styled, {keyframes} from 'styled-components';

function chooseBubbleProcess(type){
    if(type === "kerv")
        return processBubbles;
    else if(type=== "kafka")
        return kafkaBubble;
}
const kafkaBubble = keyframes `
0%{
    opacity: 0;
    left: 15vw;
    top: -.5vh;
}
11%{
    opacity: 0;
    left 15vw;
    top: -.5vh;
}
12%{
    left: 15vw;
    opacity: 1;
    top: -.5vh;
    transform: perspective(150px) translateZ(0px);
}
13%{
    transform: perspective(150px) translateZ(50px);
}
14%{
    transform: perspective(150px) translateZ(0px);
}
20%{
    left: 5.5vw;
    top: -.5vh; 
    opacity: 1;
}
20.5%{
    left: 5.5vw;
    top: -.5vh; 
    opacity: 0;
}
100%{
    left: 15vw;
    opacity: 0;
    top: -.5vh;
}
`;
const pencilWrite = keyframes`
0% {
    transform: rotate(10deg);
}
1% {
    transform: rotate(0deg);
}
2% {
    transform: rotate(10deg);
}
3%{
    transform: rotate(0deg);
}
4% {
    transform: rotate(10deg);
}
5% {
    top: 0;
    left: 4vw;
    transform: rotate(0deg);
}
6% {
    top: 1vh;
    left: 2vw;
    transform: rotate(10deg);
}
7% {
    transform: rotate(0deg);
}
8% {
    transform: rotate(10deg);
}
9%{
    transform: rotate(0deg);
}
10% {
    transform: rotate(10deg);
}
11% {
    top: 1vh;
    left: 4vw;
    transform: rotate(0deg);
    opacity: 1;
}
12% {
    opacity: 0;
}
99%{
    opacity:0;
}
100%{
    opacity: 1;
    left 2vw;
    transform: rotate(0deg;)
}
`;
const dataStreamFlow = keyframes`
92.5%{
    opacity: 0;
}
93%{
    opacity: 1;
    top: 12vh;
    left: 3vw;
    width: 8vw;
    font-size: calc(.2em + .6vw);
    transform: rotate(-85deg);
}
95%{
    top: 6vh;
    left: 1vw;
    font-size: calc(.3em + .6vw);
    transform: rotate(-10deg);
}
97%{
    top: 12vh;
    left: 1vw;
    transform: rotate(-20deg)
}
98%{
    top: 14vh;
    left: 1vw;
    transform: rotate(0deg);
}
100%{
    opacity: 1;
    top: 18vh;
    left: 1vh;
    font-size: calc(.3em + .6vw);
    
}
`;

const dataStreamFlowOp = keyframes`
92.5%{
    opacity: 0;
}
93%{
    opacity: 1;
    top: 12vh;
    left: 3vw;
    width: 8vw;
    font-size: calc(.2em + .6vw);
    transform: rotate(85deg);
}
95%{
    top: 6vh;
    left: 5vw;
    font-size: calc(.3em + .6vw);
    transform: rotate(10deg);
}
97%{
    top: 12vh;
    left: 5vw;
    transform: rotate(20deg)
}
98%{
    top: 14vh;
    left: 5vw;
    transform: rotate(0deg);
}
100%{
    opacity: 1;
    top: 18vh;
    left: 5vh;
    font-size: calc(.3em + .6vw);
}
`;
const socketProgress = keyframes`
66%{
    top: 18vh;
    left: 0vw;
    opacity: 0;
}
67%{
    opacity: 1;
    top: 18vh;
    left: 0vw;
}
80%{
    opacity: 1; 
    left: 0vw;
}
90%{
    opacity: 1; 
    left: -17vw;
    transform: perspective(150px) translateZ(0px);
}
92%{
    opacity: 1;
    top: 18vh;
    left: -17vw;
    transform: perspective(150px) translateZ(30px);
}
93%{
    top: 10vh;
    opacity: 1;
    left: -17vw;
    transform: perspective(150px) translateZ(30px);
}

95%{
    top: 12vh;
    opacity: 1;
    left: -17vw;
    transform: perspective(150px) translateZ(30px);
}
97%{
    top: 10vh;
    opacity: 1;
    left: -17vw;
    transform: perspective(150px) translateZ(30px);
}

99%{
    top: 12vh;
    opacity: 1;
    left: -17vw;
    transform: perspective(150px) translateZ(30px);
}
100%{
    top: 10vh;
    opacity: 1;
    left: -17vw;
    transform: perspective(150px) translateZ(30px);
}
`;
const envelopeProgress = keyframes`
0%{
    left: 3vw;
    opacity: 0;
}
20%{
    opacity: 0;
    
}
20.5%{
    opacity: 1;
}
24.5%{
    opacity: 1;

}
25%{
    left: 3vw;
    opacity: 0;
}
65%{
    opacity: 0;
    left: 6vw;
}
67%{
    left: 3vw;
    opacity: 1;
    transform: rotate(0deg);
}
70%{
    left: 1vw;
    transform: rotate(-95deg);
}
72%{
    left: 1vw;
    top: 12vh;
    transform: rotate(-95deg);
}
74%{
    left: 1vw;
    top: 11vh;
    transform: rotate(-95deg);
}
76%{
    left: 1vw;
    top: 12vh;
    transform: rotate(-95deg);
    opacity: 1;
}
80%{
    left: 3vw;
    top: 11vh;
    transform: rotate(0deg);
    opacity: 0;
}

 
`;
const envelopeSealedProgress = keyframes`
0%{
    opacity: 0;
    left: 3vw;
}
24.5%{
    opacity: 0;
    
}
25%{
    left: 3vw;
    opacity: 1;
}
35%{
    top: 14vh;
    left: 17vw;
}

45%{
    left: 17vw;
    top:24vw;
}
55%{
    top: 24vw;
    left: 6vw;
}
65%{
    opacity: 1;
    left: 6vw;
    top: 13vh;
}
65.5%{
    opacity: 0;
}

`;
const loading = keyframes `
0%{
    opacity: 0;
}
9%{
    opacity: 0;
}
10%{
    opacity: 1;
    transform: rotate(0deg);
}
80%{
    opacity: 1;
    transform rotate(3000deg);
}
81%{
    opacity: 0;
}
100%{
    opacity: 0;
}

`;
const processRequest = keyframes`
    0% {
        left: 3vw;
        top: 8vh;
        width: 30%;

    }
    5% {
        left: 3vw;
        top:8vh;
        width: 20%;
    }
    20% {
        top:8vh;
        left: 25vw;
        opacity: 1;
        width: 20%;
    }
    22% {
        width: 30%;
        top:8vh;
        left: 25vw;
        opacity: 1;
    }
    25%{
        opacity: 0;
        top: 8vh;
    }
    30%{
        top:11vh;
        opacity: 0;
    }
    59%{
        opacity: 0;
        top: 11vh;
    }
    60%{
        top: 11vh;
        opacity: 1;
    }
    61%{
        opacity: 1;
        top: 11vh;
        left: 25vw;
    }
    65%{
        opacity: 1;
        top: 14vh;
        left: 25vw;
        width: 30%;
    }
    70%{
        opacity: 1;
        width: 20%;
        left: 25vw;
        top: 14vh;
        
    }
    85%{
        opacity: 1;
        left: 3vw;
        top: 14vh;
        width: 20%;
    }
    88%{
        opacity: 1;
        left: 3vw;
        top:14vh;
        width: 30%;
    }
    100%{
        width: 30%;
        opacity: 1;
        top: 14vh;
    }

`;

const processBubbles = keyframes `
0%{
    opacity: 0;
    left: 7vw;
}
20%{
    opacity: 0;
    left 7vw;
}
25%{
    left: 7vw;
    opacity: 1;
}
35%{
    left: 20vw;
    width: 6vw;
}
38%{
    left: 20vw;
    width: 3vw;
}
41%{
    left: 20vw;
    width: 6vw;
}
44%{
    left: 20vw;
    top: 2vh;
    width: 3vw;
}
47%{
    left: 20vw;
    top: 6.5vh;
    width: 6vw;
}
57%{
    opacity: 1;
    top: 6.5vh;
    left: 7vw;
}
58%{
    opacity: 0;
    top: 6.5vh;
    left: 7vw;
}
100%{
    opacity: 0;
}
`;
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
    transform: ${props => props.showMenu&&!props.here? "translate(-30vw)" : props.showMenu&&props.here? "translate(-30vw, 3vh)":  "translate(0vw)"};

    > * {
    font-family: Karla, sans-serif;
    color: black;
    font-size: calc(.3em + .9vw);
    }
    @media only screen and (min-width: 768px) {
        transition-duration: ${props => props.here? ".2s" : "1s"};
        transform: ${props => props.showMenu&&!props.here? "translate(15vw)" : props.showMenu&&props.here? "translate(15vw, 3vh)":  "translate(0vw)"};

    }
   
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    height: 100vh;
    justify-content: center;
    overflow: auto;
    width: 90vw;
    right: 0;
    animation: ${projectsEntrance} 2s ease-in-out 0s 1;
 

    @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
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
        position: relative;
        margin-top: 0vh;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 50vw;
        height: 100vh;

        > span {
            font-size: calc(.3em + .8vw);
            position: absolute;
            top: 55vh;
            right: 10vw;
            border: 1px dashed white;
            width: 10vw;
            height: 20vh;
            color: white;
        }
       
    }
`;
export const ProjectContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;

    justify-content: flex-start;
    

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
        width: 90vw;
        flex-wrap: wrap;
        > button {
            background: transparent;
            color: white;
            position: absolute;
            font-size: calc(.2em + .8vw);
            left: 3vw;
            top: 25vh;
            border-radius: 2px;
            padding: 4px;
        }
    }

`;

export const ProjectWrapper = styled.div`
        width: 80vw;
        height: 30vh;
        background-color: white;
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
        top: 0vh;
        background-color: white;
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
        position: relative;
        font-weight: bold;
        height: 8vh;
        width: 100%;
        color: white;
        display: flex;
        align-items: center;
    }


`;
export const Component = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 25vh;
    width: 10vw;
    background-color: white;
    border-radius: 10px;
    > p {
        &:nth-child(1){
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            position: relative;
            background-color: #ffafaa;
            color: white;
            font-size: calc(.2em + 1vw);
            width: 100%;
            top: 0;
            margin-top: 0;
            padding-bottom: 2vh;
            border-bottom: 1px solid white;
        }
        &:nth-child(2){
            display: flex;
            justify-content: center;
            align-items: center;
            border: 4px dotted #2ab7ca;
            border-radius: 10px;
            width: 90%;
            height: 60%;
            margin-top: 0;
            
        }
    }

    ${props => props.type==="lg-server"? "position: absolute; width: 20vw;top: 70vh; right: 5vw;": ""}
`;

export const UsrReq = styled.div`
    font-size: calc(.2em + 1vw);
    text-align: center;
    width: 20%;
    height: 3vh;
    position: absolute;
    color: white;
    top: 8vh;
    left: 3vw;
    border: .5px solid pink;
    border-radius: 10px;
    background-color: pink;
    z-index: 1;
    animation: ${processRequest} 15s linear 2s infinite;

`
export const Loading = styled.div`
    position: absolute;
    top: 10vh;
    left:3vw;
    opacity: 0;
    border: 4px solid #F7EDF0;
    border-top: 4px solid #2ab7ca;
    width: 3vw;
    height: 3vw;
    border-radius: 50%;
    z-index: 1;
    animation: ${loading} 15s ease-in-out 2s infinite;
    
`;

export const Database = styled.div`
    position: relative;
    top: -2vh;
    height: 25vh;
    width: 8vw;
    background-color: white;
    border-radius: 50px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    overflow: hidden;
    border-top: 1px solid black;
    > p {
        margin-top: 0;
        color: white;
        top: 0;
        padding-top: 3vh;
        height: 50px
        background-color: #7BE0AD;
        border-radius: 50%;
        position: relative;
        font-size: calc(.2em + 1vw);
        width: 100%;
        border-bottom: 1px solid black;
    }

`;

export const TravelSpace = styled.div`
    color: white;
    width: 10vw;
    height: 5vh;
    border-top: 1px dashed white;
    border-bottom: 1px dashed white;
    ${props => props.type === "watchStream"? "border-bottom: none; position: relative;top: -2vh;" : props.type === "socket"? "border-top: none;position: relative;top: 8vh;" : ""}
`;

export const Bubbles = styled.div`
    opacity: 0;
    position: relative;
    top: 1vh;
    left: 5vw;
    width: 6vw;
    display: flex;
    flex-direction: row;
    z-index: 1;
    justify-content: space-evenly;
    
    animation: ${props => chooseBubbleProcess(props.type)} 15s linear 2s infinite;
 


`;

export const Bubble = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 100%;

    &:nth-child(1){
            
        background-color: red;
    }
    &:nth-child(2){
        background-color: pink;
    }
    &:nth-child(3){
        background-color: #2ab7ca;
    }
    
`;

export const Pencil = styled.div`
    left: 2vw;
   position: relative;
   height: 20px;
   width: 4px;
   background-color: #E1CE7A;
   z-index:1;
   transform: rotate(10deg);
   animation: ${pencilWrite} 15s linear 2s infinite;

`;

export const Lead = styled.div`
    position: absolute;
    top:18px;
    height:0;
    width: 0;
    border-top: 7px solid black;
    border-right: 1px solid white;
    border-left: 2px solid white;

`;
export const Envelope = styled.img`
    z-index: 3;
    position: absolute;
    top: 11vh;
    left: 3vw;
    width: 4vw;
    height: auto;
    &:nth-child(2){
        opacity: 0;
        top: 14vh;
        animation: ${envelopeSealedProgress} 15s linear 2s infinite;
    }
    &:nth-child(3){
        opacity: 0;
        animation: ${envelopeProgress} 15s linear 2s infinite;
    }
    &:nth-child(4){
        width: 3vw;
        opacity: 0;
        top: 18vh;
        left: 0;
        animation: ${socketProgress} 15s linear 2s infinite;
    }
`;

export const DataStream = styled.div`
    position: absolute;
    top: 12vh;
    left: 3vw;
    width: 8vw;
    font-size: calc(.2em + .6vw);
    opacity: 0;
    transform: rotate(85deg);

    &:nth-child(2){
        transform: rotate(-85deg);
        animation: ${dataStreamFlow} 15s linear 2s infinite;

    }
    &:nth-child(3){
        animation: ${dataStreamFlowOp} 15s linear 2s infinite;
    }


`;




