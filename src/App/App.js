import React from 'react'
import { Route } from 'react-router-dom'
import Nav from '../Nav/Nav'
import LandingPage from '../LandingPage/LandingPage'
import SignUp from '../SignUp/SignUp'
import BrowseBooks from '../BrowseBooks/BrowseBooks'
import MyBookshelf from '../MyBookshelf/MyBookshelf'
import dummyStore from '../dummy-store'

class App extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    // fake data loading from API call
    setTimeout(() => this.setState(dummyStore), 600)
  }

  render() {
    const { books } = this.state
    console.log(this.state)

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
            books={this.state.books}
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
}

export default App
