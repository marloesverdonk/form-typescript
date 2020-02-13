import React from 'react'
import { Redirect } from 'react-router-dom'
import { Login } from './Login'
import { State } from './FormContainer'
import { logInPromise } from '../api'


interface Props {
    values: State
    onChange: (newState: State) => void
}

export class LoginContainer extends React.Component<Props, State>{

    onSubmit = async () => {
        if (this.props.values.step === 'login') {

            logInPromise(this.props.values.loginEmail, this.props.values.loginPassword)
                .then((message) => {
                    if (message === "") {
                        this.props.onChange({
                            step: 'home',
                            error: ""
                        })
                    } else {
                        this.props.onChange({
                            ...this.props.values,
                            error: message
                        })
                    }
                }) 
                .catch(console.error)
        }
    }

    render() {
        return (
            <div>
                {this.props.values.step === 'login' ?
                    <div>
                        {<h3>{this.props.values.error}</h3>}
                        <Login
                            onSubmit={() => this.onSubmit()}
                            onChange={newLogin => {if(this.props.values.step === 'login') this.props.onChange({ ...this.props.values, ...newLogin })}}
                            values={this.props.values}
                        />
                    </div> :
                    <Redirect to='/home' />
                }
            </div>)
    }
}

export default LoginContainer



