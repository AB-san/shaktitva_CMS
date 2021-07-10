import React from 'react'

import { Route, HashRouter } from 'react-router-dom';
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
    UserDetailed,
    MailingList,
    Category,
    States,
    Config,
    DefaultProfilePic,
} from '../pages/index';

// import { routes, pages } from './constants'


const Routes = () => {
    return (
        <HashRouter>
            <CssBaseline />
            <Drawer />
            {/* {pages.map(page => { routes.map(route => { <Route path={route}> <page/> </Route> }) })} */}

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
            <Route path ="/users/:UserID">
                <UserDetailed />
            </Route>
            <Route path ="/mailinglist">
                <MailingList />
            </Route>
            <Route path ="/config">
                <Config />
            </Route>
            <Route path ="/category">
                <Category />
            </Route>
            <Route path ="/states">
                <States />
            </Route>
            <Route path ="/defaultprofilepic">
                <DefaultProfilePic /> 
            </Route>
        </HashRouter>
    ) 
}

export default Routes;