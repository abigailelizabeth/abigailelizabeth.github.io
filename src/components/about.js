import React from 'react';
import {  List, Divider } from '@material-ui/core';
import Image from 'react-image-resizer'
import * as data from '../data/about';
import '../static/styles/about.css';
 
  const About = props => {
      let getStyle = () => {
          let move = 'translate(0px ,0px)'
        let fade = 1
          if(window.pageYOffset > 500) move = `translate(0px, -${(window.pageYOffset - 500)/3}px)`
          if(window.pageYOffset > window.innerHeight*2) fade = 0
          let style ={
              position: 'fixed',
              top: 0,
              paddingTop: 100, 
              width: '100%',
              backgroundColor: '#2ab7ca',
              height: '115vh',
              transition: 'transform 0ms, opacity 0ms', 
              transform: move,
              opacity: fade
          }
          return style;
      }
        return(
            <div style={getStyle()}>
                <h1 style={{ transition: 'transform', transitionDuration: '1500ms', position: 'fixed', left: '0%',transform: `${window.pageYOffset> 30? 'translate(130%, -100px)': 'translate(0px)'}`, paddingLeft: 60, fontSize: 'calc(1em + 10vw)', fontFamily: 'Karla, sans-serif', fontWeight: 'bold', color: '#f4f4f8', marginBlockEnd: 0}}>HELLO</h1>
                <h3 style={{ transition: 'opacity', transitionDuration: '4000ms', opacity: `${props.hello? 1 : 0}`, position: 'fixed', left: '25%', top: '40%',  paddingLeft: 60, fontSize: 'calc(1em + 1vw)', fontFamily: 'Karla, sans-serif', fontWeight: 'bold', color: '#f4f4f8', marginBlockEnd: 0}}>(again)</h3>
                <div style={{ transition: 'transform', transitionDuration: '1500ms',transform: `${window.pageYOffset > 30? 'translate(800px)': 'translate(0px)'}`,position: 'fixed', left: '50%',top: 0,backgroundColor: 'pink', height: '100%' ,width: '50%'}}></div>
                <div style={{ position: 'fixed', marginTop: '5vh', top: '10%', width: '40%', left: '-40%',
                                transition: 'transform', transitionDuration: '1500ms',transform: `${window.pageYOffset > 30? 'translate(225%)': 'translate(0px)'}`,
                                fontSize: '20px', textAlign: 'left', fontFamily:'Karla, sans-serif', color: '#f4f4f8' }}>
                    <div style={{marginTop: '20vh', padding: 30}}>
                        <Divider/>
                        <div style={{padding: 20}}>
                            {data.about.intro}
                            {data.about.currently}
                        </div>
                        <List >
                            <Divider/>
                            <div style={{paddingTop: 40}}>
                                { data.about.technologies.map((tech, index) =>
                                    <div style={{display: 'inline-block', margin: 4, marginLeft:10,marginRight:10, borderRadius:8,  padding: '4px 10px', textTransform: 'uppercase', border: '2px solid #f4f4f8', fontFamily: 'Karla, sans-serif', fontSize: 11}}>
                                        {tech}
                                    </div> 
                                )}
                            </div>
                        </List>
                    </div>
                </div>
                <div style={{ position: 'fixed', backgroundColor: '#2ab7ca', left: '-50%',
                                transition: 'transform', transitionDuration: '1500ms',
                                transform: `${window.pageYOffset > 30? 'translate(150%)': 'translate(0px)'}`}}>
                    <Image height={500} width={500} src={require('../static/images/abby.jpg') }/>
                </div>
            </div>
                
    );
  }
  export default About;