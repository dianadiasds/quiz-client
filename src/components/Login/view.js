import React from 'react'

export default function View(props) {
    //const {onSubmit} = props
    return <div>
        
        <form onSubmit={props.onSubmit}>
            <label>Name</label>
            <input type='text'value={props.name} name='name' placeholder='Your name' onChange={props.onChange}/>
            <label>Password</label>
            <input type='text' value={props.password} name='password' placeholder='Your password' onChange={props.onChange}/>
            <button type='submit'>Go!</button>
        </form>
    </div>

}
