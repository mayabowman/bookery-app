import React from 'react'

function MyBookshelf(props) {
  console.log("bookshelf", props.bookshelf)
  // bookshelf is an array, access values and match to books from state
  // render book component for each book in array
  return (
     <div>
      <h1>Your Bookshelf</h1>
    </div>
  )
}

export default MyBookshelf