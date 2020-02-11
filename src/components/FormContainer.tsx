import React from 'react'
import Form from './Form'
import LoginContainer from './LoginContainer'
import { RouteComponentProps } from 'react-router-dom'
import { Home } from './Home'

export type State = { // --> interface is veranderd naar type, dit is vooral een syntax ding
    error: string
} & Address & Email & LoginEmail // --> voorkomt dat je verschillende types gebruikt bij dezelfde parameter + je hoeft ze maar 1x te typen

interface Props { }

export interface Address {
    street: string
    number: string
    postalCode: string
    city: string
    showNext: boolean
    termsAccepted: boolean
}

export interface Email {
    email: string
    password: string
    confirmPassword: string
    showNext: boolean
    showPassword: boolean
}

export interface LoginEmail {
    loginEmail: string
    loginPassword: string
}

export class FormContainer extends React.Component<RouteComponentProps<Props> //command dot gebruiken!

    , State>{
    state = {
        email: "",
        password: "",
        street: "",
        number: "",
        city: "city",
        postalCode: "",
        confirmPassword: "",
        error: "",
        loginEmail: "",
        loginPassword: "",

        showPassword: false,
        termsAccepted: false,
        showNext: false
    }


    validateSubmit = () => {
        if (!this.state.number || !this.state.street || this.state.city === 'city' || !this.state.postalCode) {
            return "Please fill in all fields"
        } else if (!this.state.termsAccepted) {
            return "Please accept the terms"
        } else {
            return "You are signed up!"
        }
    }

    onSubmit = () => {
        const error = this.validateSubmit()
        this.setState({
            error: error
        })
    }

    validateNext = () => { // --> een speciale callback maken met logica
        if (!this.state.email.includes('@')) {
            return "Please fill in an emailadres"
        } else if (!this.state.password || !this.state.password.match(/[A-Z]/g) || !this.state.password.match(/[0-9]/g)) {
            return "Please fill in a password (with a capital letter and a number)"
        } else if (this.state.password !== this.state.confirmPassword) {
            return "Passwords don't match"
        } else {
            return ""
        }
    }

    onClickNext = () => {
        const error = this.validateNext()
        this.setState({
            error: error,
            showNext: error === ""
        })
    }
  
    render() {
        if (this.props.location.pathname === "/home") {
            return <div><Home values={this.state} /> This text comes from FormContainer! </div>
        } else {
            return (
                <div>

                    {this.state.error !== 'You are signed up!' && this.state.error !== 'You are logged in' && this.state.error !== 'Email or password incorrect!' ?
                        <Form
                            onSubmit={() => this.onSubmit()}
                            onChange={newState => this.setState(newState)}
                            values={this.state}
                            onClickNext={() => this.onClickNext()}
                        /> :
                        <LoginContainer
                            values={this.state}
                            onChange={newState => this.setState(newState)}
                        />
                    }
                </div>)
        }
    }
}