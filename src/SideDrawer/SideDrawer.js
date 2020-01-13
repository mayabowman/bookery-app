import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service';
import './SideDrawer.css';

class SideDrawer extends React.Component {

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  };

  renderLogoutLink() {
    return (
      <Link
        onClick={
          () => {this.handleLogoutClick();
                 this.props.toggle()}
        }
        to='/'
        className='side-drawer__text-link'
      >
        Log Out
      </Link>
    )
  };

  renderLoginLink() {
    return (
      <Link
        to='/signup'
        className='side-drawer__text-link'
      >
        Sign Up
      </Link>
    )
  };

  render() {
    let drawerClasses;
    this.props.show ? drawerClasses = 'side-drawer open' : drawerClasses = 'side-drawer'

    return (
      <nav className={drawerClasses}>
        <div className='side-drawer__navbar-nav-items'>
          <Link to={'/browsebooks'} className='side-drawer__text-link' onClick={this.props.toggle}>
            Browse Books
          </Link>
          <Link to={'/bookshelf'} className='side-drawer__text-link' onClick={this.props.toggle}>
            My Bookshelf
          </Link>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
      </nav>
    )
  };
};

export default SideDrawer;