import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <main className="LandingPage">
      <h1>Welcome to Bookery</h1>
      <p>Every book is a journey. Let Bookery help you choose your next adventure,
        keep track of your reads, and rate your experiences! Click below to get started.
      </p>
      <Link to='/sign-up'>
        Sign Up
      </Link>
      {' | '}
      <Link to='/log-in'>
        Log In
      </Link>
    </main>
  )
}

export default LandingPage