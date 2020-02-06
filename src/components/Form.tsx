import React from 'react'

interface Props {
    onSubmit: any
    onChange: any
    values: any
}

export const Form: React.FC<Props> = (props) => {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <input
                    name='email'
                    type='text'
                    placeholder='email'
                    onChange={props.onChange}
                    value={props.values.email}
                >
                </input>
                <input
                    name='password'
                    type='text'
                    placeholder='password'
                    onChange={props.onChange}
                    value={props.values.password}
                >
                </input>
                <input
                    name='confirmPassword'
                    type='text'
                    placeholder='confirm password'
                    onChange={props.onChange}
                    value={props.values.confirmPassword}
                >
                </input>
                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form