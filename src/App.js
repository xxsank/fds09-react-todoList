import React, { Component } from 'react';
import axios from 'axios';

import TodoList from './components/TodoList';
import Todoform from './components/TodoForm'

const todoAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

class App extends Component {
  state = {
    loading: false,
    todos: [],
  }

  async componentDidMount(){
    await this.fetchTodos();
  };

  fetchTodos = async () => {
    this.setState({
      loading: true
    })
    const res = await todoAPI.get('/todos');
    this.setState({
      todos: res.data,
      loading: false
    })
  }

  goToTodoPage = () => {
    this.setState({
      page: 'todolist'
    })
  }

  createTodo = async newTodoBody => {
    if (newTodoBody) {
      const newTodo = {
        body: newTodoBody,
        complete: false,
      };
      this.setState({
        loading: true
      })
      await todoAPI.post(`todos/`, newTodo);
      await this.fetchTodos();
    }
  }

  handleTodoItemBodyUpdate = async (id,body) => {
    this.setState({
      loading: true
    })
    await todoAPI.patch(`todos/${id}`,{
      body
    })
    await this.fetchTodos();
  }

  handleTodoItemComplete = async id => {
    this.setState({
      loading: true
    });
    await todoAPI.patch(`/todos/${id}`, {
      complete: true
    });
    await this.fetchTodos();
  }

  handleTodoItemDelete = async id => {
    this.setState({
      loading:true
    });
    await todoAPI.delete(`todos/${id}`);
    await this.fetchTodos();
  }

  render() {
    const {todos,loading} = this.state;
    return (
      <div>
          <h1>할 일 목록</h1>
          <Todoform onCreate={this.createTodo}/>
          {loading ? (
            <div>loading...</div>
            ) : (
          <TodoList 
          todos={todos} 
          handleTodoItemComplete={this.handleTodoItemComplete}
          handleTodoItemDelete={this.handleTodoItemDelete}
          handleTodoItemBodyUpdate={this.handleTodoItemBodyUpdate}
          />
          )}
      </div>
    );
  }
}


export default App;