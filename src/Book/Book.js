import React from 'react';
import './Book.css';

class Book extends React.Component {

  render() {
    return (
      <div className='booklist-item'>
        <h2>{this.props.book.title}</h2>
        <h3>Author: {this.props.book.author}</h3>
        <div>
          <img
            src={this.props.book.graphic}
            alt='book cover'
          />
        </div>
        <div className='book-description'>
          <p>{this.props.book.book_description}</p>
        </div>
        <button
          className='add-book-button'
          id={this.props.book.id}
          onClick={
            () => {this.props.handleAddToBookshelf(this.props.book.id)
                   alert('Added!')}
          }
        >
          Add to Bookshelf
        </button>
      </div>
    )
  };
};

export default Book;

