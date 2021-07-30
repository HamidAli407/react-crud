import React from 'react';
import useStyles from './AppStyle';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import InfoIcon from '@material-ui/icons/Info';
import Routing from '../../routes/routing';
import {NavLink, withRouter} from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';

function App(props: any)  {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img className={classes.appLogo} src={"/mars-logo-react.png"} alt="Logo" />

        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
          <ListItem button component={NavLink} to={`/crud`}>
                <ListItemIcon style={{color:'#6b778c'}}><DashboardIcon/></ListItemIcon>
                <ListItemText primary="Dashboard"/>
            </ListItem>

            <ListItem button component={NavLink} to={`/about-us`}>
                <ListItemIcon style={{color:'#6b778c'}}><InfoIcon/></ListItemIcon>
                <ListItemText primary="About Us"/>
            </ListItem>
          </List>
          <Divider />
          <List>
          <ListItem button component={NavLink} to={`/tasks`}>
                <ListItemIcon style={{color:'#6b778c'}}><AssignmentIcon/></ListItemIcon>
                <ListItemText primary="Tasks"/>
            </ListItem>
          </List>
          <List>
          <ListItem button component={NavLink} to={`/`}>
                <ListItemIcon style={{color:'#6b778c'}}><AssignmentIcon/></ListItemIcon>
                <ListItemText primary="Login"/>
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Routing />
        {/* <Crud />
        <AboutUs /> */}
      </main>
    </div>
  );
}

export default withRouter(App);