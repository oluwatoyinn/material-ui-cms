import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core'
import Controls from "../controls/controls";
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles(theme=>({
    dialogWrapper:{
        '& .MuiDialog-paper':{
            padding:theme.spacing(2),
            position:'absolute',
            top:theme.spacing(5)
        }
    },
    dialogTitle:{
        paddingRight:'0px'
    },
    secondary:{
        backgroundColor:theme.palette.secondary.light,
        '& .MuiButton-label':{
            color:theme.palette.secondary.main
        }
    },
    
}))

export default function CustomPopup(props) {

    const classes = useStyles()
    const {title, children, openPopup, setOpenPopup} = props

    return (
       <Dialog open={openPopup} maxWidth="md" className={classes.dialogWrapper}>
           <DialogTitle className={classes.dialogTitle}>
               <div style={{display:"flex"}}>
                    <Typography variant="h6" component="div" style={{flexGrow:1}}>
                        {title}
                    </Typography>
                    <Controls.ActionButton 
                       className={classes.secondary}
                        onClick={() =>{setOpenPopup(false)}}
                    >
                        <CloseIcon />
                    </Controls.ActionButton>
               </div>
           </DialogTitle>
           <DialogContent dividers>
                {children} 
           </DialogContent>
       </Dialog>
    )
}
