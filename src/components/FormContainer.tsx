import React from 'react'
import Form from './Form'
import LoginContainer from './LoginContainer'
import { RouteComponentProps } from 'react-router-dom'
import { Home } from './Home'

export type State = {
    error: string
} & (SignUp | LoginEmail | Home)

interface Props { }

export interface Home {
    step: 'home'
}

export interface LoginEmail {
    step: 'login'
    loginEmail: string
    loginPassword: string
}

export interface SignUp {
    step: 'first' | 'second'
    emailData: Email
    addressData: Address
}

export interface Address {
    // step: 'second'
    street: string
    number: string
    postalCode: string
    city: string
    termsAccepted: boolean
}

export interface Email {
    // step: 'first'
    email: string
    password: string
    confirmPassword: string
    showPassword: boolean
}

export class FormContainer extends React.Component<RouteComponentProps<Props>, State>{

    constructor(props: RouteComponentProps<Props>) {
        super(props)
        if (props.location.pathname === '/home') {
            this.state = {
                step: 'home',
                error: ""
            }
        } else if (props.location.pathname === '/') {
            this.state = {
                step: 'first',
                error: "",
                emailData: {
                    email: "",
                    password: "",
                    confirmPassword: "",
                    showPassword: false,
                },
                addressData: {
                    street: "",
                    number: "",
                    postalCode: "",
                    city: "",
                    termsAccepted: false,
                }
            }
        } else {
            this.state = {
                step: 'login',
                error: "",
                loginEmail: "",
                loginPassword: "",
            }
        }
    }

    validateNext = () => {
        if (this.state.step === 'first') {
            if (!this.state.emailData.email.includes('@')) {
                return "Please fill in an emailadres"
            } else if (!this.state.emailData.password || !this.state.emailData.password.match(/[A-Z]/g) || !this.state.emailData.password.match(/[0-9]/g)) {
                return "Please fill in a password (with a capital letter and a number)"
            } else if (this.state.emailData.password !== this.state.emailData.confirmPassword) {
                return "Passwords don't match"
            } else {
                return ""
            }
        } else {
            return ""
        }
    }

    onClickNext = () => {
        const error = this.validateNext()
        if (error === "") {
            this.setState({
                step: 'second',
                error: error,
            })
        } else {
            this.setState({
                error: error,
            })
        }
    }

    onClickBack = () => {
        this.setState({
            step: 'first',
        })
    }

    validateSubmit = () => {
        if (this.state.step === 'second') {
            if (!this.state.addressData.number || !this.state.addressData.street || this.state.addressData.city === 'city' || !this.state.addressData.postalCode) {
                return "Please fill in all fields"
            } else if (!this.state.addressData.termsAccepted) {
                return "Please accept the terms"
            } else {
                return "You are signed up!"
            }
        } else {
            return ""
        }
    }

    onSubmit = () => {
        const error = this.validateSubmit()
        this.setState({
            error: error,
            step: 'login'
        })
    }

    render() {
        if (this.state.step === 'home') {
            return <div><Home values={this.state} /></div>
        } else {
            return (
                <div>
                    {this.state.step === 'first' || this.state.step === 'second' ? // || 'second'?
                        <Form
                            onSubmit={() => this.onSubmit()}
                            onChange={newSignUp => this.setState({...this.state, ...newSignUp})}
                            values={this.state}
                            onClickNext={() => this.onClickNext()}
                        onClickBack={() => this.onClickBack()}
                        /> :
                        this.state.step === 'login' ?
                            <LoginContainer
                                values={this.state}
                                onChange={newState => this.setState(newState)}
                            /> : <></>
                    }
                </div>)
        }
    }
}