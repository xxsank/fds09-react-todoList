import React from 'react';

import TodoPage from './pages/TodoPage';
import LoginPage from './pages/LoginPage';

import {PageProvider, PageConsumer} from './contexts/PageContext';
import {UserProvider} from './contexts/UserContext'
import {TodoProvider} from './contexts/TodoContext'
export default class App extends React.Component{
  render(){
    return(
      <PageProvider>
        <UserProvider>
          <PageConsumer>
            {value => value.page === 'login' ? (<LoginPage/>) : (<TodoProvider><TodoPage/></TodoProvider>)}
          </PageConsumer>
        </UserProvider>
      </PageProvider>
    )
  }
}