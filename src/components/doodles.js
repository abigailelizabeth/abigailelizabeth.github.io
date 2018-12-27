import React from 'react';
import {Container, Content, Animate, Frame, Title} from './styles/doodles';
import {Animation, FrameD} from './styles/tribute';
const Doodles = props => {
    return (
        <Container showMenu={props.showMenu} here={props.here} current={props.current}>
            <Title>Doodles</Title>
            <Content>
                <Animate>
                    <Frame src={require("../static/images/boygirlone.svg")}/>
                    <Frame src={require("../static/images/boygirltwo.svg")}/>
                    {/* <Frame src={require("../static/images/painter.svg")}/> */}
                    <Frame src={require('../static/images/camera.svg')}/>
                    <Frame src={require('../static/images/korra.svg')}/>
                    <Frame src={require("../static/images/dude.svg")}/>
                </Animate>
                <Animation onClick={props.happyBirthdayJason}>
                        <FrameD src={require("../static/images/dance1.svg")}/>
                        <FrameD src={require("../static/images/dance2a.svg")}/>
                        <FrameD src={require("../static/images/dance2.svg")} />
                        <FrameD src={require("../static/images/dance1a.svg")}/>
                </Animation>

            </Content>
        </Container>
        );
    }
export default Doodles;