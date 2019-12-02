import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
import config from '../config'
import { Link } from 'react-router-dom'

class Bookshelf extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bookshelf: [],
      ratings: {}
    }
  }

  onStarClick(nextValue, prevValue, name) {
    const newRatings = this.state.ratings
    newRatings[name] = nextValue
    this.setState({ ratings: newRatings })
  }

  handleRemoveBook = (e) => {
    console.log("function called in Bookshelf handleRemoveBook")
    let array = [...this.state.bookshelf]
    let index = array.indexOf(e.target.id)
    if (index !== -1) {
      array.splice(index, 1)
      this.setState({ bookshelf: array })
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
      })
      .catch(err => {
        this.setState({
          error: 'Sorry, could not get books at this time.'
        })
      })
  }

  render() {
    const booksToDisplay = this.state.bookshelf.map((book, i) => (
      <div key={i} className='displayed-books'>
        <p>{book.title}</p>
        <StarRatingComponent
          name={`rate${i}`}
          starCount={5}
          value={this.state.ratings[`rate${i}`]}
          onStarClick={this.onStarClick.bind(this)}
        />
        <div>
          <Link to='/reviewform'>
            <button>
              Add Review
            </button>
          </Link>
          <button
            id={book.id}
            onClick={e => this.handleRemoveBook(e)}
          >
            Delete
          </button>
        </div>
      </div>
    ))

    return (
      <div>
        <h1>Your Bookshelf</h1>
        {booksToDisplay}
      </div>
    )
  }
}

export default Bookshelf
















