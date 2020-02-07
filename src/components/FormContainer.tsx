import React from 'react'
import Form from './Form'

export interface State {
    email: string
    password: string
    street: string
    number: string
    city: string
    postalcode: string
    confirmPassword: string
    error: string

    showPassword: boolean
    termsAccepted: boolean
    showNext: boolean
}

interface Props { }

export default class FormContainer extends React.Component<Props, State>{
    state = {
        email: "",
        password: "",
        street: "",
        number: "",
        city: "city",
        postalcode: "",
        confirmPassword: "",
        error: "",

        showPassword: false,
        termsAccepted: false,
        showNext: false
    }

    onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!this.state.number || !this.state.street || this.state.city === 'city'|| !this.state.postalcode) {
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

    public onChange = (event: { target: { name: string; value: unknown } }) => {
        const newState = { [event.target.name]: event.target.value } as Pick<State, keyof State>
        this.setState(newState)
        console.log(this.state.city)
    }

    onClickPassword = () => {
        if (this.state.showPassword) {
            this.setState({ showPassword: false })
        } else {
            this.setState({ showPassword: true })
        }
    }

    onClickTerms = () => {
        if (this.state.termsAccepted) {
            this.setState({ termsAccepted: false })
        } else {
            this.setState({ termsAccepted: true })
        }
    }

    onClickNext = () => {
        if (this.state.showNext) {
            this.setState({
                showNext: false,
                error: ""
            })
        } else {
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
    }

    render() {
        return (
            <div>
                {<h3>{this.state.error}</h3>}
                {this.state.error !== 'You are signed up!' ?
                    <Form
                        onSubmit={this.onSubmit}
                        onChange={this.onChange}
                        values={this.state}
                        onClickPassword={this.onClickPassword}
                        onClickTerms={this.onClickTerms}
                        onClickNext={this.onClickNext}
                    /> :
                    <br></br>
                }
            </div>)
    }
}