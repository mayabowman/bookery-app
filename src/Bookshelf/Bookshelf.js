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
    console.log("function called in Bookshelf handleRemoveBook")
    BookshelfApiService.deleteBookshelfItem(id)
    let array = [...this.state.bookshelf]
    let index = array.indexOf(id)
    if (index !== -1) {
      array.splice(index, 1)
      console.log('array',array)
      this.setState({ bookshelf: array })
      console.log(this.state.bookshelf)
    }
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
        console.log('data', data)
        console.log('bookshelf', this.state.bookshelf[0])
      })
      .catch(err => {
        this.setState({
          error: 'Sorry, could not get books at this time.'
        })
      })
  }

  render() {
    console.log('bookshelf', this.state.bookshelf[0])
    const booksToDisplay = this.state.bookshelf.map((book, i) => {
      return (
        <div key={i} className='displayed-books'>
          <p>{book.title}</p>
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
              id={book.id}
              onClick={() => this.handleRemoveBook(book.id)}
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
















