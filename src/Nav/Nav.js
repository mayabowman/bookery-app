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
        to='/login'
        className='text-link'
      >
        <span className='keep-white'>|</span> Log In
      </Link>
    )
  }

  toBrowse() {
    return (
      <Link to={'/browsebooks'} className='text-link'>
        bookery<span className='keep-white'>.</span>
      </Link>
    )
  }

  toLandingPage() {
    return (
      <Link to={'/'} className='text-link'>
        bookery<span className='keep-white'>.</span>
      </Link>
    )
  }

  componentDidMount() {
    TokenService.onChange(() => {
      this.forceUpdate()
    })
  }

  render() {
    return (
      <header className='navbar'>
        <nav className='navbar-navigation' role='navigation'>
          <div className='navbar-toggle-button'>
            <DrawerToggleButton click={this.props.drawerClickHandler}/>
          </div>
          <div className='navbar-logo'>
            {TokenService.hasAuthToken()
              ? this.toBrowse()
              : this.toLandingPage()
            }
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