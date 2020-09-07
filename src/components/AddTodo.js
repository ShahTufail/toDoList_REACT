import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title !== '')
      this.props.addTodo(this.state.title)
    else
      alert('Please enter a value in Add Todo')
    this.setState({ title: ''})
  }
  setTodo = (e) => this.setState({ title: e.target.value})

  render() {
    return (
      <div>
        <form style={{ display: 'flex', margin: '10px' }} onSubmit={this.onSubmit}>
          <input
            type='text'
            name='title'
            className='addToField'
            value={this.state.title}
            placeholder='Add Todo...'
            onChange={this.setTodo}
            />

          <button
            type='submit'
            style={buttonStyle}
            className='button'>
              +
            </button>
        </form>
      </div>
    )
  }
}
const buttonStyle = {
  flex: '.5',
  backgroundColor: '#007399',
  cursor: 'pointer',
  margin: '4px',
  borderRadius: '3%',
  color: '#e6e6ff',
  fontSize: '20px',
  fontWeight: 'bolder',
  border: 'none'
}

// PropType
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}
export default AddTodo
