import React from 'react'

interface Props {
    values: any
    onChange: any
    onClickPassword: any
    onClickNext: any
}

export const Form: React.FC<Props> = (props) => {
    return (
        <div>
            <label></label>
            <input
                name='email'
                type='text'
                placeholder='email'
                onChange={props.onChange}
                value={props.values.email}
            >
            </input>
            <br></br>

            <input
                name='password'
                type={props.values.showPassword ? 'text' : 'password'}
                placeholder='password'
                onChange={props.onChange}
                value={props.values.password}
            >
            </input>
            <br></br>

            <input
                name='confirmPassword'
                type={props.values.showPassword ? 'text' : 'password'}
                placeholder='confirm password'
                onChange={props.onChange}
                value={props.values.confirmPassword}
            >
            </input>
            <br></br>

            <button type='button' onClick={props.onClickPassword}>Show password</button>
            <button type='button' onClick={props.onClickNext}>Next</button>
            <br></br>
            <div>
            </div>
        </div>
    )
}

export default Form