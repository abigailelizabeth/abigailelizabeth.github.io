import React from 'react';
import {  List, Divider } from '@material-ui/core';
import * as data from '../data/about';
import styled from 'styled-components';

import {Container, Hello, PinkBlock, Content, ImageWrapper, BioWrapper, BioSection, TechSection, TechItem, TechWrapper} from './styles/about';
  const About = props => {
   
        return(
            
            <Container showMenu={props.showMenu} here={props.here} currentView={props.current} >
                <Hello>Hello</Hello>
                {console.log(props.here)}
                <h3 style={{ transition: 'opacity', transitionDuration: '4000ms', opacity: `${props.hello? 1 : 0}`, position: 'fixed', left: '25%', top: '40%',  paddingLeft: 60, fontSize: 'calc(1em + 1vw)', fontFamily: 'Karla, sans-serif', fontWeight: 'bold', color: '#f4f4f8', marginBlockEnd: 0}}>(again)</h3>
                
                <PinkBlock />
                <Content >
                    <ImageWrapper src={require('../static/images/abby.jpg')}/>
                    <BioWrapper>
                        <BioSection>
                            {data.about.intro} <br/>
                            {data.about.currently}
                        </BioSection>
                        <List >
                            <TechSection>
                                <TechWrapper>
                                { data.about.technologies.map((tech, index) =>
                                    <TechItem>
                                            {tech}
                                    </TechItem>
                                )}
                                </TechWrapper>
                            </TechSection>

                        </List>
                        </BioWrapper>               
                    </Content>                
            </Container>
                
    );
  }
  export default About;