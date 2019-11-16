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
    this.setState(dummyStore)
  }

  handleAddToBookshelf(e) {
    this.setState(
      {
        bookshelf: !this.state.bookshelf.includes(e.target.id)  
                    ? [...this.state.bookshelf, e.target.id]
                    : this.state.bookshelf
      }
    )
  }

  render() {
    let { books } = this.state
    let updatedBooks = Object.keys(books).map((book, i) => (      
      <div key={i}>
        <h2>{books[book].title}</h2>
        <p>Author: {books[book].author}</p>
        <button 
          id={books[book]} 
          onClick={e => this.handleAddToBookshelf(e)}        
        >
          Add to Bookshelf
        </button>
       </div>
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
    )
  }
}

export default App
