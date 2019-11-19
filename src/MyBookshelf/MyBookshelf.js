import React from 'react'
import StarRatingComponent from 'react-star-rating-component'

class MyBookshelf extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      rating: 1
    }
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue })
  }

  myBooks = this.props.books.filter((book) => {
    if (book.id === this.props.bookshelf.find(item => item === book.id)) {
      return true
    }
    return false
  })

  booksToDisplay = this.myBooks.map((book, i) => (
    <div key={i} className='displayed-books'>
      {this.myBooks[i].title}
      <StarRatingComponent
        name='rate1'
        starCount={5}
        value={this.state.rating}
        onStarClick={this.onStarClick.bind(this)}
      />
      </div>
  ))

  render() {
    return (
      <div>
        <h1>Your Bookshelf</h1>
        {this.booksToDisplay}
      </div>
    )
  }
}

export default MyBookshelf














