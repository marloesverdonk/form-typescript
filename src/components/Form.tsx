import React from 'react'
import EmailForm from './EmailForm'
import AddressForm from './AddressForm'

interface Props {
    values: any
    onSubmit: any
    onChange: any
    onClickPassword: any
    onClickTerms: any
    onClickNext: any
}

export const Form: React.FC<Props> = (props) => {
    return (
        <div>
            <form onSubmit={props.onSubmit}>

                {!props.values.showNext ?
                    <EmailForm
                        onChange={props.onChange}
                        values={props.values}
                        onClickPassword={props.onClickPassword}
                        onClickNext={props.onClickNext}
                    /> :
                    <div>
                        <AddressForm
                            onChange={props.onChange}
                            values={props.values}
                            onClickNext={props.onClickNext}
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