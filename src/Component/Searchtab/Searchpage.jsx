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
import Userdetail from './Userdetail';

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
          
          <div className={ styles["header-meanu-bar"]}>
            
            <div className={ styles["header-tag"]}>
                <p>Search</p>
            </div>

            <div className={ styles["header-searchBar-conatiner"]}>
              
              <div className={ styles["header-search-bar"]}>
                <InputWithIcon />
              </div>

              <div className={styles["header-search-result-count"]}>

                <div>
                  <span class="material-icons-outlined">track_changes</span>
                </div>
                <div>
                  <p> {23+Math.round(Math.random() * 100)} search results </p>
                </div>
                 
              </div>

              <div className={styles["header-homepage-operaingbtns"]}>
                
                <button onClick={handleDrawerOpen}>
                  <svg _ngcontent-clientapp-c261="" style={{width:"14%"}} aria-hidden="true" focusable="false" data-prefix="far" data-icon="filter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M463.952 0H48.057C5.419 0-16.094 51.731 14.116 81.941L176 243.882V416c0 15.108 7.113 29.335 19.2 40l64 47.066c31.273 21.855 76.8 1.538 76.8-38.4V243.882L497.893 81.941C528.042 51.792 506.675 0 463.952 0zM288 224v240l-64-48V224L48 48h416L288 224z"></path></svg> <p>..Filters</p>
                </button>

                <button>
                  <svg _ngcontent-clientapp-c261="" style={{width:"14%"}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="th-large" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"></path></svg>
                </button>

                <button>
                    <svg _ngcontent-clientapp-c261="" style={{width:"14%"}}  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="th-list" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M149.333 216v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zM125.333 32H24C10.745 32 0 42.745 0 56v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zm80 448H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm-24-424v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24zm24 264H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24z"></path></svg>
                </button>

              </div>

            </div>

          </div>
                
                  
        </Typography>
        <Typography paragraph>

          <div className={styles['mapping-section']}>

             
            
            <Userdetail />
            <Userdetail />
            <Userdetail />
            <Userdetail />
            <Userdetail />
            <Userdetail />
            <Userdetail />
            <Userdetail />
            <Userdetail />
            <Userdetail />
            <Userdetail />
            <Userdetail />
            <Userdetail />
            <Userdetail />
            <Userdetail />
            <Userdetail />
            <Userdetail />
            <Userdetail />
            <Userdetail />
            <Userdetail />
            

          </div>

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
