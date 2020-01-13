import React from 'react';
import TokenService from '../services/token-service';
import Book from '../Book/Book';
import AppContext from '../contexts/AppContext';

class BookList extends React.Component {

  static contextType = AppContext;

  render() {

    let userId = Number(TokenService.getUserId());
    const bookshelfItems = this.props.bookshelf.filter(item => {

      return item.user_id === userId
    });
    const books = this.props.books.filter(item => {
      const bookshelfItemIds = bookshelfItems.map(x => x.book_id);

      const exists = bookshelfItemIds.includes(item.id)
      return !exists
    });

    let updatedBooks = Object.keys(books).map((book, i) => (
      <Book key={i} id={i} book={books[book]} handleAddToBookshelf={this.context.handleAddToBookshelf}/>
    ));

    return (
      <div>
        {updatedBooks}
      </div>
    )
  };
};

export default BookList;