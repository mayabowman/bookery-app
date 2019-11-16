import React from 'react'

function BookList(props) {
  console.log("props", props)
  return (
    <div>
      {props.books}
    </div>
  )
}

export default BookList