import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import InputWithIcon from './Fancysearch';
import ControlledOpenSelect from './Dropdown';
import CheckboxLabels from "./Checkbox"

import { Link } from 'react-router-dom';

import styles from './Searchpage.module.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));


export default function PersistentDrawerRight(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar style={{ backgroundColor: 'white' }}>
          <Typography variant='h6' noWrap className={classes.title}>
            <div className={styles['search-navbar']}>
              <span
                class='material-icons-outlined'
                style={{ color: 'rgb(97,136,255)' }}>
                explore
              </span>

              <Link to='/'>
                <div className={styles['search-photo']}>
                  <img
                    src=' https://ucarecdn.com/224a0727-0e6b-4f9f-b324-427c3f58bf5b/'
                    alt='logo'
                  />
                </div>
              </Link>

              <div style={{ color: 'rgb(97,136,255)' }}>
                <span class='material-icons-outlined'>search</span>
              </div>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
        <div className={classes.drawerHeader} />
        <Typography paragraph>
          
                <button onClick={handleDrawerOpen}>alpha</button>
                  
        </Typography>
        <Typography paragraph>
          <div className={styles['mapping-section']}></div>
        </Typography>
      </main>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='right'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          
          <div className={ styles["drawer"]}>

            <p style={{ fontSize: 'calc(1.0rem + 1.8vw)' }}>Filters</p>

            <div className={ styles["inputs-box"]}>
              <ControlledOpenSelect filter1={"Cause type"} first={"Organisations"} secound={"Fundraisers"} third={"Teams"}/>
              <ControlledOpenSelect filter1={"Location"} />   
              <ControlledOpenSelect filter1={"Category"} first={"All"} secound={"Medical/economical"} third={"Enviroment"} />
            </div>
            
          </div>
         
        </List>
        <Divider />
        <List>

          <div className={ styles["drawer-checkbox"]}>
              
            <CheckboxLabels checkboxhead={"Covid-19"} />
            <CheckboxLabels checkboxhead={"Donations"} />
            <CheckboxLabels checkboxhead={"Volunteerings"} />
            
          </div>


        </List>
      </Drawer>
    </div>
  );
}
