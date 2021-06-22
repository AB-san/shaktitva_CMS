import React from 'react';
import clsx from 'clsx';

//Material UI imports
import {
  makeStyles, 
  useTheme,
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  ListItemIcon } from '@material-ui/core';


import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HelpIcon from '@material-ui/icons/Help';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingsIcon from '@material-ui/icons/Settings';
import PeopleIcon from '@material-ui/icons/People';
import MailIcon from '@material-ui/icons/Mail';
import GavelOutlinedIcon from '@material-ui/icons/GavelOutlined';
import CategoryIcon from '@material-ui/icons/Category';


import {Link} from 'react-router-dom';

import './styles.css'

// custom components
import {LanguageToggle} from '../index'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#50b8ae',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    backgroundColor: '#50b8ae',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: '#50b8ae',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  LanguageToggle:{
    display: "inline",
    position: "absolute",
    left: "0px"
  }
}));

export default function MiniDrawer() {
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
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap display='inline'>
              Shaktitva CMS
            </Typography>
          </Toolbar>
          <LanguageToggle className={LanguageToggle} 
            />
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
          <ListItem button key = 'SignIn' component={Link} to="/signin">
              <ListItemIcon>
              <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary = 'Sign In' />
            </ListItem>
            <ListItem button key = 'SignUp' component={Link} to="/signup">
              <ListItemIcon>
              <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary = 'Sign Up' />
            </ListItem>
            <ListItem button key = 'Story' component={Link} to="/story">
              <ListItemIcon>
                <FeaturedPlayListIcon/>
              </ListItemIcon>
              <ListItemText primary = 'Story' />
            </ListItem>
            <ListItem button key = 'Legal' component={Link} to="/legal">
              <ListItemIcon>
                <GavelOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary = 'Legal' />
            </ListItem>
            <ListItem button key = 'NGO' component={Link} to="/ngo">
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary = 'NGO' />
            </ListItem>
            <ListItem button key = 'Users' component={Link} to="/users">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary = 'Users' />
            </ListItem>
            <ListItem button key = 'Mailing_List' component={Link} to="/mailinglist">
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary = 'Mailing List' />
            </ListItem>
            <ListItem button key = 'Configuration' component={Link} to="/config">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary = 'Configuration' />
            </ListItem>
            <ListItem button key = 'Category' component={Link} to="/category">
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary = 'Category' />
            </ListItem>
            <ListItem button key = 'State' component={Link} to="/state">
              <ListItemIcon>
              <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary = 'State' />
            </ListItem>
            <ListItem button key = 'DefaultProfileImage' component={Link} to="/defaultprofile">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary = 'DefaultProfileImage' />
            </ListItem>
          </List>
        </Drawer>
      </div>
      
  );
}
