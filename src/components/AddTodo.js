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
            style={{ flex: '10', padding: '5px'}}
            value={this.state.title}
            placeholder='Add Todo...'
            onChange={this.setTodo}
            />

          <input
            type='submit'
            style={{ flex: '1', padding: '5px', backgroundColor: '#1aff1a', cursor: 'pointer'}}
            value='Add' />
        </form>
      </div>
    )
  }
}

// PropType
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}
export default AddTodo
