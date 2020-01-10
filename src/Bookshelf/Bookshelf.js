import React from 'react'
import config from '../config'
import { Link } from 'react-router-dom'
import BookshelfApiService from '../services/bookshelf-api-service'
import TokenService from '../services/token-service'
import './Bookshelf.css'

class Bookshelf extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bookshelf: this.props.bookshelf,
      currentUserId: TokenService.getUserId()
    }
  }

  handleRemoveBook = (id) => {
    BookshelfApiService.deleteBookshelfItem(id)
    let array = [...this.state.bookshelf]
    let updatedBookshelf = array.filter(bookshelfItem => {
      return bookshelfItem.id !== id
    })
    this.setState({ bookshelf: updatedBookshelf })
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/bookshelf`)
      .then((bookshelfRes) => {
        if (!bookshelfRes.ok) {
          throw new Error(bookshelfRes.statusText)
        }
        return bookshelfRes.json()
      })
      .then(data => {
        this.setState({
          bookshelf: data,
          error: null
        })
      })
      .catch(err => {
        this.setState({
          error: 'Sorry, could not get books at this time.'
        })
      })
  }



  render() {
    let userId = TokenService.getUserId()
    function filterByUserId(item) {
      return item.user_id === Number(userId)
    }
    const userBooks = this.state.bookshelf.filter(filterByUserId)
    const booksToDisplay = userBooks.map((bookshelfItem, i) => {
      return (
        <div key={i} className='displayed-books'>
          <h2>{bookshelfItem.books.title}</h2>
          <h3>Author: {bookshelfItem.books.author}</h3>
          <div>
            <img
              src={bookshelfItem.books.graphic}
              alt='book cover'
            />
          </div>
          <div>
            <Link to={{
              pathname: '/reviewform',
              state: {
                bookshelfItem: bookshelfItem,
                bookshelf: this.state.bookshelf
              }
            }}>
              <button className='add-review-button'>
                View / Add Review
              </button>
            </Link>
            {' '}
            <button
              className='delete-button'
              id={bookshelfItem.id}
              onClick={() => this.handleRemoveBook(bookshelfItem.id)}
            >
              Delete
            </button>
          </div>
        </div>
      )
    })
    return (
      <div>
        <h1>Your Bookshelf</h1>
        {booksToDisplay}
      </div>
    )
  }
}

export default Bookshelf
















