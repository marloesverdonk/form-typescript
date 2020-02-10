import React from 'react'
import { State } from './FormContainer'

interface Props {
    values: State
    onChange: (newEmail: Email) => void
    onClickNext: any
}

interface Email {
    email: string
    password: string
    confirmPassword: string
    showNext: boolean
    showPassword: boolean
}

export const Form: React.FC<Props> = (props) => {
    return (
        <div>
            <label></label>
            <input
                name='email'
                type='text'
                placeholder='email'
                onChange={event => props.onChange({ ...props.values, email: event.currentTarget.value })}
                value={props.values.email}
            >
            </input>
            <br></br>

            <input
                name='password'
                type={props.values.showPassword ? 'text' : 'password'}
                placeholder='password'
                onChange={event => props.onChange({ ...props.values, password: event.currentTarget.value })}
                value={props.values.password}
            >
            </input>
            <br></br>

            <input
                name='confirmPassword'
                type={props.values.showPassword ? 'text' : 'password'}
                placeholder='confirm password'
                onChange={event => props.onChange({ ...props.values, confirmPassword: event.currentTarget.value })}
                value={props.values.confirmPassword}
            >
            </input>
            <br></br>

            <button type='button' onClick={props.values.showPassword ?
                () => props.onChange({ ...props.values, showPassword: false }) :
                () => props.onChange({ ...props.values, showPassword: true })}>Show password
            </button>

            <button type='button' onClick={props.onClickNext}>Next</button>
            <br></br>
        </div>
    )
}

export default Form