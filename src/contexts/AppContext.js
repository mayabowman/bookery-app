import React from 'react'

const AppContext = React.createContext({
  books: [],
  bookshelf: [],
  handleAddToBookshelf: () => {}
})

export default AppContext