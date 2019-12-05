import React from 'react'

// export const nullBookshelf = {
//   reviewer: {},
// }

const BookshelfContext = React.createContext({
  bookshelf: [],
  reviews: [],
  error: null,
  addReview: () => {},
})

export default BookshelfContext

export class BookshelfProvider extends React.Component {
  state = {
    bookshelf: [],
    error: null,
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setReviews = reviews => {
    this.setState({ reviews })
  }

  addReview = review => {
    this.setReviews([
      ...this.state.reviews
    ])
  }

  render() {
    const value = {
      bookshelf: this.state.bookshelf,
      reviews: this.state.reviews,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setReviews: this.setReviews,
      addReview: this.addReview
    }

    return (
      <BookshelfContext.Provider value={value}>
        {this.props.children}
      </BookshelfContext.Provider>
    )
  }
}