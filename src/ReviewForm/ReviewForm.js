import React from 'react'
// import config from '../config'

class ReviewForm extends React.Component {
  render() {
    return (
      <form className='addReview'>
        <h2>Add Review</h2>
        <label htmlFor='review'>What did you think?</label>
        <div>
          <textarea
            required
            aria-label='Type your review...'
            id='review'
            name='review'
            cols='30'
            rows='5'
            placeholder='Type your review...'
          ></textarea>
        </div>
        <div>
          <button type='submit'>
            Post Review
          </button>
        </div>
      </form>
    )
  }
}

export default ReviewForm