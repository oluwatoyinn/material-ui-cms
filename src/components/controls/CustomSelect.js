import React from 'react'
import { FormControl, Select, MenuItem,InputLabel, FormHelperText } from '@material-ui/core'

export default function CustomSelect(props) {
    
    const {name, label, value, onChange, error=null, options }=props

    return (
       <FormControl variant="outlined"
            {...(error && {error:true})}>
           <InputLabel >{label}</InputLabel>
           <Select
                label={label}
                value ={value}
                name={name}
                onChange={onChange}>
                    <MenuItem >None</MenuItem>
                    { 
                       options.map(
                            item =>(<MenuItem key={item.id} value={item.id}> {item.title} </MenuItem>)
                            )
                    }
           </Select>
                {error && <FormHelperText>{error}</FormHelperText>}
       </FormControl>
    )
}
