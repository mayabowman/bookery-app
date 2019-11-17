import React from 'react'
import { Route } from 'react-router-dom'
import Nav from '../Nav/Nav'
import LandingPage from '../LandingPage/LandingPage'
import SignUp from '../SignUp/SignUp'
import BrowseBooks from '../BrowseBooks/BrowseBooks'
import MyBookshelf from '../MyBookshelf/MyBookshelf'
import Book from '../Book/Book'
import BookeryContext from '../BookeryContext/BookeryContext'
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
    this.setState(dummyStore)
  }

  render() {
    let { books } = this.state
    let updatedBooks = Object.keys(books).map((book, i) => (
      <Book key={i} book={books[book]}/>
    ))

    const value = {
      books: this.state.books,
      bookshelf: this.state.bookshelf
    }

    return (
      <BookeryContext.Provider value={value}>
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
                <BrowseBooks books={updatedBooks} />
              )}
            />
            <Route
              path='/my-bookshelf'
              render={() => (
                <MyBookshelf
                  books={updatedBooks}
                  bookshelf={this.state.bookshelf}
                />
              )}
            />
          </div>
        </main>
      </BookeryContext.Provider>
    )
  }
}

export default App
