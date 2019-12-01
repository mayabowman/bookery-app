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
      >
        Log Out
      </Link>
    )
  }

  renderLoginLink() {
    return (
      <Link
        to='/signup'
      >
        Sign Up
      </Link>
    )
  }

  render() {
    return (
      <nav className='Nav'>
        <Link to={'/'}>
          Home
        </Link>
        {' '}
        <Link to={'/browsebooks'}>
          Browse Books
        </Link>
        {' '}
        <Link to={'/bookshelf'}>
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