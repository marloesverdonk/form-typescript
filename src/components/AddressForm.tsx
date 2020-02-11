import React from 'react'
import { Address } from './FormContainer'

interface Props {
    values: Address // Moet dit State ipv Address zijn? --> in dit geval kan het allebei omdat alleen values van Address worden gebruikt, soms is het nodig om het te veranderen naar State
    onChange: (newAddress: Address) => void
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
                onChange={(event) => props.onChange({ ...props.values, postalCode: event.currentTarget.value })}
                value={props.values.postalCode}
            >
            </input>
            <br></br>

            <button type='button' onClick={() => props.onChange({ ...props.values, showNext: false })}>Back</button>
        </div>
    )
}

export default AddressForm