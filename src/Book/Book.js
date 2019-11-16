import React from 'react'

function Book(props) {
  const handleAddToBookshelf = (e) => {
    debugger
    this.setState({
      bookshelf: !this.state.bookshelf.includes(e.target.id)  
                  ? [...this.state.bookshelf, e.target.id]
                  : this.state.bookshelf
    })
  }

  return(
    <div key={props.key}>
      <h2>{props.book.title}</h2>
      <p>Author: {props.book.author}</p>
      <button 
        id={props.book.id} 
        onClick={e => handleAddToBookshelf(e)}
      >
        Add to Bookshelf
      </button>
    </div>
  )
}

export default Book