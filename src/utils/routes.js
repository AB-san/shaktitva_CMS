import React from 'react'

import {Route,BrowserRouter} from 'react-router-dom';
import { Drawer } from '../components/index';
import CssBaseline from '@material-ui/core/CssBaseline';

import {
    Story,
    NGO,
    Legal,
    StoryDetailed
  } from '../pages/index';
  
const Routes = () => {
    return (
        <BrowserRouter>
            <CssBaseline />
            <Drawer />
            <Route path ="/Story" exact>
                <Story />
            </Route>
            
            <Route path ="/NGO">
                <NGO />
            </Route>
            
            <Route path ="/Legal">
                <Legal />
            </Route>
            <Route path ="/Story/:StoryID" exact>
                <StoryDetailed />
            </Route>
        </BrowserRouter>
    )
}

export default Routes;