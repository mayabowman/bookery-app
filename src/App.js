import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import LandingPage from './LandingPage/LandingPage'
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
          path='/browse-books'
          component={BrowseBooks}
        />
        <Route 
          path='/my-bookshelf'
          component={MyBookshelf}
        />
      </div>
    </main>
  );
}

export default App
