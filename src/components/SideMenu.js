import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

function SideMenu(props) {
    const useStyles = makeStyles({
        sideMenu:{
            display:'grid',
            flexDirection:'column',
            position:'absolute',
            left:0,
            width: '320px',
            height:'100%',
            backgroundColor:'#3f51b5'
        }
    }) 
    const classes = useStyles()
    return (
        <div className={classes.sideMenu}>
            <h3>Side Menu here</h3>
        </div>
    )
}

export default SideMenu
