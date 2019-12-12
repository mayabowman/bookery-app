import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../services/token-service'
import './SideDrawer.css'

class SideDrawer extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
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
        | Log Out
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
    let drawerClasses = 'side-drawer'
    if (this.props.show) {
      drawerClasses = 'side-drawer open'
    }

    return (
      <nav className={drawerClasses}>
        <div className='navbar-nav-items'>
              <Link to={'/browsebooks'} className='text-link'>
                Browse Books |
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
    )
  }
}

export default SideDrawer