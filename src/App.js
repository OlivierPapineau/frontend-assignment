import { AppBar, Toolbar, Typography, Icon } from '@mui/material';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Blogs from "./Blogs"
import Blog from "./Blog"

import './App.scss';

function App() {
  return (<>
    <AppBar position="static" component="header">
      <Toolbar className="header">
        <Icon>quiz</Icon>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Frontend developer test assignment
        </Typography>
      </Toolbar>
    </AppBar>
    <main className="main">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Blogs />
          </Route>
          <Route path="/:id">
            <Blog />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  </>);
}

export default App;
