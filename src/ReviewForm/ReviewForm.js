import React from 'react'
import BookshelfApiService from '../services/bookshelf-api-service'
import './ReviewForm.css'

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      textValue: ''
    }
    this.bookshelfItem = this.props.location.state.bookshelfItem
    this.bookshelf = this.props.location.state.bookshelf
    this.bookshelf = this.bookshelf.filter(item => {
      return item.book_id === this.bookshelfItem.book_id
    })

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
        this.setState({ textValue: ''})
      })
      .catch(this.context.setError)
  }



  render() {
    const reviews = this.bookshelf.map((bookshelfItem, i) => {
      return (
        <div key={i} className='displayed-review'>
          <h2>{bookshelfItem.review}</h2>
        </div>
      )
    })

    return (
      <div className='review-form-div'>
        <form className='addReview' onSubmit={this.handleSubmit}>
          <h2>Add Review</h2>
          <div>
            <h3>Here's what people are saying...</h3>
            {reviews}
          </div>
          <label htmlFor='review'>
            <h2>What did you think of {this.bookshelfItem.books.title}?</h2>
            <textarea
              required
              aria-label='Type your review...'
              id='review'
              name='review'
              cols='50'
              rows='10'
              value={this.state.textValue} onChange={this.handleChange}
              placeholder='Type your review...'
            />
          </label>
          <input type="submit" value="Submit" className='submit-review-button' />
          <input type='hidden' name='review' id='review' value='dummy' />
          <input type='hidden' name='rating' id='rating' value='1' />
        </form>
      </div>
    )
  }
}

export default ReviewForm