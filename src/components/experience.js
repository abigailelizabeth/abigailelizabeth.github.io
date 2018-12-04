import React from 'react';
import * as data from '../data/work';
import {Container, Content, Title, JobContainer, JobSide, Jobs, JobDescip, Job, JobTitle, JobYear, Summary, Intro, Company, Efforts, Effort, EffortSummary, EffortSkills, Skill} from './styles/experience';
 
  const Experience = props => {

      const {viewJob, viewJobEffort} = props
        return(
            <Container showMenu={props.showMenu} here={props.here}>
            <Title>{'< Work />'}</Title>
                <Content>
                <JobContainer>   
                        <Jobs>
                            { data.data.technical.map((job, index) => (
                                    <Job onClick={()=> props.handleViewJob(index)} selected={index === viewJob? true : false}>
                                        <JobTitle>{job.role}</JobTitle>
                                        <JobYear>{job.year}</JobYear>
                                    </Job>
                                    ))
                            }
                        </Jobs>
                        <JobDescip>
                            <Company>
                                {props.tech? data.data.technical[viewJob].description.company : data.data.nonTechnical[viewJob].description.company}
                            </Company>
                            <Summary>
                                {props.tech? data.data.technical[viewJob].description.summary : data.data.nonTechnical[viewJob].description.summary }
                            </Summary>
                            <Intro>
                                {props.tech? data.data.technical[viewJob].description.efforts.intro : data.data.nonTechnical[viewJob].description.efforts.intro }
                            </Intro>
                            <Efforts>
                                {
                                    (props.tech ? data.data.technical[viewJob].description.efforts.efforts : data.data.nonTechnical[viewJob].description.efforts.efforts).map((effort, index )=>  
                                        <Effort selected={index === viewJobEffort? true : false}button onClick={()=> props.handleViewJobEffort(index)}>{effort.title}</Effort>
                                    )   
                                }
                            </Efforts>
                            <EffortSummary>
                                {props.tech ?  data.data.technical[viewJob].description.efforts.efforts[viewJobEffort].description : data.data.nonTechnical[viewJob].description.efforts.efforts[viewJobEffort].description }
                            </EffortSummary>
                            <EffortSkills>
                            { (props.tech ? data.data.technical[viewJob].description.efforts.efforts[viewJobEffort].skills
                                : data.data.nonTechnical[viewJob].description.efforts.efforts[viewJobEffort].skills).map((skill, index)=>
                                        <Skill order={index}>{skill}</Skill>
                                )
                            }
                            </EffortSkills>
                        </JobDescip>
                        </JobContainer> 
                      
                        
                                  
                </Content> 
        </Container>            
    );
  }
  export default Experience;