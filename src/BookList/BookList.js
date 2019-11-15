import React from 'react'

function Book(props) {
  console.log("props", props)
  return (
    <div>
      {props.books}
    </div>
  )
}

export default Book