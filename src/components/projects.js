import React from 'react';

  const Projects = props => {

    let getStyle = () => {
      let move = 'translate(0px)'
      let time = '0ms'
      if(window.pageYOffset > window.innerHeight*2) move = `translate(-${(window.pageYOffset-(window.innerHeight*2))/1.1}px, 0px)`

      let style ={
          position: 'fixed',
          top: '0%', 
          width: '100%',
          right: `-${window.outerWidth}px`,
          backgroundColor: 'pink',
          height: '100vh',
          transition: `transform ${time}`, 
          zIndex: 2,
           transform: move
      }
      return style;
  }
        return(
            <div style={getStyle()} >

            <h1 style={{ fontSize: '100px', fontFamily: 'Karla, sans-serif', fontWeight: 'bold', color: '#2ab7ca', marginBlockEnd: 0}}>Projects</h1>

            
            </div>
                 
    );
  }
  export default Projects;