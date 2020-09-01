import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: this.props.todo.completed ? '#00cc00' : '#b3ffb3',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }
  // toggleCompleted = () => {
  //   console.log(this.props);
  // }

  render() {
    const { title, id, completed } = this.props.todo;
    return (
      <div className='container' style={this.getStyle()}>
        <input
          type='checkbox'
          checked={completed}
          onChange={this.props.toggleCompleted.bind(this, id)}
        />
        {' '}
        <span className='titleClass'>{title}</span>
        <button onClick={this.props.delTodo.bind(this, id)} className='btnClass'>x</button>
      </div>
    )
  }
}

// PropType
TodoItem.propTypes = {
  todo: PropTypes.array.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired

}


export default TodoItem
