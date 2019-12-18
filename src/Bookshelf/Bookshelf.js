import React from 'react'
// import StarRatingComponent from 'react-star-rating-component'
import config from '../config'
import { Link } from 'react-router-dom'
import BookshelfApiService from '../services/bookshelf-api-service'
import TokenService from '../services/token-service'
import './Bookshelf.css'

class Bookshelf extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bookshelf: [],
      currentUserId: TokenService.getUserId()
      // ratings: {}
    }
  }

  // onStarClick(nextValue, prevValue, name) {
  //   const newRatings = this.state.ratings
  //   newRatings[name] = nextValue
  //   this.setState({ ratings: newRatings })
  // }

  handleRemoveBook = (id) => {
    console.log("function called in Bookshelf handleRemoveBook")
    BookshelfApiService.deleteBookshelfItem(id)
    let array = [...this.state.bookshelf]
    let updatedBookshelf = array.filter(bookshelfItem => {
      return bookshelfItem.id !== id
    })
    this.setState({ bookshelf: updatedBookshelf })
    // if (array.find(bookshelfItem => bookshelfItem.id === id)) {
    //   array = array.filter(bookshelfItem => bookshelfItem.id !== id)
    //   this.setState({ bookshelf: array })
    // }
    console.log('updatedBookshelf', updatedBookshelf)

  }

  componentDidMount() {
    debugger
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
    // const allBooksIds = this.state.bookshelf.map(item => {
    //   return item.book_id
    // })
    // let userId = TokenService.getUserId()
    // console.log('userId', userId)
    // const uniqueBookIds = Array.from(new Set(allBooksIds))
    // const uniqueBooks = uniqueBookIds.map(item => {
    //   const uniqueBook = this.state.bookshelf.find(x => {
    //     return x.book_id === item
    //     // return x.book_id === item && x.user_id === userId
    //     // return x.user_id === userId
    //   })
    //   return uniqueBook
    // })
    // debugger
    let userId = TokenService.getUserId()
    function filterByUserId(item) {
      return item.user_id === Number(userId)
    }
    console.log('bookshelf',this.state.bookshelf)
    const userBooks = this.state.bookshelf.filter(filterByUserId)
    // console.log('uniqueBooks', uniqueBooks)
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
          {/* <StarRatingComponent
            name={`rate${i}`}
            starCount={5}
            value={this.state.ratings[`rate${i}`]}
            onStarClick={this.onStarClick.bind(this)}
          /> */}
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
















