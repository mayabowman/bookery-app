import React from 'react'

function MyBookshelf(props) {
  console.log("bookshelf", props.bookshelf)

  const myBooks = props.books.filter((book) => {
    if (book.id === props.bookshelf.find(item => item === book.id)) {
      return true
    }
    return false
  })
  console.log('myBooks', myBooks)

  return (
     <div>
      <h1>Your Bookshelf</h1>
    </div>
  )
}

export default MyBookshelf