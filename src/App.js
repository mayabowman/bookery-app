import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import LandingPage from './LandingPage/LandingPage'
import SignUp from './SignUp/SignUp'
import BrowseBooks from './BrowseBooks/BrowseBooks'
import MyBookshelf from './MyBookshelf/MyBookshelf'

function App() {
  return (
    <main className="App">
      <Nav />
      <div className='content' aria-live='polite'>
        <Route 
          exact
          path='/'
          component={LandingPage}
        />
        <Route 
          exact
          path='/sign-up'
          component={SignUp}
        />
        <Route 
          path='/browse-books'
          component={BrowseBooks}
        />
        <Route 
          path='/my-bookshelf'
          component={MyBookshelf}
        />
      </div>
    </main>
  )
}

export default App
