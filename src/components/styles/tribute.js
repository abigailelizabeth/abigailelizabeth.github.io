import styled, {keyframes} from 'styled-components';

const changeFrame = keyframes`
0%{
    opacity: 1;
}
16.65%{
    opacity: 1;
}
16.66%{
    opacity: 0;
}
33.31%{
    opacity: 0;
}
33.32%{
    opacity: 1;
}
49.98%{
    opacity: 1;
}
49.99%{
    opacity: 0;
}
100%{
    opacity: 0;
}
`;
const changeFrameb = keyframes`
0%{
    opacity: 0;
}
16.65%{
    opacity: 0;
}
16.66%{
    opacity: 1;
}
33.31%{
    opacity: 1;
}
33.32%{
    opacity: 0;
}
100%{
    opacity: 0;
}
`;
const changeFramec = keyframes`
0%{
    opacity: 0;
}
49.97%{
    opacity: 0;
}
49.98%{
    opacity: 1;
}
66.63%{
    opacity: 1;
}
66.64%{
    opacity: 0;
}
83.29%{
    opacity: 0;
}
83.3%{
    opacity: 1;
}
100%{
    opacity: 1;
}
`;
const changeFramed = keyframes`
0%{
    opacity: 0;
}
66.63%{
    opacity: 0;
}
66.64%{
    opacity: 1;
}
83.29%{
    opacity: 1;
}
83.3%{
    opacity: 0;
}
100%{
    opacity: 0;
}
`;
export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: #88A096;
    display: flex;
    justify-content: center;
    font-family: Karla, sans-serif;
    color: #f8f4f8;
   
`;
export const MessageBox = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const Speech = styled.div`
    width: 60%;
    display: flex;
    justify-content: flex-start;
    text-align: left;
    font-size: calc(.3em + .8vw);
`;
export const Title = styled.div`
    font-size: calc(.5em + 5vw);
    position: relative;
    > span {
        font-size: calc(.1em + .7vw);
        position: absolute;
        top: -10%;
        left: 35%;
    }

`;
export const IdeaBox = styled.div`
    height: 60%;
    width: 100%;

`;
export const Art = styled.div`
    position: relative;
    > img {
        position: absolute;
        &:nth-child(1){
            left: 0;
            width: 80%;
            top: 100px;
        }
        &:nth-child(2){
            right: 0;
            width: 50%;
            
        }
        &:nth-child(3){
            left: 30%;
            width: 15%;
            
        }
        &:nth-child(4){
            left: 35%;
            top: 190px;
            width: 80%;
            
        }
        &:nth-child(5){
            left: 50%;
            top: 350px;
            width: 40%;
            
        }
    }
`;

export const Animation = styled.div`
    width: 50%;
    position: relative;
`;
export const Frame = styled.img`
    width: 90%;
    height: auto;
    left: 0;
    position: absolute;
    &:nth-child(1){
        animation: ${changeFrame} 4s linear 0s infinite;
        
    }
    &:nth-child(2){
        opacity: 0;
        animation: ${changeFrameb} 4s linear 0s infinite;
    }
    &:nth-child(3){
        opacity: 0;
        animation: ${changeFramec} 4s linear 0s infinite;
    }
    &:nth-child(4){
        opacity: 0;
        animation: ${changeFramed} 4s linear 0s infinite;
    }

`;