import React from 'react';
import {Frame, Container, MessageBox, Animation, Title, Speech, IdeaBox, Art} from './styles/tribute';
const Tribute = props => {
    return (
        <Container>
            <MessageBox>
                <Title>HAPPY <span>(early)</span> BIRTHDAY</Title>
                <Speech>Hi there Jason! I'm very excited to celebrate with you again, and I'm hoping to make this birthday a very special day for you. Hoping to fill your day with things you enjoy. </Speech>

                <IdeaBox>
                <Art>
                    <img src={require("../static/images/jason.svg")}/>
                    <img src={require("../static/images/art.svg")}/>
                    <img src={require("../static/images/coffee.svg")}/>
                    <img src={require("../static/images/camera.svg")}/>
                    <img src={require("../static/images/korra.svg")}/>
                </Art>
            </IdeaBox>
            </MessageBox>
            <Animation>
                <Frame src={require("../static/images/dance1.svg")}/>
                <Frame src={require("../static/images/dance2a.svg")}/>
                <Frame src={require("../static/images/dance2.svg")} />
                <Frame src={require("../static/images/dance1a.svg")}/>
            </Animation>
         
            


        </Container>
        );
    }
export default Tribute;