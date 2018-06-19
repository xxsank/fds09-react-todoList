import React from 'react';
import {Redirect} from 'react-router-dom'

import TodoList from '../components/TodoList';
import Todoform from '../components/TodoForm';
import {TodoConsumer} from '../contexts/TodoContext';

export default class TodoContainer extends React.Component{
  render() {
    if(!localStorage.getItem('token')){
      return (
        <Redirect to="/login"/>
      )
    } else {
      return (
        <TodoConsumer>
          {
            value => (
              <div>
                <h1>할 일 목록</h1>
                <Todoform onCreate={value.createTodo}/>
                {value.loading ? (
                  <div>loading...</div>
                  ) : (
                <TodoList 
                todos={value.todos} 
                onTodoComplete={value.completeTodo}
                onTodoDelete={value.deleteTodo}
                onTodoBodyUpdate={value.updateTodoBody}
                />
                )}
              </div>
            )
          }
        </TodoConsumer>
      );
    }
  }
}