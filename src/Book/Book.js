import React from 'react'
import './Book.css'

class Book extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.book.title}</h2>
        <p>Author: {this.props.book.author}</p>
        <div>
          <img
            src={this.props.book.graphic}
            alt='book cover'
          />
        </div>
        <button
          id={this.props.book.id}
          onClick={() => this.props.handleAddToBookshelf(this.props.book.id)}
        >
          Add to Bookshelf
        </button>
      </div>
    )
  }
}

export default Book

