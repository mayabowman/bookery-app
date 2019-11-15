import React from 'react'

function Book(props) {
  console.log("props", props)
  return (
    <div>
      <h2>{props.books}</h2>
    </div>
  )
}

export default Book