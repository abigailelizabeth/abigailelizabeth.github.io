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
const ballRingDance = keyframes`
0%{
    top: -.5vh;
}
25%{
    left: .5vw;
}
50%{
    top: .5vh;
    
}
75%{
    left: -.5vw;
}
100%{
    top: -.5vh;
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
    height: 90vh;
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

export const ContactWrapper = styled.div`
    z-index: 4;
    position: fixed;
    display: flex;
    flex-direction: column;
    right: 0;
    width: 5vw;
    height: 100vh;
    justify-content: space-around;
    > a {
        > img {
        width: 3vw;
        }
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
    border-inline-start: 2px solid #FFAFAA;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;
    animation-name: ${props => props.show ? menuShow  : smMenuEntice };
    animation-timing-function: ease-in-out;
    animation-duration: 1.5s;
    animation-iteration-count: ${props => props.show? "1": "infinite"};
    animation-delay: 0s;
    border-image: url("../../static/images/string.svg") 30 round;

    @media only screen and (min-width: 768px) {
        animation-name: ${props => props.show ? menuShow  : menuEntice };
        animation-timing-function: ease-in-out;
        animation-duration: 1.5s;
        animation-iteration-count: ${props => props.show? "1": "infinite"};
        animation-delay: 0s;
    }

`;
export const BallBox = styled.div`
display: none;
    @media only screen and (min-width: 768px) {
        display: block;
        order: 4;
        position: relative;
        bottom: -5vh;
        left: -1.5vw;
        height: 6vh;
        width: 6vh;
        animation: ${props => props.showMenu? bounceBall : ""};
        animation-timing-function: ease-in-out;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        animation-delay: 0s;
    }
`;
export const MenuBall = styled.img`
    position: absolute;
    left: 0;
    width: 100%;
    &:nth-child(1){
        top: 0;
        z-index:2;
        animation: ${ballRingDance} 2s linear 0s infinite;   
    }
    &:nth-child(2){
        width: 95%;
    }
    
`;

export const MenuItem = styled.p`
    position: relative;
    color: white;
    width: 20vw;
    left: -.3vw;
    height: 4vh;
    border-inline-start: .5vw solid #FFAFAA;
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

