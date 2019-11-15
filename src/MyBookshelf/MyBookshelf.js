import React from 'react'

function MyBookshelf(props) {
  console.log("bookshelf", props.bookshelf)
  return (
     <div>
      <h1>Your Bookshelf</h1>
    </div>
  )
}

export default MyBookshelf