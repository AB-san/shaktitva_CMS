import React from 'react'

import {Route,HashRouter} from 'react-router-dom';
import { Drawer } from '../components/index';
import CssBaseline from '@material-ui/core/CssBaseline';

import {
    SignUp,
    SignIn,
    Story,
    StoryDetailed,
    NGO,
    NgoDetailed,
    Legal,
    LegalLaw,
    LegalMisuse,
    LegalExample,
    Users,
    MailingList,
    Config,
    Category,
    State,
  } from '../pages/index';
  
const Routes = () => {
    return (
        <HashRouter>
            <CssBaseline />
            <Drawer />
            <Route path ="/signup">
                <SignUp />
            </Route>
            <Route path ="/signin">
                <SignIn />
            </Route>
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
            <Route path ="/legal" exact>
                <Legal />
            </Route>
            <Route path ="/legal/:LegalID">
                <LegalLaw />
            </Route>
            <Route path ="/legal/misuse/:LegalID">
                <LegalMisuse />
            </Route>
            <Route path ="/legal/example/:LegalID">
                <LegalExample />
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
            <Route path ="/category">
                <Category />
            </Route>
            <Route path ="/states">
                <State />
            </Route>
            <Route path ="/defaultprofileimg">
                <Users />
            </Route>
        </HashRouter>
    )
}

export default Routes;