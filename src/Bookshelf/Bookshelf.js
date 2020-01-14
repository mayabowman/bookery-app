import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service';
import './Bookshelf.css';

class Bookshelf extends React.Component {

  render() {
    let userId = TokenService.getUserId();
    function filterByUserId(item) {
      return item.user_id === Number(userId)
    }
    const userBooks = this.props.bookshelf.filter(filterByUserId);
    const booksToDisplay = userBooks.map((bookshelfItem, i) => {
      return (
        <div key={i} className='displayed-books'>
          <h2>{bookshelfItem.books.title}</h2>
          <h3>Author: {bookshelfItem.books.author}</h3>
          <div>
            <img
              src={bookshelfItem.books.graphic}
              alt='book cover'
            />
          </div>
          <div>
            <Link to={{
              pathname: '/reviewform',
              state: {
                bookshelfItem: bookshelfItem,
                bookshelf: this.props.bookshelf
              }
            }}>
              <button className='add-review-button'>
                View / Add Review
              </button>
            </Link>
            {' '}
            <button
              className='delete-button'
              id={bookshelfItem.id}
              onClick={() => this.props.handleRemoveBook(bookshelfItem.id)}
            >
              Delete
            </button>
          </div>
        </div>
      )
    });
    return (
      <div>
        <h1>Your Bookshelf</h1>
        {booksToDisplay}
      </div>
    )
  }
};

export default Bookshelf;





































