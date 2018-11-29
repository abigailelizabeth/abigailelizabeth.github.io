import React, { Component } from 'react';
import About from '../components/about';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Skills from '../components/skills'

class Home extends Component {
    
    state = {
        technical: true, 
        viewJob: 0,
        viewJobEffort: 0,
        helloAgain: false,
    }
    updateComponent = () => {
        this.setState({animate: true})

    }
    top = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
        setTimeout(()=>{this.setState({helloAgain: true}); setTimeout(()=> this.setState({helloAgain: false}), 2000)}, 2000)

    }
    componentDidMount(){
        document.body.style.height = (window.innerHeight * 7)+'px'  
        this.intervalID = setInterval(this.updateComponent, 5);
    }
    componentWillUnmount(){
        clearInterval(this.state.intervalID)
    }
    toggleTechnicalView = () => {
        this.setState(state => ({technical: !state.technical, viewJob: 0, viewJobEffort: 0}))
    }
    handleViewJob = (index) => {
        this.setState({viewJob: index, viewJobEffort: 0})
    }
    handleViewJobEffort = (index) => {
        this.setState({viewJobEffort: index})
    }
    render(){
        return (
            <div style={{position: 'relative',marginRight: '-2rem', top: 100}}>
                <About hello={this.state.helloAgain}/>
                <Experience viewJob={this.state.viewJob} handleViewJob={this.handleViewJob} viewJobEffort={this.state.viewJobEffort}
                        handleViewJobEffort={this.handleViewJobEffort} tech={this.state.technical} toggleTechView={this.toggleTechnicalView}/>
                    <Projects />
                    <Skills top={this.top} more={this.state.more}/>   
            </div>
                
                   
               
               


               
        );   
    }
}

export default Home;