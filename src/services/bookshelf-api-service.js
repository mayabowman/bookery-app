import TokenService from '../services/token-service'
import config from '../config'

const BookshelfApiService = {
  postBookshelfItem(book_id, review, rating) {
    return fetch(`${config.API_ENDPOINT}/bookshelf`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        book_id: book_id,
        review: review,
        rating: rating
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )

  },

  updateBookshelfItem(bookshelfItemId, review) {
    return fetch(`${config.API_ENDPOINT}/bookshelf/${bookshelfItemId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        review: review,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res
      )
  },

  deleteBookshelfItem(bookshelfItemId) {
    return fetch(`${config.API_ENDPOINT}/bookshelf/${bookshelfItemId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res
      )
  },
}

export default BookshelfApiService