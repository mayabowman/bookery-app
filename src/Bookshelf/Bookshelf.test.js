import React from 'react'
import ReactDOM from 'react-dom'
import Bookshelf from './Bookshelf'

it('renders without crashing', () => {
  const handleRemoveBook = (id) => {
    BookshelfApiService.deleteBookshelfItem(id)
    let array = [...this.state.bookshelf]
    let updatedBookshelf = array.filter(bookshelfItem => {
      return bookshelfItem.id !== id
    })
    this.setState({ bookshelf: updatedBookshelf })
  }

  const books = [
    {
      id: 19,
      title: "Extremely Loud and Incredibly Close",
      author: "Jonathan Safran Foer",
      book_description: "A moving story about a boy who lost his father to 9/11, and his path back to happiness.",
      graphic: "https://images-na.ssl-images-amazon.com/images/I/51uY2ceXuCL.jpg",
      isbn: "9780618711659",
      pages: 368,
      average_rating: 4
    },
    {
      id: 20,
      title: "Shopgirl",
      author: "Steve Martin",
      book_description: "A coming-of-two-ages novella about a lonely Vermont transplant and a successful middle-aged man.",
      graphic: "https://images-na.ssl-images-amazon.com/images/I/41Q3WS9PARL.jpg",
      isbn: "9780786866588",
      pages: 130,
      average_rating: 3
    }
  ]
  const bookshelf = [
    {
      id: 202,
      user_id: 2,
      book_id: 19,
      review: "dummy text",
      rating: 3,
      reviewer: {
        id: 2,
        user_email: "testuser2@gmail.com",
        first_name: "Elaine",
        last_name: "Benes",
        date_created: "2019-11-26T20:52:15.526905"
      },
      books: {
        id: 19,
        title: "Extremely Loud and Incredibly Close",
        author: "Jonathan Safran Foer",
        book_description: "A moving story about a boy who lost his father to 9/11, and his path back to happiness.",
        graphic: "https://images-na.ssl-images-amazon.com/images/I/51uY2ceXuCL.jpg",
        pages: 368,
        average_rating: 4
      }
    },
    {
      id: 205,
      user_id: 9,
      book_id: 19,
      review: "dummy text",
      rating: 3,
      reviewer: {
        id: 9,
        user_email: "timwh@tley.net",
        first_name: "Tim",
        last_name: "Whatley",
        date_created: "2019-12-22T05:59:34.024",
        date_modified: "2019-12-22T05:59:34.024"
      },
      books: {
        id: 19,
        title: "Extremely Loud and Incredibly Close",
        author: "Jonathan Safran Foer",
        book_description: "A moving story about a boy who lost his father to 9/11, and his path back to happiness.",
        graphic: "https://images-na.ssl-images-amazon.com/images/I/51uY2ceXuCL.jpg",
        pages: 368,
        average_rating: 4
      }
    }
  ]
  const div = document.createElement('div')
  ReactDOM.render(<Bookshelf
                    books={books}
                    bookshelf={bookshelf}
                    handleRemoveBook={handleRemoveBook}
                  />
                  , div)
  ReactDOM.unmountComponentAtNode(div)
})