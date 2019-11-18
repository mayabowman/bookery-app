import React from 'react'

class Book extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.book.title}</h2>
        <p>Author: {this.props.book.author}</p>
        <button
          id={this.props.book.id}
          onClick={e => this.props.handleAddToBookshelf(e)}
        >
          Add to Bookshelf
        </button>
      </div>
    )
  }
}

export default Book

