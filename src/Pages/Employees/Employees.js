import React, {Fragment, useState, useEffect} from 'react'
import Employeeform from './EmployeeForm'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import PageHeader from '../../components/PageHeader'
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar } from '@material-ui/core';
import CustomTable from '../../components/controls/CustomTable';
import * as EmployeeServices from '../../services/EmployeeServices'
// import Controls from "../../components/controls/controls";
import CustomInput from '../../components/controls/CustomInput'
import { Search } from "@material-ui/icons";
import InputAdornment from '@material-ui/core/InputAdornment'
import Controls from '../../components/controls/controls'
import AddIcon from '@material-ui/icons/Add'
import CustomPopup from "../../components/controls/CustomPopup";

import Axios from 'axios'


const url = "https://tkl-api.herokuapp.com/api/ambassadors"

const useStyles = makeStyles(theme=>({
    pageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3),
    },
    searchInput:{
        width:'75%'
    }, 
    newButton:{
        position:'absolute',
        right :'10px'
    }
}))

// const TableHeadCells = [
//     {id:'fullName', label:'Employee Name' },
//     {id:'email', label:'Email Address' },
//     {id:'mobile', label:'Mobile Number' },
//     {id:'department', label:'Department' },
//     {id:'actions', label:'Actions'}
// ]

const TableHeadCells = [
    {id:'fullName', label:'Employee Name' },
    {id:'email', label:'Employee Email'},
    {id:'mobile', label:'Mobile' },
    {id:'gender', label:'Gender' },
    {id:'department', label:'Department' },
    {id:'actions', label:'Actions'}
]

const TableDetails = [
    {id:'1', name:'James Ibro', email:'james@mail.com', mobile:'09027837282', gender:'male', department:'HR' },
    {id:'2', name:'James James', email:'james@mail.com', mobile:'09027837282',gender:'male', department:'Cleaning' },
    {id:'3', name:'Victor Teeboy', email:'victor@mail.com', mobile:'09027837282',gender:'other', department:'Marketing' },
    {id:'4', name:'Noah James', email:'noah@mail.com', mobile:'09027837282',gender:'male', department:'Logistics' },
    {id:'5', name:'James Annoi', email:'annoi@mail.com', mobile:'09027837282',gender:'female', department:'HR' },
    {id:'6', name:'Smith Chris', email:'smith@mail.com', mobile:'09027837282',gender:'male', department:'Logistics' },
    {id:'7', name:'James Ibro', email:'james@mail.com', mobile:'09027837282',gender:'female', department:'Marketing' },  
]

export default function Employees(){

    const initialValues={
        name:'',
        address:'',
        email:'',
        phoneNumber:'',
        gender:'',
        location:'',
        data:[]
    }
    const classes = useStyles()
    const [ambassador, setAmbassador] = useState(initialValues)
    const [records, setRecords] = useState(EmployeeServices.getEmployees()) 
    const [filterFn, setFilterFn] = useState({ fn:items => {return items}})
    const [openPopup, setOpenPopup] = useState(false) 

    const{
        TableContainer,
        TableHeaders,
        TableContent,
        TblPagination,
        recordsAfterPaginationAndSorting
    } = CustomTable(records,
                    TableHeadCells, 
                    TableDetails,
                    filterFn,
                   
                    ) 

    const handleSearch = e =>{
        let target = e.target
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items
                else
                    return items.filter(x => x.name.toLowerCase().includes(target.value))
            }
        })
    }
    return (
        <Fragment>
            <PageHeader 
                title="New Employee"
                subTitle="Employees form with validations"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            /> 
            <Paper className={classes.pageContent}>
              <Toolbar>
                <CustomInput
                    label="Search Employees"
                    className={classes.searchInput}
                    InputProps={{
                        startAdornment:(
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        )   
                    }}
                    onChange={handleSearch}
                />
                <Controls.CustomButton
                    text="Add New"
                    variant="outlined"
                    startIcon={<AddIcon />}
                    className={classes.newButton}
                    onClick={()=>setOpenPopup(true)}
                />
              </Toolbar>
              <TableContainer>
                    <TableHeaders />
                    <TableContent />
                  <TableBody>
                        {

                            // records.map(item =>
                                
                            //     (   <TableRow key={item.id}>
                            //             <TableCell> {item.fullName} </TableCell>
                            //             <TableCell> {item.email} </TableCell>
                            //             <TableCell> {item.mobile} </TableCell>
                            //         </TableRow>)
                            //     )
                        }
                  </TableBody>
              </TableContainer>
              <TblPagination />
            </Paper>
            <CustomPopup
                title="Employee Form"
                openPopup ={openPopup}
                setOpenPopup={setOpenPopup}
            >
              <Employeeform />      
            </CustomPopup>
        </Fragment> 
    )
}

// export default Employees
