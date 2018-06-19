import React from 'react';

import TodoPage from './pages/TodoPage';
import LoginPage from './pages/LoginPage';

import {PageProvider, PageConsumer} from './contexts/PageContext';
import {UserProvider} from './contexts/UserContext'
import OnMount from './components/OnMount'
export default class App extends React.Component{
  render(){
    return(
      <PageProvider>
        <UserProvider>
          <PageConsumer>
            {value => value.page === 'login' ? (<LoginPage/>) : (<TodoPage/>)}
          </PageConsumer>
        </UserProvider>
      </PageProvider>
    )
  }
}