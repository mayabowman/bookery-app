import React from 'react'
import TokenService from '../services/token-service'
import Book from '../Book/Book'
import AppContext from '../contexts/AppContext'

class BookList extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     books: this.props.books,
  //     bookshelf: this.props.bookshelf
  //   }
  // }

  static contextType = AppContext

  render() {

    console.log('books', this.props.books)
    console.log('bookshelf', this.props.bookshelf)

    let userId = Number(TokenService.getUserId())
    const bookshelfItems = this.props.bookshelf.filter(item => {
      console.log('item.user_id', item.user_id)
      console.log('userId', userId)
      return item.user_id === userId
    })
    console.log('bookshelfItems', bookshelfItems)
    const books = this.props.books.filter(item => {
      const bookshelfItemIds = bookshelfItems.map(x => x.book_id)
      console.log('bookshelfItemIds', bookshelfItemIds)
      console.log('item', item)
      console.log('item.id', item.id)
      const exists = bookshelfItemIds.includes(item.id)
      console.log('exists', exists)
      return !exists
    })

    let updatedBooks = Object.keys(books).map((book, i) => (
      <Book key={i} id={i} book={books[book]} handleAddToBookshelf={this.context.handleAddToBookshelf}/>
    ))
    // let updatedBookList = this.props.books.filter((item, i) => {
    //   // const bookshelfItem = this.props.bookshelf.find(bookshelfItem => {
    //   //   return bookshelfItem.user_id === userId && bookshelfItem.book_id === item.book[i].id
    //   // })
    //   return bookshelfItem !== null
    // })
    console.log('books', books)
    return (
      <div>
        {updatedBooks}
      </div>
    )
  }
}

export default BookList