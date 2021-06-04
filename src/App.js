import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom';
import './App.css';
import Drawer from './components/drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import StarWars from './pages/StarWars'
import Legal from './pages/Legal'
import NGO from './pages/NGO'
import Story from './pages/Story'
function App() {
  return (
      <BrowserRouter>
      <CssBaseline />
      <Drawer />
      <Route path ="/Story">
      <Story />
      </Route>
      <Route path ="/NGO">
      <NGO />
      </Route>
      <Route path ="/Legal">
      <Legal />
      </Route>
      <Route path ="/SW">
      <StarWars />
      </Route>
    </BrowserRouter>
  );
}

export default App;
