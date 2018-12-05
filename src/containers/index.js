import React, { Component } from 'react';
import About from '../components/about';
import Experience from '../components/experience';
import Projects from '../components/projects';
import {Container,MenuColor, MenuWrapper,MenuSm, Menu, MenuBall, MenuItem, Arrow, NavNext, NavPrev} from './styles/index';
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
        youHereAlready: false
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
                        
                        <MenuBall notProjects={this.state.currentView!==3? true: false}showMenu={this.state.showMenu} onClick={this.handleShowMenu}><Arrow showMenu={this.state.showMenu}>.</Arrow><Arrow>.</Arrow><Arrow>.</Arrow><Arrow>.</Arrow></MenuBall>
                        <MenuItem onClick={() => this.handleShowView(0)} >About</MenuItem>
                        <MenuItem onClick={() => this.handleShowView(1)}>Experience</MenuItem>
                        <MenuItem onClick={() => this.handleShowView(2)} >Projects</MenuItem>
                    </Menu>
                </MenuWrapper>
                {this.state.currentView!==2&&!this.state.showMenu&&<NavNext onClick={()=> this.handleShowView(this.state.currentView + 1)}>></NavNext>}
                {this.state.currentView!==0&&!this.state.showMenu&&<NavPrev onClick={()=> this.handleShowView(this.state.currentView - 1)}>{'<'}</NavPrev>}

                {this.state.currentView=== 0&&<About showMenu={this.state.showMenu} here={this.state.youHereAlready} animateIntro={this.state.animateIntro}hello={this.state.helloAgain}/>}
                {this.state.currentView === 1&&<Experience showMenu={this.state.showMenu} here={this.state.youHereAlready}viewJob={this.state.viewJob} handleViewJob={this.handleViewJob} viewJobEffort={this.state.viewJobEffort}
                        handleViewJobEffort={this.handleViewJobEffort} handleCancelViewJob={this.handleCancelViewJob} tech={this.state.technical} toggleTechView={this.toggleTechnicalView}/>}
                {this.state.currentView ===2&& <Projects showMenu={this.state.showMenu} here={this.state.youHereAlready} />}
                {/*<Skills top={this.top} more={this.state.more}/>     */}
            </Container>
                
        );   
    }
}

export default Home;