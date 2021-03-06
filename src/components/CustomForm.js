import React, {useState} from 'react'
import {makeStyles } from '@material-ui/core'

export  function CustomState(initialState, validateOnChange=false) { 

    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({})


    const handleChange =(e)=>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const resetForm =()=>{
        setValues(initialState)
        setErrors({})
    }
    return {
        values, 
        setValues,
        handleChange,
        errors,
        setErrors,
        resetForm
    }
}

// customform starts here

const useStyles = makeStyles(theme=>({
    root:{
       '& .MuiFormControl-root':{
           width:'80%',
           margin:theme.spacing(1)
       }
    }
}))

export function CustomForm(props) {
    
    const classes = useStyles()
    const {children, ...others} = props
    return (
       <form className={classes.root} autoComplete="off" {...others} >
           {props.children}
       </form>
    )
}
// customform ends here
