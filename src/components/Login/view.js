import React from 'react'

export default function View(props) {
  return (
    <div className='formClass'>
      <form onSubmit={props.onSubmit}>

        <p>
          <label>Name </label>
          <input
            type='text'
            value={props.name}
            name='name'
            placeholder='Your name'
            onChange={props.onChange}/>
        </p>

        <p>
          <label>Password </label>
          <input
          type='password'
          value={props.password}
          name='password'
          placeholder='Your password'
          onChange={props.onChange}/>
        </p>
        <button type='submit'>Go!</button>
      </form>
    </div>
  );
}
