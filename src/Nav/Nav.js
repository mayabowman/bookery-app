import React from 'react'
import { Link } from 'react-router-dom'

function Nav(props) {
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
      <Link to={'/mybookshelf'}>
        My Bookshelf
      </Link>
    </nav>
  )
}

export default Nav