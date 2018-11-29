import React from 'react';
import { Fade, Button, Typography, Grid, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import * as data from '../data/work';

 
  const Experience = props => {
    let getStyle = () => {
        let move = 'translate(0px)'
        let time = '0ms'
        if(window.pageYOffset > window.innerHeight*2) {
            move = `translate(-${((window.pageYOffset)-(window.innerHeight*2))/2}px, -${window.innerHeight}px)`
        }
        else if(window.pageYOffset > 500) move = `translate(0px, -${(window.pageYOffset - 500)/1.4}px)`

        let style ={
            position: 'fixed',
           top: '100%', 
            width: '100%',
            backgroundColor: '#f4f4f8',
            height: '100vh',
            transition: `transform ${time}`, 
            paddingTop: 100,
            paddingInlineStart: 50,
            transform: move
        }
        return style;
    }
      const {viewJob, viewJobEffort} = props
        return(
            <div style={getStyle()}>
                <span style={{ display: 'block',width: '50%', borderBottom: '2px solid #2ab7ca', textAlign:'left', fontSize: '90px', fontWeight: 900,fontFamily: 'Gilroy, sans-serif', color: '#2ab7ca', marginBlockEnd: 0, marginBlockStart: 0}}>Work</span>
                <Grid container justify="space-evenly" spacing={0} style={{marginBlockStart: 20}} >
                    <Grid item xs={4} style={{ height: 800}}>
                        { props.tech && <Fade in={props.tech}>
                        <List >
                            { data.data.technical.map((job, index) => (
                                <ListItem selected={index === viewJob? true : false}button onClick={()=> props.handleViewJob(index)}>
                                    <ListItemText primary={<Typography variant="h8" style={{fontFamily: 'Karla, sans-serif', fontWeight: 'bold'}}>
                                                {job.role}</Typography>} secondary={job.year}/>
                                </ListItem>
                                ))
                            }
                            <Button onClick={()=> props.toggleTechView()}>Less Technical >></Button>
                        </List>
                        </Fade>
                        }
                        { !props.tech&&<Fade in={!props.tech}>
                        <List >
                            {
                            data.data.nonTechnical.map((job, index)=>(
                                <ListItem button onClick={()=> props.handleViewJob(index)}>
                                    <ListItemText primary={<Typography variant="h8" style={{fontFamily: 'Karla, sans-serif', fontWeight: 'bold'}}>
                                                {job.role}</Typography>} secondary={job.year}/>
                                </ListItem>
                            ))
                            }
                            <Button onClick={()=> props.toggleTechView()}> Back </Button>
                        </List>
                        </Fade>
                        }
                    </Grid>

                    <Grid item xs={6} >

                    <div style={{ paddingInlineStart: 40}}>
                    <br/>
                    <div style={{ width: 500, textAlign: 'left', fontFamily:'Karla, sans-serif' }}>
                    <Typography style={{fontFamily: 'Karla, sans-serif', fontWeight: 'bold'}}>
                        {props.tech? data.data.technical[viewJob].description.company : data.data.nonTechnical[viewJob].description.company}
                    </Typography>
    
                    <br/>
                    <Typography style={{fontFamily: 'Karla, sans-serif'}}>
                        {props.tech? data.data.technical[viewJob].description.summary : data.data.nonTechnical[viewJob].description.summary }
                    </Typography>
                    <br/>
                    <Typography style={{fontFamily: 'Karla, sans-serif'}}>
                        {props.tech? data.data.technical[viewJob].description.efforts.intro : data.data.nonTechnical[viewJob].description.efforts.intro }
                    </Typography>
                            <List style={{display: 'flex', flexDirection: 'horizontal'}} >
                                {
                                    (props.tech ? data.data.technical[viewJob].description.efforts.efforts : data.data.nonTechnical[viewJob].description.efforts.efforts).map((effort, index )=> 
                                        <ListItem selected={index === viewJobEffort? true : false}button onClick={()=> props.handleViewJobEffort(index)}>
                                            <ListItemText primary={<Typography style={{fontFamily: 'Karla, sans-serif'}}>
                                                {effort.title}</Typography>}/>
                                        </ListItem>
                                    )   
                                }
                                
                            </List>
                            <Divider/>
                            <div style={{display: 'block', paddingInlineStart: 20, paddingBlockStart: 20}}>
                            <Typography style={{fontFamily: 'Karla, sans-serif'}}>
                                {props.tech ?  data.data.technical[viewJob].description.efforts.efforts[viewJobEffort].description : data.data.nonTechnical[viewJob].description.efforts.efforts[viewJobEffort].description }
                            </Typography>
                            <br/>

                            <Divider />
                            <div style={{ marginBlockStart: 20,marginBlockEnd: 20 }}>
                            { (props.tech ? data.data.technical[viewJob].description.efforts.efforts[viewJobEffort].skills
                              : data.data.nonTechnical[viewJob].description.efforts.efforts[viewJobEffort].skills).map((skill, index)=>
                                    <div style={{display: 'inline-block', margin: 2, marginLeft:10,marginRight:10, borderRadius:8,  padding: '4px 10px', textTransform: 'uppercase', border: '2px solid #2ab7ca', fontFamily: 'Karla, sans-serif', fontSize: 11}}>
                                        {skill}</div> 
                                )
                            }
                            </div>
                            </div>
                            
                    </div>
                    </div>
                    </Grid>
                </Grid>   
    </div>
                
    );
  }
  export default Experience;