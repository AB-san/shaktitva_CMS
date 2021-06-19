import React from 'react'

import {Route,BrowserRouter} from 'react-router-dom';
import { Drawer } from '../components/index';
import CssBaseline from '@material-ui/core/CssBaseline';

import {
    Story,
    StoryDetailed,
    NGO,
    NgoDetailed,
    Legal,
    Users,
    MailingList,
    Config,
  } from '../pages/index';
  
const Routes = () => {
    return (
        <BrowserRouter>
            <CssBaseline />
            <Drawer />
            <Route path ="/story" exact>
                <Story />
            </Route>
            <Route path ="/story/:StoryID">
                <StoryDetailed />
            </Route>
            <Route path ="/ngo" exact>
                <NGO />
            </Route>
            <Route path ="/ngo/:NgoID">
                <NgoDetailed />
            </Route>
            <Route path ="/legal">
                <Legal />
            </Route>
            <Route path ="/users">
                <Users />
            </Route>
            <Route path ="/mailinglist">
                <MailingList />
            </Route>
            <Route path ="/config">
                <Users />
            </Route>
        </BrowserRouter>
    )
}

export default Routes;