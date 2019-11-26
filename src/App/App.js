import React from 'react'
import { Route } from 'react-router-dom'
import Nav from '../Nav/Nav'
import LandingPage from '../LandingPage/LandingPage'
import SignUp from '../SignUp/SignUp'
import LogIn from '../LogIn/LogIn'
import BrowseBooks from '../BrowseBooks/BrowseBooks'
import MyBookshelf from '../MyBookshelf/MyBookshelf'
import Book from '../Book/Book'
// import dummyStore from '../dummy-store'
import config from '../config'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      bookshelf: [],
      error: null
    }
  }

  componentDidMount() {
    // this.setState(dummyStore)
    fetch(`${config.API_ENDPOINT}/books`)
      .then((booksRes) => {
        if (!booksRes.ok) {
          throw new Error(booksRes.statusText)
        }
        return booksRes.json()
      })
      .then(data => {
        this.setState({
          books: data,
          error: null
        })
      })
      .catch(err => {
        this.setState({
          error: 'Sorry, could not get books at this time.'
        })
      })
  }

  handleAddToBookshelf = (e) => {
    console.log('function called in app handleAddToBookshelf')
    this.setState({
      bookshelf: !this.state.bookshelf.includes(e.target.id)
                  ? [...this.state.bookshelf, e.target.id]
                  : this.state.bookshelf
    })
  }

  handleRemoveBook = (e) => {
    console.log("function called in App handleRemoveBook")
    let array = [...this.state.bookshelf]
    let index = array.indexOf(e.target.id)
    if (index !== -1) {
      array.splice(index, 1)
      this.setState({ bookshelf: array })
    }
  }

  render() {
    let { books } = this.state
    let updatedBooks = Object.keys(books).map((book, i) => (
      <Book key={i} id={i} book={books[book]} handleAddToBookshelf={this.handleAddToBookshelf}/>
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
            exact
            path='/log-in'
            component={LogIn}
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
                books={books}
                bookshelf={this.state.bookshelf}
                handleRemoveBook={this.handleRemoveBook}
              />
            )}
          />
        </div>
      </main>
    )
  }
}

export default App
