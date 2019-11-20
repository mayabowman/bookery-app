import React from 'react'
import StarRatingComponent from 'react-star-rating-component'

class MyBookshelf extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      rating: '',
    }
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue })
  }

  render() {
    const myBooks = this.props.books.filter((book) => {
      if (book.id === this.props.bookshelf.find(item => item === book.id)) {
        return true
      }
      return false
    })

    const booksToDisplay = myBooks.map((book, i) => (
      <div key={i} className='displayed-books'>
        {myBooks[i].title} <br />
        <StarRatingComponent
              name='rate1'
              starCount={5}
              value={this.state.rating}
              onStarClick={this.onStarClick.bind(this)}
            />
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
















