import React from 'react'
import BookList from '../BookList/BookList'

class BrowseBooks extends React.Component {

  render() {

    return (
      <div>
        <h1>Browse Books Here</h1>
        <BookList
          books={this.props.books}
          bookshelf={this.props.bookshelf}
        />
      </div>
    )
  }
}

export default BrowseBooks

