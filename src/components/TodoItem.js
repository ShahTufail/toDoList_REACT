import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: this.props.todoItem.completed ? '#007399' : '#e6e6ff',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todoItem.completed ? 'line-through' : 'none'
    }
  }
  conditionalStyle = () => {
    return {
      backgroundColor: this.props.todoItem.completed ? '#e6e6ff' : '#007399',
      color: !this.props.todoItem.completed ? '#e6e6ff' : '#007399',
      textDecoration: 'none'
    }
  }
  // toggleCompleted = () => {
  //   console.log(this.props);
  // }

  render() {
    const { title, id, completed } = this.props.todoItem;
    return (
      <div className='container' style={this.getStyle()}>
        <input
          type='checkbox'
          checked={completed}
          onChange={this.props.toggleCompleted.bind(this, id)}
        />
        {' '}
        <span className='titleClass'>{title}</span>
        <button onClick={this.props.delTodo.bind(this, id)} className='btnClass' style={this.conditionalStyle()}>x</button>
      </div>
    )
  }
}

// PropType
TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired

}


export default TodoItem
