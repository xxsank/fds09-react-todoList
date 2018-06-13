import React from 'react';

import TodoPage from './pages/TodoPage';
import LoginPage from './pages/LoginPage';

import {PageProvider, PageConsumer} from './contexts/PageContext';
import {UserProvider} from './contexts/UserContext'
export default class App extends React.Component{
  render(){
    return(
      <PageProvider>
        <PageConsumer>
          {value => (
            <UserProvider onLogin={value.goToTodoPage}>
              {value.page === 'login' ? (<LoginPage/>) : (<TodoPage/>)}
            </UserProvider>
          )}
        </PageConsumer>
      </PageProvider>
    )
  }
}