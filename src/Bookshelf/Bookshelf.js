import React from 'react'
// import StarRatingComponent from 'react-star-rating-component'
import config from '../config'
import { Link } from 'react-router-dom'
import BookshelfApiService from '../services/bookshelf-api-service'
import './Bookshelf.css'

class Bookshelf extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bookshelf: [],
      // ratings: {}
    }
  }

  // onStarClick(nextValue, prevValue, name) {
  //   const newRatings = this.state.ratings
  //   newRatings[name] = nextValue
  //   this.setState({ ratings: newRatings })
  // }

  handleRemoveBook = (id) => {
    // debugger
    console.log("function called in Bookshelf handleRemoveBook")
    BookshelfApiService.deleteBookshelfItem(id)
    let array = [...this.state.bookshelf]
    if (array.find(bookshelfItem => bookshelfItem.id === id)) {
      array = array.filter(bookshelfItem => bookshelfItem.id !== id)
      this.setState({ bookshelf: array })
    }
    console.log('array', array)

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
    const booksToDisplay = this.state.bookshelf.map((bookshelfItem, i) => {
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
            <Link to='/reviewform'>
              <button className='add-review-button'>
                Add Review
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
















