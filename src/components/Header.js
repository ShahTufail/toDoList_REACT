import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header className='headerClass' >
        <h1>ToDoList</h1>
        <Link to='/'> Home </Link> | <Link to='/about'>About</Link>
      </header>
    )
  }
}

export default Header
