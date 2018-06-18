import React from 'react';

import todoAPI from '../todoAPI';

const {Provider,Consumer} = React.createContext();

class TodoProvider extends React.Component{
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

  updateTodoBody = async (id,body) => {
    this.setState({
      loading: true
    })
    await todoAPI.patch(`todos/${id}`,{
      body
    })
    await this.fetchTodos();
  }

  completeTodo = async id => {
    this.setState({
      loading: true
    });
    await todoAPI.patch(`/todos/${id}`, {
      complete: true
    });
    await this.fetchTodos();
  }

  deleteTodo = async id => {
    this.setState({
      loading:true
    });
    await todoAPI.delete(`todos/${id}`);
    await this.fetchTodos();
  }

  render(){
    const value = {
      loading: this.state.loading,
      todos: this.state.todos,
      fetchTodos: this.fetchTodos,
      goToTodoPage: this.goToTodoPage,
      createTodo: this.createTodo,
      updateTodoBody: this.updateTodoBody,
      completeTodo: this.completeTodo,
      deleteTodo: this.deleteTodo
    }
    return(
      <Provider value={value}>{this.props.children}</Provider>
    )
  }
}

export {TodoProvider, Consumer as TodoConsumer};
