import React from 'react'

interface Props {
    onSubmit: any
    onChange: any
    values: any
    showPassword: any
    onClickPassword: any
    termsAccepted: any
    onClickTerms: any
}

export const Form: React.FC<Props> = (props) => {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
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
                    type={props.showPassword ? 'text' : 'password'}
                    placeholder='password'
                    onChange={props.onChange}
                    value={props.values.password}
                >
                </input>

                <br></br>

                <input
                    name='confirmPassword'
                    type={props.showPassword ? 'text' : 'password'}
                    placeholder='confirm password'
                    onChange={props.onChange}
                    value={props.values.confirmPassword}
                >
                </input>

                <br></br>

                <button type='button' onClick={props.onClickPassword}>Show password</button>

                <br></br>
                <br></br>

                <label>Accept terms</label>
                <input
                    type="checkbox"
                    onClick={props.onClickTerms}
                />

                <br></br>

                <button type='submit'>
                    Submit
                </button>
            </form>
            <div>
            </div>
        </div>
    )
}

export default Form