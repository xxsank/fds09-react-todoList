import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'

import TodoPage from './pages/TodoPage';
import LoginPage from './pages/LoginPage';

import {UserProvider} from './contexts/UserContext'
class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <UserProvider>
          <Route path="/login" component={LoginPage}/>
          <Route path="/todo" component={TodoPage}/>
          <Route exact path="/" component={Home} />
        </UserProvider>
      </BrowserRouter>
    )
  }
}

const Home = () => (
  localStorage.getItem('token') ? (<Redirect to="/todo"/>) : (<Redirect to="/login"/>)
)

export default App;

