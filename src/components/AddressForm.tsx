import React from 'react'

interface Props {
    values: any
    onChange: any
    onClickNext: any
}

export const Form: React.FC<Props> = (props) => {
    return (
        <div>
            <input
                name='street'
                type='text'
                placeholder='street'
                onChange={props.onChange}
                value={props.values.street}
            >
            </input>
            <br></br>

            <input
                name='number'
                type='text'
                placeholder='number'
                onChange={props.onChange}
                value={props.values.number}
            >
            </input>
            <br></br>

            <select onChange={props.onChange} name='city'>
                <option value='city'>-- city --</option>
                <option value='Amsterdam'>Amsterdam</option>
                <option value='Rotterdam'>Rotterdam</option>
                <option value='Den Haag'>Den Haag</option>
            </select>
            <br></br>

            <input
                name='postalcode'
                type='text'
                placeholder='postalcode'
                onChange={props.onChange}
                value={props.values.postalcode}
            >
            </input>
            <br></br>

            <button type='button' onClick={props.onClickNext}>Back</button>
            <div>
            </div>
        </div>
    )
}

export default Form