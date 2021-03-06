import React from 'react';
import './App.css';
import SideMenu from './components/SideMenu'
import Header from './components/Header'
// import PageHeader from './components/PageHeader'
import Employees from './Pages/Employees/Employees'
import { makeStyles, CssBaseline, ThemeProvider,createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette:{
    primary:{
      light:'#7986cb',
      main: '#3f51b5'
    },
    secondary:{
      light: '#ff4081',
      main:'#f50057'
    },
    background:{
      default:'#f4f5fd'
    },
    shape:{
      borderRadius:'12px'
    }
  }
})

const useStyles = makeStyles({
    main:{
      paddingLeft:'320px',
      width:'100%'
    }
  })

function App() {

  const classes = useStyles()
    return (
      <ThemeProvider theme={theme}>
          <SideMenu />
          <div className={classes.main}>
            <Header />
            <Employees />
          </div>
          <CssBaseline />
      </ThemeProvider>
  );
}

export default App;
