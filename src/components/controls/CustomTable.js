import React, {useState} from 'react'
import { Table,TablePagination , TableHead,makeStyles, TableRow,StyledTableCell, TableCell, TableBody, Tab } from '@material-ui/core'
import Controls from '../../components/controls/controls'
import CloseIcon from "@material-ui/icons/Close";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";


const useStyles = makeStyles(theme=>({
    table:{
        marginTop:theme.spacing(3),
        '& thead th':{
            fontWeight:'600',
            color:theme.palette.primary.main,
            backgroundColor:theme.palette.primary.light
        },
        '& tbody td':{
            fontWeight:'300'
        },
        '& tbody tr:hover':{
            backgroundColor:'#fffbf2',
            cursor:'pointer'
        }
    },
    secondary:{
        backgroundColor:theme.palette.secondary.light,
        '& .MuiButton-label':{
            color:theme.palette.secondary.main
        }
    },
    primary:{
        backgroundColor:theme.palette.primary.light,
        '& .MuiButton-label': {
            color:theme.palette.primary.main
        }
    }
})) 

export default function CustomTable(records, TableHeadCells,TableDetails, filterFn){
    
    const classes = useStyles()
    const pages = [5,10,25]
    const [page, setPage] =  useState(0)
    const [rowsPerPage,setRowsPerPage] = useState(pages[page])
    // const [order, setOrder] = useState()


    const TableContainer = props =>(
        <Table className={classes.table}>
            {props.children}
        </Table>
    )

    const TableHeaders  =  props =>{
        return(
            <TableHead>
                    <TableRow>
                         {
                            TableHeadCells.map((header)=>( 
                                <TableCell key={header.id} >
                                    {header.label}
                                </TableCell>
                            ))
                          }
                    </TableRow>
            </TableHead>
        )
    }

    const TableContent = props=>{
        return(
            <TableBody>
                {
                    // TableDetails.map((detail)=>(
                        recordsAfterPaginationAndSorting().map((detail)=>(
                        <TableRow key={detail.id}>
                            <TableCell> {detail.name} </TableCell>
                            <TableCell> {detail.email} </TableCell>
                            <TableCell> {detail.mobile} </TableCell>
                            <TableCell> {detail.gender} </TableCell>
                            <TableCell> {detail.department} </TableCell>
                             <TableCell>
                                 <Controls.ActionButton >
                                    <EditOutlinedIcon fontSize="small" />
                                 </Controls.ActionButton>
                                 <Controls.ActionButton >
                                    <CloseIcon fontSize="small" />
                                 </Controls.ActionButton>
                             </TableCell>
                             
                        </TableRow>
                    ))
                }
            </TableBody>
        )
    }

    const handlePageChange =(event, newPage) =>{
        setPage(newPage)
    }
    const handleChangeRowsPerPage= event =>{
        setRowsPerPage(parseInt(event.target.value,10))
        setPage(0)
    }

    const TblPagination = () =>(
        <TablePagination 
            component="div"
            page ={page}
            rowsPerPageOptions ={pages}
            rowsPerPage = {rowsPerPage}
            count={TableDetails.length}
            onChangePage={handlePageChange}
            onChangeRowsPerPage ={handleChangeRowsPerPage}
        />
    )

    const recordsAfterPaginationAndSorting =()=>{
        // return TableDetails.slice(page*rowsPerPage,(page+1)*rowsPerPage )
        return filterFn.fn(TableDetails).slice(page*rowsPerPage,(page+1)*rowsPerPage )
        
    }

    return{
       TableContainer,
       TableHeaders,
       TableContent,
       TblPagination,
       recordsAfterPaginationAndSorting
    }
}