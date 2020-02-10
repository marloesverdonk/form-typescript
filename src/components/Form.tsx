import React from 'react'
import EmailForm from './EmailForm'
import AddressForm from './AddressForm'
import { State } from './FormContainer'

interface Props {
    values: State
    onSubmit: () => void
    onChange: (newdata: State) => void
    onClickNext: () => void
}

export const Form: React.FC<Props> = (props) => {
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                props.onSubmit()
            }}>

                {!props.values.showNext ?
                    <EmailForm
                        onChange={(newEmail) => props.onChange({ ...props.values, ...newEmail })}
                        values={props.values}
                        onClickNext={props.onClickNext}
                    /> :
                    <div>
                        <AddressForm
                            onChange={(newAddress) => props.onChange({ ...props.values, ...newAddress })} // ingevoerde address form wordt toegevoegd aan de State
                            values={props.values}
                        />
                        <label>Accept terms</label>
                        <input
                            type="checkbox"
                            onClick={() => props.onChange({ ...props.values, termsAccepted: true })}
                        />
                        <br></br>
                        <button type='submit'>Submit</button>
                    </div>
                }
            </form>
        </div>
    )
}

export default Form