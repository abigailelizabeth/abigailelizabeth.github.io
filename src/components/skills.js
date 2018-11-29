import React from 'react';
import {Button} from '@material-ui/core'
const Skills = props => {
    return (
        <div style={{position: 'fixed', top: 0, backgroundColor: 'pink', height: 'auto', zIndex: -1, left: 0, right: 0}}>
            <h1 style={{fontSize: '145px', fontFamily: 'Karla, sans-serif', fontWeight: 'bold', color: 'black'}}>Chek Ah Mi SKILLZ</h1>
            <Button onClick={() => props.top()}>to the top</Button>
            <Button onClick={() => props.more()}>More About me</Button>
        </div>
    )
}

export default Skills