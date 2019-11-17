import React from 'react'
import BookeryContext from '../BookeryContext/BookeryContext'

class Book extends React.Component {
  state = {
    bookshelf: []
  }

  static defaultProps = {
    addToBookshelf: () => {},
  }
  static contextType = BookeryContext

  handleAddToBookshelf = (e) => {
    this.setState({
      bookshelf: !this.state.bookshelf.includes(e.target.id)
                  ? [...this.state.bookshelf, e.target.id]
                  : this.state.bookshelf
    })
  }

  render() {
    return (
      <div key={this.props.key}>
        <h2>{this.props.book.title}</h2>
        <p>Author: {this.props.book.author}</p>
        <button
          id={this.props.book.id}
          onClick={e => this.handleAddToBookshelf(e)}
        >
          Add to Bookshelf
        </button>
      </div>
    )
  }
}

export default Book

