import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../services/token-service'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './Nav.css'

class Nav extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <Link
        onClick={this.handleLogoutClick}
        to='/'
        className='text-link'
      >
        <span className='keep-white'>|</span> Log Out
      </Link>
    )
  }

  renderLoginLink() {
    return (
      <Link
        to='/signup'
        className='text-link'
      >
        Sign Up
      </Link>
    )
  }

  render() {
    return (
      <header className='navbar'>
        <nav className='navbar-navigation' role='navigation'>
          <div className='navbar-toggle-button'>
            <DrawerToggleButton click={this.props.drawerClickHandler}/>
          </div>
          <div className='navbar-logo'>
          <Link to={'/'} className='text-link'>
            bookery<span className='keep-white'>.</span>
          </Link>
          </div>
          <div className='spacer' />
          <div className='navbar-nav-items'>
            <Link to={'/browsebooks'} className='text-link'>
              Browse Books <span className='keep-white'>|</span>
            </Link>
            {' '}
            <Link to={'/bookshelf'} className='text-link'>
              My Bookshelf
            </Link>
            {' '}
            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          </div>
        </nav>
      </header>
    )
  }
}

export default Nav