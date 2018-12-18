import React, { Component } from 'react';
import About from '../components/about';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Doodles from '../components/doodles';
import {Container,MenuColor, MenuWrapper, ContactWrapper, MenuSm, Menu,BallBox, MenuBall, MenuItem, NavNext, NavPrev} from './styles/index';
class Home extends Component {
    
    state = {
        technical: true, 
        viewJob: null,
        viewJobEffort: 0,
        helloAgain: false,
        animateIntro: false,
        lastScroll: 0,
        view: 0,
        showMenu: false,
        currentView: 0,
        youHereAlready: false,
        viewProject: true
    }
    handleViewProject = () => {
        this.setState(state => ({viewProject: !state.viewProject}))
    }
    handleCancelViewJob = () => {
        this.setState({viewJob: null});
    }
    updateComponent = () => {
        this.setState({animate: true})
    }
    handleShowMenu = (set) => {
        if(set !== undefined)
            this.setState({showMenu: set})
        else
            this.setState(state => ({showMenu: !state.showMenu}))
    }
    handleShowView = (view) => {
        if(view === this.state.currentView){
            this.setState({youHereAlready: true })
            setTimeout(() => this.setState({youHereAlready: false, showMenu: false}), 100)
        }
        else {
            this.setState({currentView: view, showMenu: false, viewJob: null})
        }
    }
  
    toggleTechnicalView = () => {
        this.setState(state => ({technical: !state.technical, viewJob: 0, viewJobEffort: 0}))
    }
    handleViewJob = (index) => {
        if(this.state.viewJob !== null)
            this.setState({viewJob: null, viewJobEffort: 0})
        else
            this.setState({viewJob: index, viewJobEffort: 0})
    }
    handleViewJobEffort = (index) => {
        this.setState({viewJobEffort: index})
    }
    render(){
        return (
            <Container>
                <MenuSm onClick={() => this.handleShowMenu()}><MenuColor/>=</MenuSm>
                <MenuWrapper onMouseEnter={() => this.handleShowMenu(true)} onMouseLeave={() =>this.handleShowMenu(false)}>
                    <Menu show={this.state.showMenu} >
                        <BallBox showMenu={this.state.showMenu} onClick={this.handleShowMenu}>
                            <MenuBall src={require("../static/images/circle.svg")}/>
                            <MenuBall src={require("../static/images/circlecolor.svg")}/>
                        </BallBox>

                        <MenuItem onClick={() => this.handleShowView(0)} >About</MenuItem>
                        <MenuItem onClick={() => this.handleShowView(1)}>Experience</MenuItem>
                        <MenuItem onClick={() => this.handleShowView(2)} >Projects</MenuItem>
                        <MenuItem onClick={() => this.handleShowView(3)}>Doodles</MenuItem>
                    </Menu>
                </MenuWrapper>
                <ContactWrapper>
                    <a href="https://www.linkedin.com/in/abigail-elizabeth-barron/">
                        <img src={require("../static/images/linkedIn.svg")}/>
                    </a>
                    <a href="https://www.instagram.com/frizzynormality/">
                        <img src={require("../static/images/instagram.svg")}/>
                    </a>
                </ContactWrapper>

                {this.state.currentView!==3&&!this.state.showMenu&&<NavNext onClick={()=> this.handleShowView(this.state.currentView + 1)}>></NavNext>}
                {this.state.currentView!==0&&!this.state.showMenu&&<NavPrev onClick={()=> this.handleShowView(this.state.currentView - 1)}>{'<'}</NavPrev>}

                {this.state.currentView=== 0&&<About showMenu={this.state.showMenu} here={this.state.youHereAlready} animateIntro={this.state.animateIntro}hello={this.state.helloAgain}/>}
                {this.state.currentView === 1&&<Experience showMenu={this.state.showMenu} here={this.state.youHereAlready}viewJob={this.state.viewJob} handleViewJob={this.handleViewJob} viewJobEffort={this.state.viewJobEffort}
                        handleViewJobEffort={this.handleViewJobEffort} handleCancelViewJob={this.handleCancelViewJob} tech={this.state.technical} toggleTechView={this.toggleTechnicalView}/>}
                {this.state.currentView ===2&& <Projects showMenu={this.state.showMenu} here={this.state.youHereAlready} viewProject={this.state.viewProject} toggleProjectView={this.handleViewProject}/>}
                {this.state.currentView ===3&& <Doodles showMenu={this.state.showMenu} here={this.state.youHereAlready}/>}
            </Container>
        );   
    }
}

export default Home;