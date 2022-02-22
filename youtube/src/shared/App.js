import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

import Main from '../pages/Main';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Write from '../pages/Write';
import Detail from '../pages/Detail';
import Header from '../components/Header';
import Search from '../pages/Search';

function App() {
  return (
    <>
      <Header></Header>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/write" exact component={Write}></Route>
        <Route path="/write/:postId" exact component={Write}></Route>
        <Route path="/search" exact component={Search}></Route>
        <Route path="/api/posts/:postId" exact component={Detail}></Route>

      </ConnectedRouter>
    </>
  );
}

export default App;
