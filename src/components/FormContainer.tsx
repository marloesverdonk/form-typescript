import React from 'react'
import Form from './Form'
import LoginContainer from './LoginContainer'
import { RouteComponentProps } from 'react-router-dom'
import { Home } from './Home'
import { onNextPromise, onSubmitPromise } from '../api'

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

    onClickNext = async () => {
        if (this.state.step === 'first') {

            onNextPromise(this.state.emailData)
            .then((message) => {
                if (message === "") {
                    this.setState({
                        step: 'second',
                        error: ""
                    })
                } else {
                    this.setState({
                        error: message
                    })
                }
            })
            .catch(console.error)
        }
    }

    onClickBack = () => {
        this.setState({
            step: 'first',
        })
    }

    onSubmit = () => {
        if (this.state.step === 'second') {

            onSubmitPromise(this.state.addressData)
            .then((message) => {
                if (message === "") {
                    this.setState({
                        step: 'login',
                        error: "",
                        loginEmail: "",
                        loginPassword: "",
                    })
                } else {
                    this.setState({
                        error: message
                    })
                }
            })
            .catch(console.error)
        }
    }

    render() {
        if (this.state.step === 'home') {
            return <div><Home values={this.state} /></div>
        } else {
            return (
                <div>
                    {this.state.step === 'first' || this.state.step === 'second' ?
                        <Form
                            onSubmit={() => this.onSubmit()}
                            onChange={newSignUp => this.setState({ ...this.state, ...newSignUp })}
                            values={this.state}
                            onClickNext={() => this.onClickNext()}
                            onClickBack={() => this.onClickBack()}
                        /> :
                        this.state.step === 'login' ?
                            <LoginContainer
                                values={this.state}
                                onChange={newLogin => this.setState({ ...this.state, ...newLogin})}
                            /> : <></>
                    }
                </div>)
        }
    }
}

