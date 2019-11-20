import React from 'react'
import StarRatingComponent from 'react-star-rating-component'

class MyBookshelf extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      rating: 1,
      booksToDisplay: []
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

  getBooksToDisplay() {
    console.log("booksToDisplay", this.state.booksToDisplay)
    this.setState({ booksToDisplay: this.myBooks })
  }


  render() {
    return (
      <div>
        <h1>Your Bookshelf</h1>
        {this.state.booksToDisplay.map((book, i) => (
          <div key={i} className='displayed-books'>
            {this.state.booksToDisplay[i].title}
            <StarRatingComponent
              name='rate1'
              starCount={5}
              value={this.state.rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default MyBookshelf

// booksToDisplay = this.myBooks.map((book, i) => (
  //   <div key={i} className='displayed-books'>
  //     {this.myBooks[i].title}
  //   </div>
  // ))













