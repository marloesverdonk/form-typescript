import React from 'react'
import { State, LoginEmail } from './FormContainer'

interface Props {
    values: State
    onChange: (newLogin: LoginEmail) => void
    onSubmit: () => void
}

export const Login: React.FC<Props> = (props) => {
    return props.values.step === 'login' ? (
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
                    onChange={event => {if(props.values.step === 'login') props.onChange({ ...props.values, loginEmail: event.currentTarget.value })}}
                    value={props.values.loginEmail}
                >
                </input>
                <br></br>

                <input
                    name='password'
                    type='password'
                    placeholder='password'
                    onChange={event => {if(props.values.step === 'login')props.onChange({ ...props.values, loginPassword: event.currentTarget.value })}}
                    value={props.values.loginPassword}
                >
                </input>
                <br></br>

                <button type='submit'>Submit</button>

                <br></br>
            </form>
        </div>
    ) : <></>
}

export default Login