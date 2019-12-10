import React from 'react'
import BookshelfContext from '../contexts/BookshelfContext'
import BookshelfApiService from '../services/bookshelf-api-service'
import './ReviewForm.css'

class ReviewForm extends React.Component {
  static contextType = BookshelfContext

  handleSubmit = e => {
    e.preventDefault()
    const { bookshelf } = this.context
    const { text } = e.target
    BookshelfApiService.updateBookshelfItem(bookshelf.books.id, text.value)
      .then(this.context.updateReview)
      .then(() => {
        text.value = ''
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form className='addReview'>
        <h2>Add Review</h2>
        <label htmlFor='review'>What did you think?</label>
        <div className='review-textarea'>
          <textarea
            required
            aria-label='Type your review...'
            id='review'
            name='review'
            cols='50'
            rows='10'
            placeholder='Type your review...'
          ></textarea>
        </div>
        <div>
          <button type='submit' className='review-submit-button'>
            Post Review
          </button>
        </div>
        <input type='hidden' name='review' id='review' value='dummy' />
        <input type='hidden' name='rating' id='rating' value='1' />
      </form>
    )
  }
}

export default ReviewForm