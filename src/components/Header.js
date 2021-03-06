import React from 'react'
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';


const Header = () => {

    const useStyles = makeStyles({
        root:{
            backgroundColor:'#fff',
            transform:'translateZ(0)'
        },
        searchInput:{
            opacity:"0.6",
            fontSize:'0.8rem',
            padding:"0px 8px",
            '&:hover':{
                backgroundColor:'#f2f2f2'
            },
            '& .MuiSvgIcon-root':{
                marginRight:'8px'
            }
        }
    })

    const classes = useStyles() 
    return (
       <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item >
                        <InputBase 
                            placeholder="Search"
                            className={classes.searchInput}
                            startAdornment={<SearchIcon fontSize="small"/>}
                        />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item >
                        <IconButton>
                            <Badge badgeContent={5} color="primary">
                                <ChatIcon fontSize="small"/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={6} color="secondary">
                                <NotificationsNoneIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon fontSize="small"/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
       </AppBar>
    )
}

export default Header