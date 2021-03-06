import React, {Fragment} from 'react'
import Employeeform from './EmployeeForm'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import PageHeader from '../../components/PageHeader'
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    pageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3),
    }
}))
const Employees = () => {
    const classes =useStyles()
    return (
        <Fragment>
            <PageHeader 
                title="New Employee"
                subTitle="Employees form with validations"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            /> 
            <Paper className={classes.pageContent}>
              <Employeeform />   
            </Paper>
            
        </Fragment> 
    )
}

export default Employees
