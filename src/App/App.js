import React from 'react'
import { Route } from 'react-router-dom'
import Nav from '../Nav/Nav'
import LandingPage from '../LandingPage/LandingPage'
import SignUp from '../SignUp/SignUp'
import BrowseBooks from '../BrowseBooks/BrowseBooks'
import MyBookshelf from '../MyBookshelf/MyBookshelf'
import dummyStore from '../dummy-store'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      bookshelf: []
    }
  }
  

  componentDidMount() {
    // fake data loading from API call
    setTimeout(() => this.setState(dummyStore), 600)
  }

  handleAddToBookshelf(e) {
    console.log('button clicked!')
    // const bookID = 
  }

  render() {
    let { books } = this.state
    let updatedBooks = Object.keys(books).map((book, i) => (      
      <li key={i}>
        <div>
          {books[book].title}
          <p>Author: {books[book].author}</p>
          <button onClick={this.handleAddToBookshelf}>Add to Bookshelf</button>
        </div>
      </li>
      ))

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
            render={() => (
              <BrowseBooks 
                books={updatedBooks}
              />
            )}
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
