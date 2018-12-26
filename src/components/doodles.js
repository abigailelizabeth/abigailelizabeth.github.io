import React from 'react';
import {Container, Content, Animate, Frame, Title} from './styles/doodles';
const Doodles = props => {
    return (
        <Container showMenu={props.showMenu} here={props.here} current={props.current}>
            <Title>Doodles</Title>
            <Content>
                <Animate>
                    <Frame src={require("../static/images/boygirlone.svg")}/>
                    <Frame src={require("../static/images/boygirltwo.svg")}/>
                    {/* <Frame src={require("../static/images/painter.svg")}/> */}
                    <Frame src={require("../static/images/dude.svg")}/>
                    <Frame onClick={props.happyBirthdayJason} src={require("../static/images/dance1.svg")}/>
                </Animate>

            </Content>
        </Container>
        );
    }
export default Doodles;