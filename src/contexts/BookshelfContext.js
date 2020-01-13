import React from 'react';

const BookshelfContext = React.createContext({
  bookshelf: [],
  reviews: [],
  error: null,
  addReview: () => {},
  insertReview: () => {}
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

  setBooks = books => {
    this.setState({ books })
  }

  addReview = review => {
    this.setReviews([
      ...this.state.reviews,
      review
    ])
  }

  updateReview = review => {
    this.setReviews([
      ...this.state.reviews,
      review
    ])
  }

  addBook = book => {
    this.setBooks([
      ...this.state.bookshelf,
      book
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