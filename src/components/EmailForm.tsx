import React from 'react'
import { State, Email } from './FormContainer'

interface Props {
    values: State
    onChange: (newEmail: Email) => void
    onClickNext: () => void
}



export const Form: React.FC<Props> = (props) => {
    return props.values.step === 'first' ? (
        <div>
            <label></label>
            <input
                name='email'
                type='text'
                placeholder='email'
                onChange={event => {if(props.values.step === 'first') props.onChange({ ...props.values.emailData, email: event.currentTarget.value })}}
                value={props.values.emailData.email}
            >
            </input>
            <br></br>

            <input
                name='password'
                type={props.values.emailData.showPassword ? 'text' : 'password'}
                placeholder='password'
                onChange={event => {if(props.values.step === 'first') props.onChange({ ...props.values.emailData, password: event.currentTarget.value })}}
                value={props.values.emailData.password}
            >
            </input>
            <br></br>

            <input
                name='confirmPassword'
                type={props.values.emailData.showPassword ? 'text' : 'password'}
                placeholder='confirm password'
                onChange={event => {if(props.values.step === 'first') props.onChange({ ...props.values.emailData, confirmPassword: event.currentTarget.value })}}
                value={props.values.emailData.confirmPassword}
            >
            </input>
            <br></br>

            <button type='button' onClick={props.values.emailData.showPassword ?
                () => {if(props.values.step === 'first')props.onChange({ ...props.values.emailData, showPassword: false })} :
                () => {if(props.values.step === 'first')props.onChange({ ...props.values.emailData, showPassword: true })}}>Show password
            </button>

            <button type='button' onClick={props.onClickNext}>Next</button>
            <br></br>
        </div>
    ) : <></>
}

export default Form