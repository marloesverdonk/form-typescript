import React from 'react'
import { Redirect } from 'react-router-dom'
import { Login } from './Login'
import { State } from './FormContainer'


interface Props {
    values: State
    onChange: (newdata: State) => void
}


export class LoginContainer extends React.Component<Props, State>{

    onSubmit = () => {
        if (this.props.values.loginpassword === this.props.values.password && this.props.values.loginemail === this.props.values.email) {
            this.props.onChange({ ...this.props.values, error: 'You are logged in' })
        } else {
            this.props.onChange({ ...this.props.values, error: 'Email or password incorrect!' })
        }
    }

    render() {
        return (
            <div>
                {this.props.values.error !== 'You are logged in' ?
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
//      Wanneer zou je een eigen state maken? 
//      Wordt State goed gebruikt?


// Wanneer zou je Redirect gebruiken? 
//      Zou je een andere manier van Routing toepassen?
