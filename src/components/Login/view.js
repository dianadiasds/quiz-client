import React from 'react'

export default function View(props) {
    const {onSubmit} = props
    return <div>
        <h3>Login</h3>
        <form onSubmit={onSubmit}>
            <label>User</label>
            <input type='text'/>
            <label>Password</label>
            <input type='text'/>
            <button type='submit'>login</button>
        </form>
    </div>

}
