import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  return (
    <main className="LandingPage">
      <h1>Welcome to Bookery</h1>
      <p>Every book is a journey. Let Bookery help you choose your next adventure,
        keep track of your reads, and post a review! Click below to get started.
      </p>
      <Link to='/signup'>
        Sign Up
      </Link>
      {' | '}
      <Link to='/login'>
        Log In
      </Link>
    </main>
  )
}

export default LandingPage