import React, { Component } from 'react';
import TodoItem from './TodoItem';
// import logo from './logo.svg';
// import './App.css';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo => (
      <h3> <TodoItem key={todo.id} todo={todo} /></h3>
    )))
  }
}

export default Todos;

  // <img src={logo} className="App-logo" alt="logo" />
  // <p>
  //   Edit <code>src/App.js</code> and save to reload.
  // </p>
