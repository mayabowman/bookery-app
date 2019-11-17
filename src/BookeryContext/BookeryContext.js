import React from 'react'

const BookeryContext = React.createContext({
  books: [],
  bookshelf: [],
  addToBookshelf: () => {}
})

export default BookeryContext