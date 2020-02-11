import React from 'react'
import { State } from './FormContainer'

interface Props {
    values: State
    onChange: (newLogin: Email) => void
    onSubmit: () => void
}

interface Email {
    loginemail: string
    loginpassword: string
}

export const Login: React.FC<Props> = (props) => {
    return (
        <div>
            {<h1>Log in</h1>}
            <form onSubmit={e => {
                e.preventDefault()
                props.onSubmit()
            }}>
                <label></label>
                <input
                    name='email'
                    type='text'
                    placeholder='email'
                    onChange={event => props.onChange({ ...props.values, loginemail: event.currentTarget.value })}
                    value={props.values.loginemail}
                >
                </input>
                <br></br>

                <input
                    name='password'
                    type={props.values.showPassword ? 'text' : 'password'}
                    placeholder='password'
                    onChange={event => props.onChange({ ...props.values, loginpassword: event.currentTarget.value })}
                    value={props.values.loginpassword}
                >
                </input>
                <br></br>

                <button type='submit'>Submit</button>

                <br></br>
            </form>
        </div>
    )
}

export default Login