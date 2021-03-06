import React from 'react'
import { TextField } from '@material-ui/core'

export default function CustomInput (props){
    const {name, label, onChange, error=null, value} = props

    return(
        <TextField
            variant="outlined"
            label={label}
            value ={value}
            name={name}
            onChange={onChange}
            {...(error && {error:true, helperText:error})}
        />
    )
}