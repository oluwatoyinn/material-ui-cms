 import React from 'react'
import { useState,useEffect } from 'react'
import { Grid,TextField, makeStyles,FormControl, FormLabel, RadioGroup } from '@material-ui/core'
import {CustomState, CustomForm} from '../../components/CustomForm'
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CustomInput from '../../components/controls/CustomInput';
import CustomSelect from '../../components/controls/CustomSelect';
import * as employeeService from '../../services/EmployeeServices'
import Controls from '../../components/controls/controls'

const initialState ={
    id:0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'male', 
    departmentId:'',
    employDate:new Date(),
    isConfirmed:false
}


const Employeeform = () => {

    const validate = (fieldValues = values) =>{
        let valid ={...errors}
        if('fullName' in fieldValues)
        // valid.fullName = values.fullName ? "" : "Name is required"
        valid.fullName = fieldValues.fullName ? "" : "Name is required"
        if('email' in fieldValues)
        valid.email = (/$^|.+@.+..+/).test(fieldValues.email)? "": "Invalid email"
        if('mobile' in fieldValues)
        valid.mobile = fieldValues.mobile.length > 9 ? "":"Minimum 10 numbers required"
        if('departmentId' in fieldValues)
        valid.departmentId = fieldValues.departmentId.length > 0 ? "":"Department is a required fields"
        setErrors({
            ...valid
        })

        if(fieldValues ==values)
        return Object.values(valid).every(x => x =="")
    }
    
    const {values, 
        setValues, 
        handleChange, 
        errors, 
        setErrors, 
        resetForm} = CustomState(initialState, true, validate)

    const handleSubmit = (e)=>{
        e.preventDefault()
            if(validate()){ 
                employeeService.insertEmployee(values)
                resetForm()
            window.alert("test") 
        }
    }
     return (
         <div>
            <CustomForm onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item  xs={6}>
                        <CustomInput
                            name="fullName"
                            label="Full Name"
                            value={values.fullName}
                            onChange={handleChange}
                            error={errors.fullName}
                        /> 
                        <CustomInput 
                            label="Email"
                            name="email"
                            value ={values.email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                         <CustomInput 
                            label="City"
                            name="city"
                            value ={values.city}
                            onChange={handleChange}
                        />
                         <CustomInput 
                            label="Mobile"
                            name="mobile"
                            value ={values.mobile}
                            onChange={handleChange}
                            error={errors.mobile}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl >
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup row 
                            name="gender"
                            value={values.gender}
                            onChange={handleChange}>
                                <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                                <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                                <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                            </RadioGroup>
                        </FormControl>
                        <CustomSelect 
                            name="departmentId"
                            label="Department"
                            value={values.departmentId}
                            onChange={handleChange}
                            options={employeeService.getDepartmentCollection()}
                            error={errors.departmentId}
                        />
                        <Controls.CustomDatePicker
                               name="employDate"
                               label="Employed Date"
                               value={values.employDate}
                               onChange={handleChange}                       
                         />
                        <Controls.CustomCheckBox
                            name="isConfirmed"
                            label="Employee Confirmed "
                            value={values.isConfirmed}
                            onChange={handleChange}
                        />
                       <div>
                        <Controls.CustomButton
                                type="submit"
                                text="Submit" 
                            />
                        <Controls.CustomButton
                            type="submit"
                            text="Reset" 
                            color="default"
                            onClick={resetForm}
                        />
                       </div>
                    </Grid>
                </Grid>
            </CustomForm>
         </div>
     )
 }

 export default Employeeform
 