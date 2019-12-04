import TokenService from '../services/token-service'
import config from '../config'

const BookshelfApiService = {
  postReview(bookshelfId, text) {
    return fetch(`${config.API_ENDPOINT}/bookshelf`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        bookshelf_id: bookshelfId,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
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