import './App.css';
import styled from 'styled-components';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from "./redux/configureStore";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Detail from "./pages/Detail";
import PostList from "./pages/PostList";
import PostWrite from "./pages/PostWrite"
import Postedit from './pages/PostEdit';

function App() {
  return (
    <React.Fragment>
      <ContentWrap>  
        <ConnectedRouter  history={history}>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/detail/:id" exact component={Detail} />
          <Route path="/postWrite" exact component={PostWrite} />
          <Route path="/postedit/:id" exact component={Postedit} />
        </ConnectedRouter>
      </ContentWrap>
    </React.Fragment>
  );
}

const ContentWrap = styled.div`
  margin: 0 auto;
  // padding: %;
  max-width: 1100px;
  box-sizing: border-box;
`


export default App;
