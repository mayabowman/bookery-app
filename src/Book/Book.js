import React from 'react'
import './Book.css'

class Book extends React.Component {
  constructor() {
    super()
    this.state = {
      buttonText: "Add to Bookshelf",
      disabledButton: false
    }
  }

  changeButtonText(text) {
    this.setState({ buttonText: text })
  }

  disableButton() {
    this.setState({ disabledButton: true })
  }

  render() {
    const { buttonText } = this.state
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
        <button
          disabled={this.state.disabledButton}
          className='add-book-button'
          id={this.props.book.id}
          // id={this.props.book}
          onClick={
            () => {this.props.handleAddToBookshelf(this.props.book.id);
                   this.changeButtonText("Added!");
                   this.disableButton()}
          }
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Book

