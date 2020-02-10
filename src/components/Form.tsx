import React from 'react'
import EmailForm from './EmailForm'
import AddressForm from './AddressForm'
import { State } from './FormContainer'

interface Props {
    values: State
    onSubmit: () => void
    onChange: (newdata: State) => void
    onClickPassword: any
    onClickTerms: any
    onClickNext: any
}

export const Form: React.FC<Props> = (props) => {
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                props.onSubmit()}}>

                {!props.values.showNext ?
                    <EmailForm
                        onChange={(newEmail) => props.onChange({...props.values, ...newEmail})}
                        values={props.values}
                        onClickPassword={props.onClickPassword}
                        onClickNext={props.onClickNext}
                    /> :
                    <div>
                        <AddressForm
                            onChange={(newAddress) => props.onChange({...props.values, ...newAddress}) }
                            // ingevoerde address form wordt toegevoegd aan de State

                            values={props.values}
                           // onClickNext={props.onClickNext}
                        />
                        <label>Accept terms</label>
                        <input
                            type="checkbox"
                            onClick={props.onClickTerms}
                        />
                        <br></br>
                        <button type='submit'>Submit</button>
                    </div>
                }
            </form>
            <div>
            </div>
        </div>
    )
}

export default Form