import React from 'react'
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

export default function Customdatepicker(props) { 

    const {name, label, onChange, value} = props

    const convertToDefEventPara =(name, value) =>({
        target:{
            name:name, value
        }
    })

    return (
       <MuiPickersUtilsProvider utils={DateFnsUtils}>
           <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
                label={label}
                format="MM/dd/yyyy"
                name={name}
                value={value}
                onChange={date=>onChange(convertToDefEventPara(name, date))}
           />
       </MuiPickersUtilsProvider>
    )
}
