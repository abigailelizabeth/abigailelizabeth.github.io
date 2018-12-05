import styled, {keyframes} from 'styled-components';

const menuEntice = keyframes`
  0% {
    top: -50vh;
  }
  50% {
      top: -45vh;
  }
  100% {
    top: -50vh;
  }
`

const smMenuEntice = keyframes`
0% {
    top: -100vh;
  }
  50% {
      top: -95vh;
  }
  100% {
    top: -100vh;
  }
`;
const navGlow = keyframes`
0%{
    opacity: .3;
}
50%{
    opacity: 1;
}
100%{
    opacity: .3;
}

`;

const menuGlow = keyframes`
0%{
    opacity: .1;
}
50%{
    opacity: .3;
}
100%{
    opacity: .1;
}

`;
const arrowEntice = keyframes`
  0% {
    top: 0vh;
    left: 2vw;
  }
  15% {
      top: 1vh;
      left: 1vw;
  }
  30% {
    top: 4vh;
    left: 0.5vw;
  }
  55% {
      top: 1vh
      left: 0vw;
  }
  75%{
      top: 4vh;
      left: 2vw;
  }
  85%{
    top: 1vh;
    left: .5vw;
}
100%{
    top: 0vh;
    left: 2vw;
}
`
const bounceBall = keyframes`
    0% {
        top: 5vh;
    }
    50% {
        top: 0vh;
    }
    100% {
        top: 5vh;
    }
`;
const menuShow = keyframes`
    0% {
        top: -45vh;
    }
    100% {
        top: 0vh;
    }
`;

const menuItemDance = keyframes`
    0% {
        left: -.3vw;
    }
    50% {
        left: 1vw;
    }
    100% {
        left: -.3vw;
    }
`;
export const Container = styled.div`


`;
export const MenuColor = styled.div`
    position: absolute;
    height: inherit;
    width: inherit;
    background-color: silver;
    border-radius: 10px;
    z-index: -1;
    animation: ${menuGlow} 3s ease-in-out 0s infinite;
`;
export const MenuSm = styled.div`
    position: fixed;
    top: 5vh;
    right: 5vw;
    width: 8vw;
    height: 7vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 4vh;
    
    z-index: 10;
    font-size: calc(1em + 5vw);
    font-weight: bold;
    color: white;
    

    @media only screen and (min-width: 768px) {
        display: none;
    }
`;
export const MenuWrapper = styled.div`
    z-index: 5;
    overflow: hidden;
    position: fixed;
    top: 20vh;
    right: 3vw;
    width: 25vw;
    display: flex;
    justify-content: center;    

    @media only screen and (min-width: 768px) {
        z-index: 5;
        overflow: hidden;
        position: fixed;
        top: 20vh;
        left: 0vw;
        width: 15vw;
        display: flex;
        justify-content: center;
    }
    
`;

export const NavNext = styled.div`
    z-index: 5;
    color: white;
    top: 40vh;
    position: fixed;
    opacity: .7;
    animation: ${navGlow} 3s ease-in-out 0s infinite;   
    right: 0vw;
    font-size: calc(2em + 10vw);
    font-weight: bold;
    @media only screen and (min-width: 768px) {
        &:hover{
            cursor: pointer;
        }
        font-size: calc(2em + 1vw);
        font-weight: bold;
        top: 90vh;
        right: 30vw;
        width: 10vw;
     }
    
`;
export const NavPrev = styled.div`
    z-index: 5;
    color: white;
    top: 40vh;
    left: 0;
    position: fixed;
    opacity: .7;
    animation: ${navGlow} 3s ease-in-out 0s infinite;   
    font-size: calc(2em + 10vw);
    font-weight: bold;
    @media only screen and (min-width: 768px) {
        &:hover{
            cursor: pointer;
        }
        top: 90vh;
        left: 30vw;
        font-size: calc(2em + 1vw);
        font-weight: bold;
        width: 10vw;
    }

`;
export const Menu = styled.div`
    color: white;
    height: 60vh;
    top: 0;
    position: relative;
    border-inline-start: 2px solid white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;
    animation-name: ${props => props.show ? menuShow  : smMenuEntice };
    animation-timing-function: ease-in-out;
    animation-duration: 1.5s;
    animation-iteration-count: ${props => props.show? "1": "infinite"};
    animation-delay: 0s;

    @media only screen and (min-width: 768px) {
        animation-name: ${props => props.show ? menuShow  : menuEntice };
        animation-timing-function: ease-in-out;
        animation-duration: 1.5s;
        animation-iteration-count: ${props => props.show? "1": "infinite"};
        animation-delay: 0s;
    }

`;

export const MenuBall = styled.button`
    display: none;
    @media only screen and (min-width: 768px) {
        display: block;
        order: 4;
        color: ${props => props.notProjects?"white": "pink"};
        position: relative;
        bottom: -5vh;
        left: -1.5vw;
        height: 6vh;
        width: 6vh;
        background-color: ${props => props.notProjects? "pink" : "white"};
        border-radius: 50%;
        animation: ${props => props.showMenu? bounceBall : ""};
        animation-timing-function: ease-in-out;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        animation-delay: 0s;
}
    
`;
export const Arrow = styled.div`

    position: absolute;
    transform: ${props => !props.showMenu?"rotate(180deg)" :""};
    font-size: calc(.9em + .8vw);
    font-weight: bold;
    animation-name: ${arrowEntice};
    
    animation-iteration-count: infinite;
    animation-delay: 0s;
    &:nth-child(1){
        
        animation-timing-function: ease-in-out;
        animation-duration: 3s;
        color: red;
    }
    &:nth-child(2){
        animation-timing-function: linear;
    animation-duration: 3.5s;
        color: white;
    }
    &:nth-child(3){
        animation-direction: reverse;
        animation-timing-function: ease-in-out;
        animation-duration: 3.8s;
        color: #2ab7ca;
    }
    &:nth-child(4){
        animation-direction: reverse;
        animation-timing-function: linear;
        animation-duration: 3.2s;
        color: yellow;
    }


`;

export const MenuItem = styled.p`
    position: relative;
    width: 20vw;
    left: -.3vw;
    height: 4vh;
    border-inline-start: .5vw solid white;
    display: flex;
    align-items: center;
    font-size: calc(.2em + .5vw)
    padding-inline-start: .5vw;
    
    

    @media only screen and (min-width: 768px) {
        width: auto;
        
        &:hover {  
            animation: ${menuItemDance} 1s ease-in-out 0s 1;   
        }

    }
    
`;

