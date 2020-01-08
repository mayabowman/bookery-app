import React from 'react'
import BookshelfApiService from '../services/bookshelf-api-service'
import './ReviewForm.css'

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)

    this.bookshelfItem = this.props.location.state.bookshelfItem
    this.bookshelf = this.props.location.state.bookshelf
    this.bookshelf = this.bookshelf.filter(item => {
      return item.book_id === this.bookshelfItem.book_id
    })

    this.state = {
      textValue: '',
      bookshelf: this.bookshelf,
      placeholder: 'Type your review...'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({textValue: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    const text = this.state.textValue
    BookshelfApiService.updateBookshelfItem(this.bookshelfItem.id, text)
      .then(() => {
        const updatedBookshelf = this.state.bookshelf.map(item => {
          if (item.id === this.bookshelfItem.id) {
            item.review = text
          }
          return item
        })
        this.setState({ bookshelf: updatedBookshelf })
      })
      .then(() => {
        this.setState({
          placeholder: 'Thanks for your review!' ,
          textValue: ''
        })
      })
      .catch(this.context.setError)
    event.target.review.value = ''

  }



  render() {
    const reviews = this.bookshelf.map((bookshelfItem, i) => {
      return (
        <div key={i} className={'displayed-review ' + (bookshelfItem.review === 'dummy text' ? 'hidden' : 'show')} >
          <div>{bookshelfItem.review}</div>
          &mdash;{bookshelfItem.reviewer.first_name}
        </div>
      )
    })
    return (
      <div className='review-form-div'>
        <form className='add-review' onSubmit={this.handleSubmit}>
          <h2>Add Review</h2>
          <div>
          <h3>{this.bookshelfItem.books.title}</h3>
            <h3>Author: {this.bookshelfItem.books.author}</h3>
            <div>
              <img
                src={this.bookshelfItem.books.graphic}
                alt='book cover'
              />
            </div>
            {reviews}
          </div>
          <label htmlFor='review' className='review-label'>
            What did you think?
            <textarea
              required
              aria-label='Type your review...'
              id='review'
              name='review'
              // cols='80'
              rows='10'
              value={this.state.textValue} onChange={this.handleChange}
              placeholder={this.state.placeholder}
            />
          </label>
          <div>
            <input type="submit" value="Submit" className='submit-review-button' />
            <input type='hidden' name='review' id='review' value='dummy' />
            <input type='hidden' name='rating' id='rating' value='1' />
          </div>
        </form>
      </div>
    )
  }
}

export default ReviewForm