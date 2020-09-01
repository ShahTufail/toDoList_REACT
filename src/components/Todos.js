import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'
// import logo from './logo.svg';
// import './App.css';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleCompleted={this.props.toggleCompleted}
        delTodo={this.props.delTodo}
      />
    )))
  }
}

// PropType
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired

}

export default Todos;

  // <img src={logo} className="App-logo" alt="logo" />
  // <p>
  //   Edit <code>src/App.js</code> and save to reload.
  // </p>