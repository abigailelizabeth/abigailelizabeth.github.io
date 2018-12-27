import React from 'react';
import { Container, Content, ProjectStack,Title, Button, DoodleBox, Component, Pencil, Lead, ProjectContainer, ProjectWrapper, ProjectPreview, ProjectDesc, Database, TravelSpace, UsrReq, Bubbles, Bubble, Loading, Envelope, DataStream} from './styles/projects';
  const Projects = props => {
    return(
        <Container showMenu={props.showMenu} here={props.here}>
            <DoodleBox>
                <Title>Projects</Title>
                <img src={require('../static/images/abbyproj.svg')}/>
                
            </DoodleBox>
            <Content>
               
                {!props.viewProject&&<ProjectContainer>
                    <Button onClick={() => props.toggleProjectView()}>Next Project</Button>
                    <span onClick={()=> props.toggleDiagram()}>View Diagram</span>

                    <ProjectStack>
                        <ul>
                            <li>> React</li>
                            <li>> Redux</li>
                            <li>> Express</li>
                            <li>> MongoDB</li>
                            <li>> Material UI</li>
                        </ul>
                    </ProjectStack>
                    <ProjectWrapper>
                        {!props.viewDiagram &&
                        <ProjectPreview>
                        <img alt="something" style={{width: '100%', height: 'auto'}} src={require('../static/images/kerv.gif')}/>
                        </ProjectPreview>}
                    </ProjectWrapper>
                   
                    <ProjectDesc view={props.viewDiagram? true : false}>
                        <Component>
                            <p>UI</p>
                            <UsrReq></UsrReq>
                            <Loading></Loading>
                        </Component>
                        <TravelSpace></TravelSpace>
                        <Component>
                        <p>Server</p>
                        <Bubbles type="kerv">
                            <Bubble></Bubble>
                            <Bubble></Bubble>
                            <Bubble></Bubble> 
                            </Bubbles>
                        </Component>
                        <TravelSpace></TravelSpace>
                        <Database><p>MongoDB</p></Database>
                    </ProjectDesc>
                </ProjectContainer>}

                  {/* next project  */}
                  {props.viewProject&&<ProjectContainer > 
                    <Button onClick={() => props.toggleProjectView()}>Next Project</Button>
                    <span onClick={()=> props.toggleDiagram()}>View Diagram</span>
                    <ProjectStack>
                        <ul>
                            <li>> Express</li>
                            <li>> MongoDB</li>
                            <li>> Kafka-Node</li>
                            <li>> SocketIO</li>
                            <li>> React</li>
                            <li>> Redux</li>
                        </ul>
                    </ProjectStack>
                   
                    <ProjectWrapper>{!props.viewDiagram&&
                          <ProjectPreview>
                          <img alt="something" style={{width: '100%', height: 'auto'}} src={require('../static/images/kervkue.gif')}/>
                          </ProjectPreview>}
                      </ProjectWrapper>
                   
                  <ProjectDesc view={props.viewDiagram? true : false}>
                    <Component>
                        <p>UI</p>
                        <DataStream>data </DataStream>
                        <DataStream>data</DataStream>
                    </Component>
                    <TravelSpace type="socket">Socket-IO</TravelSpace>
                    <Component>
                      <p>Server</p>
                      <Envelope src={require("../static/images/envelope.svg")}/>
                      <Envelope src={require("../static/images/envelopeopen.svg")}></Envelope>
                      <Envelope src={require("../static/images/socket.svg")}></Envelope>
                      <Bubbles type="kafka">
                          <Bubble></Bubble>
                        </Bubbles>
                    </Component>
                    <TravelSpace type="watchStream">Watch Stream</TravelSpace>
                    <Database><p>MongoDB</p><Pencil><Lead/></Pencil></Database>
                    <Component type="lg-server"><p>Zookeeper</p><p>Kafka Server</p></Component>
                    <span>kafka-node</span>
                    </ProjectDesc>
                  </ProjectContainer> }
                </Content>
            </Container>                 
    );
  }
  export default Projects;
