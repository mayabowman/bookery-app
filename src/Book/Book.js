import React from 'react'

function Book(props) {
  console.log("props", this.props)
  return (
    <div>
      <h2>{this.props.updatedBooks.title}</h2>
    </div>
  )
}

export default Book