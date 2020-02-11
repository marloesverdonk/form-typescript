import React from 'react'
import Form from './Form'
import LoginContainer from './LoginContainer'

export interface State {
    email: string
    password: string
    street: string
    number: string
    city: string
    postalcode: string
    confirmPassword: string
    error: string

    loginemail: string
    loginpassword: string

    showPassword: boolean
    termsAccepted: boolean
    showNext: boolean
}

interface Props { }


export class FormContainer extends React.Component<Props, State>{
    state = {
        email: "",
        password: "",
        street: "",
        number: "",
        city: "city",
        postalcode: "",
        confirmPassword: "",
        error: "",

        loginemail: "",
        loginpassword: "",

        showPassword: false,
        termsAccepted: false,
        showNext: true
    }

    onSubmit = () => {
        if (!this.state.number || !this.state.street || this.state.city === 'city' || !this.state.postalcode) {
            this.setState({
                error: "Please fill in all fields"
            })
        } else if (!this.state.termsAccepted) {
            this.setState({
                error: "Please accept the terms"
            })
        } else {
            this.setState({
                error: "You are signed up!",
            })
        }
    }

    //     if (!this.state.termsAccepted) { 
    //         this.setState({
    //             error: "Please accept the terms"
    //         })
    //     } else {
    //         this.setState({
    //             error:
    //                 "You are signed up!",
    //         })
    //     }
    // }

    onClickNext = () => {
        if (!this.state.email.includes('@')) {
            this.setState({
                error: "Please fill in an emailadres"
            })
        } else if (!this.state.password || !this.state.password.match(/[A-Z]/g) || !this.state.password.match(/[0-9]/g)) {
            this.setState({
                error: "Please fill in a password (with a capital letter and a number)"
            })
        } else if (this.state.password !== this.state.confirmPassword) {
            this.setState({
                error: "Passwords don't match"
            })
        } else {
            this.setState({
                showNext: true,
                error: ""
            })
        }
    }
        //     this.setState({
        //         showNext: true
        //     })
        // }

        render() {
            return (
                <div>

                    {this.state.error !== 'You are signed up!' && this.state.error !== 'You are logged in' && this.state.error !== 'Email or password incorrect!' ?
                        <Form
                            onSubmit={() => this.onSubmit()}
                            onChange={newState => this.setState(newState)}
                            values={this.state}
                            onClickNext={this.onClickNext}
                        /> :
                        <LoginContainer
                            values={this.state}
                            onChange={newState => this.setState(newState)}
                        />
                    }
                </div>)
        }
    }