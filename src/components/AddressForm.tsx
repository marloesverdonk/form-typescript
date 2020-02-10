import React from 'react'
import { State } from './FormContainer'

interface Props {
    values: State // Moet dit State ipv Address zijn?
    onChange: (newAddress: Address) => void
}

interface Address {
    street: string
    number: string
    postalcode: string
    city: string
    showNext: boolean
    termsAccepted: boolean
}

export const AddressForm: React.FC<Props> = (props) => {
    return (
        <div>
            <input
                name='street'
                type='text'
                placeholder='street'
                onChange={(event) => props.onChange({ ...props.values, street: event.currentTarget.value })} // alleen State.street wordt vervangen

                value={props.values.street}
            >
            </input>
            <br></br>

            <input
                name='number'
                type='text'
                placeholder='number'
                onChange={(event) => props.onChange({ ...props.values, number: event.currentTarget.value })}
                value={props.values.number}
            >
            </input>
            <br></br>

            <select onChange={(event) => props.onChange({ ...props.values, city: event.currentTarget.value })} name='city' value={props.values.city}>
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
                onChange={(event) => props.onChange({ ...props.values, postalcode: event.currentTarget.value })}
                value={props.values.postalcode}
            >
            </input>
            <br></br>

            <button type='button' onClick={() => props.onChange({ ...props.values, showNext: false })}>Back</button>
        </div>
    )
}

export default AddressForm