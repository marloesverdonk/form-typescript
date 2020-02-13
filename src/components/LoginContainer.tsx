import React from 'react'
import { Redirect } from 'react-router-dom'
import { Login } from './Login'
import { State } from './FormContainer'
import { logInPromise } from '../api'


interface Props {
    values: State
    onChange: (newdata: State) => void
}


export class LoginContainer extends React.Component<Props, State>{

    onSubmit = async () => {
       logInPromise().then((b) => {if(b){this.props.onChange({ ...this.props.values, error: 'You are logged in' })}})
       .catch(_ => this.props.onChange({ ...this.props.values, error: 'Email or password incorrect!' })) // _ -> placeholder when you dont use the input

        // if (this.props.values.loginPassword === this.props.values.password && this.props.values.loginEmail === this.props.values.email) {
        //     this.props.onChange({ ...this.props.values, error: 'You are logged in' })
        // } else {
        //     this.props.onChange({ ...this.props.values, error: 'Email or password incorrect!' })
        // }
    }

    render() {
        return (
            <div>
                {this.props.values.step === 'login' ?
                    <div>
                        {<h3>{this.props.values.error}</h3>}
                        <Login
                            onSubmit={() => this.onSubmit()}
                            onChange={newLogin => this.props.onChange({ ...this.props.values, ...newLogin })}
                            values={this.props.values}
                        />
                    </div> :
                    <Redirect to='/home' />
                }
            </div>)
    }
}

export default LoginContainer


// Zou je een eigen state maken of gebruik je de state uit FormContainer? 
//      Wanneer zou je een eigen state maken?  --> eigenlijk nooit, proberen te vermijden
//      Wordt State goed gebruikt? --> ja

// Wanneer zou je Redirect gebruiken? --> dit is een goed moment 

