import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header className='headerClass' >
        <h1>TODO LIST</h1>
        <Link className='linkClass' to='/'> Home </Link> |{' '}
        <Link  className='linkClass' to='/about'>About</Link>
      </header>
    )
  }
}

export default Header
