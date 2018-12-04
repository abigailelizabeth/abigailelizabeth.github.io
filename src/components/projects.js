import React from 'react';
import {Container, Content, Title, DescriptionWrapper, ProjectContainer, ProjectWrapper, ProjectPreview, ProjectTitle, ProjectDesc} from './styles/projects';
  const Projects = props => {

    
    
  
        return(
            <Container showMenu={props.showMenu} here={props.here}>
            <Title>Projects</Title>
              <Content>
                
                  <ProjectContainer>
                      <ProjectWrapper>
                          <ProjectPreview>
                          <img style={{width: '100%', height: 'auto'}} src={require('../static/images/kerv.gif')}/>
                          <ProjectTitle>Kerv</ProjectTitle>
                          </ProjectPreview>
                        </ProjectWrapper>
                        <ProjectWrapper>
                          <ProjectPreview>
                          <img style={{width: '100%', height: 'auto'}} src={require('../static/images/kervkue.gif')}/>
                          <ProjectTitle>KervKue</ProjectTitle>
                          </ProjectPreview>
                        </ProjectWrapper>   
                    <ProjectWrapper>   
                      <ProjectPreview>             
                          data data data data lll
                          <ProjectTitle>Another</ProjectTitle>
                        </ProjectPreview>
                      </ProjectWrapper>                    
                 </ProjectContainer> 
                 <ProjectDesc><DescriptionWrapper>hello deets</DescriptionWrapper></ProjectDesc>
                </Content>
            </Container>                 
    );
  }
  export default Projects;