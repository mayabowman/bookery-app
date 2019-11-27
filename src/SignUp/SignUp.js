import React from 'react'


function SignUp() {
  return (
    <div>
      <form className='signup-form'>
        <div>
          <label htmlFor='first-name'>First Name</label>
          <input
            type='text'
            name='first-name'
            id='first-name'
            placeholder='First Name'
          />
        </div>
        <div>
          <label htmlFor='last-name'>Last Name</label>
          <input
            type='text'
            name='last-name'
            id='last-name'
            placeholder='Last Name'
          />
        </div>
        <div>
          <label htmlFor='username'>Email</label>
          <input
            type='text'
            name='username'
            id='username'
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
          />
        </div>
        <button type='submit'>
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignUp