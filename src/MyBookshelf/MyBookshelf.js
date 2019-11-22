import React from 'react'
import StarRatingComponent from 'react-star-rating-component'

class MyBookshelf extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ratings: {}
    }
  }

  onStarClick(nextValue, prevValue, name) {
    const newRatings = this.state.ratings
    newRatings[name] = nextValue
    debugger
    this.setState({ ratings: newRatings })
  }

  render() {
    const myBooks = this.props.books.filter((book) => {
      if (book.id === this.props.bookshelf.find(item => item === book.id)) {
        return true
      } return false
    })

    const booksToDisplay = myBooks.map((book, i) => (
      <div key={i} className='displayed-books'>
        <p>{myBooks[i].title}</p>
        <StarRatingComponent
          name={`rate${i}`}
          starCount={5}
          value={this.state.ratings[`rate${i}`]}
          onStarClick={this.onStarClick.bind(this)}
        />
        <div>
          <button
            id={myBooks[i].id}
            onClick={e => this.props.handleRemoveBook(e)}
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

export default MyBookshelf
















