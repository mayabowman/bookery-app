import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from '../Nav/Nav'
import LandingPage from '../LandingPage/LandingPage'
import SignUp from '../SignUp/SignUp'
import LogIn from '../LogIn/LogIn'
import BrowseBooks from '../BrowseBooks/BrowseBooks'
import Bookshelf from '../Bookshelf/Bookshelf'
import ReviewForm from '../ReviewForm/ReviewForm'
import Book from '../Book/Book'
import BookshelfApiService from '../services/bookshelf-api-service'
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

  handleAddToBookshelf = (id) => {
    debugger
    console.log(BookshelfApiService)
    console.log('function called in app handleAddToBookshelf')
    BookshelfApiService.postBookToBookshelf(id)
    console.log('id', id)
    this.setState({
      bookshelf: !this.state.bookshelf.includes(id)
                  ? [...this.state.bookshelf, id]
                  : this.state.bookshelf
    })
  }

  // handleRemoveBook = (e) => {
  //   console.log("function called in App handleRemoveBook")
  //   let array = [...this.state.bookshelf]
  //   let index = array.indexOf(e.target.id)
  //   if (index !== -1) {
  //     array.splice(index, 1)
  //     this.setState({ bookshelf: array })
  //   }
  // }

  render() {
    let { books } = this.state
    let updatedBooks = Object.keys(books).map((book, i) => (
      <Book key={i} id={i} book={books[book]} handleAddToBookshelf={this.handleAddToBookshelf}/>
    ))

    return (
      <main className="App">
        <Nav />
        <Switch>
          <>
            <div className='content' aria-live='polite'>
              <Route
                exact
                path='/'
                component={LandingPage}
              />
              <Route
                exact
                path='/signup'
                component={SignUp}
              />
              <Route
                exact
                path='/login'
                component={LogIn}
              />
              <Route
                path='/browsebooks'
                render={() => (
                  <BrowseBooks books={updatedBooks} />
                )}
              />
              <Route
                path='/bookshelf'
                render={() => (
                  <Bookshelf
                    books={books}
                    bookshelf={this.state.bookshelf}
                    handleRemoveBook={this.handleRemoveBook}
                  />
                )}
              />
              <Route
                exact
                path='/reviewform'
                component={ReviewForm}
              />
            </div>
          </>
        </Switch>
      </main>
    )
  }
}

export default App
