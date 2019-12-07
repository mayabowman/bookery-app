import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../services/token-service'

class Nav extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <Link
        onClick={this.handleLogoutClick}
        to='/'
        className='rightnav'
      >
        Log Out
      </Link>
    )
  }

  renderLoginLink() {
    return (
      <Link
        to='/signup'
        className='rightnav'
      >
        Sign Up
      </Link>
    )
  }

  render() {
    return (
      <nav className='Nav' role='navigation'>
        <Link to={'/'} className='leftnav'>
          bookery.
        </Link>
        {' '}
        <Link to={'/browsebooks'} className='rightnav'>
          Browse Books
        </Link>
        {' '}
        <Link to={'/bookshelf'} className='rightnav'>
          My Bookshelf
        </Link>
        {' '}
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }
}

export default Nav