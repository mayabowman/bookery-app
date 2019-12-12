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

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({textValue: event.target.value})
  }

  handleSubmit(event) {

    console.log('function handleSubmit called in ReviewForm')
    event.preventDefault()
    // const { bookshelfItem } = this.props.location.state
    const { text } = event.target.value
    console.log('text', event.target.value)
    BookshelfApiService.updateBookshelfItem(this.bookshelfItem.id, text)
      .then(() => {
        text.value = ''
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form className='addReview' onSubmit={this.handleSubmit}>
        <h2>Add Review</h2>
        <label htmlFor='review'>
          What did you think of {this.bookshelfItem.books.title}?
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
        <input type="submit" value="Submit" />
        {/* <div>
          <button
            type='submit'
            className='review-submit-button'
            onClick={e => {this.handleSubmit(e)}}
          >
            Post Review
          </button>
        </div> */}
        <input type='hidden' name='review' id='review' value='dummy' />
        <input type='hidden' name='rating' id='rating' value='1' />
      </form>
    )
  }
}

export default ReviewForm