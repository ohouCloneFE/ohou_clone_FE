import './App.css';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from "./redux/configureStore";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Detail from "./pages/Detail";
import PostList from "./pages/PostList";
import PostWrite from "./pages/PostWrite"

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={PostList} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/detail" exact component={Detail} />
        <Route path="/postWrite" exact component={PostWrite} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
