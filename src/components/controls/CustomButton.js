import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    root:{
        margin:theme.spacing(0.5)
    },
    label:{
        textTransform:"none"
    }
}))

export default function Custombutton(props) {

    const classes = useStyles()
    const {text, size, color, variant, onClick, ...other} =props 

    return (
       <Button
            variant={variant || "contained"}
            size={size || "large"}
            color={color || "primary"} 
            onClick={onClick}
            {...other}
            classes={{root:classes.root, label:classes.label}}
        >{text}</Button>
    )
}
