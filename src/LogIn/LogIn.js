import React from 'react'
import TokenService from '../services/token-service'
import AuthApiService from '../services/auth-api-service'

class LogIn extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitJwtAuth = e => {
    e.preventDefault()
    this.setState({ error: null })
    const { email, password } = e.target

    console.log('login form submitted')
    console.log(email, password)

    AuthApiService.postLogin({
      email: email.value,
      password: password.value
    })
      .then(res => {
        email.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error})
      })
  }
  render() {
    const { error } = this.state
    return (
      <section>
        <form
          id='log-in'
          onSubmit={this.handleSubmitJwtAuth}
        >
          <div className='username-login'>
            <label for='username-login'>Email: </label>
            <input type='email' name='email' required />
          </div>
          <div className='password-login'>
            <label for='password-login'>Password: </label>
            <input type='password' name='password' required />
          </div>
          <div>
            <button type='submit'>
              Log In
            </button>
          </div>
        </form>
      </section>
    )
  }
}

export default LogIn