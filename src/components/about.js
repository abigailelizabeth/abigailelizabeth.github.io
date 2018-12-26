import React from 'react';
import {  List} from '@material-ui/core';
import * as data from '../data/about';
import {Container, Hello, PinkBlock, Content, ImageWrapper, BioWrapper, BioSection, TechSection, TechItem, TechWrapper} from './styles/about';

const nestedArray = [[1,2,[3]],4]
const flatArray = []
const arrayFlatten = (nestedArr) => {
    Array.isArray(nestedArr) ?
        // map through each element in array
        nestedArr.map( element => {
            // check if element is an array
            Array.isArray(element) ? 
                // recursively call arrayFlatten to work through nested arrays
                arrayFlatten(element) 
            : 
                // push non array-type element into flat array
                flatArray.push(element)
        })
    :
        // push non array-type element into flat array
        flatArray.push(nestedArr)
}
const seeResults = (nestedArr) => {
    arrayFlatten(nestedArr)
    console.log(flatArray)
}
    
  const About = props => {
   
        return(
            
            <Container showMenu={props.showMenu} here={props.here} currentView={props.current} >
                <Hello>Hello</Hello>
                {seeResults(nestedArray)}
                {console.log(props.here)}
                <h3 style={{ transition: 'opacity', transitionDuration: '4000ms', opacity: `${props.hello? 1 : 0}`, position: 'fixed', left: '25%', top: '40%',  paddingLeft: 60, fontSize: 'calc(1em + 1vw)', fontFamily: 'Karla, sans-serif', fontWeight: 'bold', color: '#f4f4f8', marginBlockEnd: 0}}>(again)</h3>
                
                <PinkBlock />
                <Content >
                    {/* <ImageWrapper src={require('../static/images/closedeyes.svg')}></ImageWrapper> */}
                <ImageWrapper src={props.showMenu? require("../static/images/abbsleft.svg"):  require("../static/images/abbs.svg")}/>
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