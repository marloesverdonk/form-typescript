import React from 'react'
import EmailForm from './EmailForm'
import AddressForm from './AddressForm'
import { State, SignUp } from './FormContainer'

interface Props {
    values: State
    onSubmit: () => void
    onChange: (newdata: SignUp ) => void
    onClickNext: () => void
    onClickBack: () => void
}

export const Form: React.FC<Props> = (props) => {
    return (
        <div>
            {<h1>Sign up</h1>}
            {<h3>{props.values.error}</h3>}
            <form onSubmit={e => {
                e.preventDefault()
                props.onSubmit()
            }}>

                {props.values.step === 'first' ?
                    <EmailForm
                        onChange={(newEmail) => {if(props.values.step === 'first'){props.onChange({ ...props.values, emailData: newEmail })}}}
                        values={props.values}
                        onClickNext={props.onClickNext}
                    /> : 
                    props.values.step === 'second' ?
                    <div>
                        <AddressForm
                            onChange={(newAddress) => {if(props.values.step === 'second'){props.onChange({ ...props.values, addressData: newAddress })}}} // ingevoerde address form wordt toegevoegd aan de State
                            values={props.values.addressData}
                            onClickBack={props.onClickBack}
                        />
                        <label>Accept terms</label>
                        <input
                            type="checkbox"
                            defaultChecked={props.values.addressData.termsAccepted}
                            onClick={props.values.addressData.termsAccepted ?
                                () => {if(props.values.step === 'second') props.onChange({ ...props.values, addressData: {...props.values.addressData, termsAccepted: false }})} :
                                () => {if(props.values.step === 'second') props.onChange({ ...props.values, addressData: {...props.values.addressData, termsAccepted: false }})}}
                        />
                        <br></br>
                        <button type='submit'>Submit</button>
                    </div>
                    : <> </>
                } 
            </form>
        </div>
    )
}

export default Form