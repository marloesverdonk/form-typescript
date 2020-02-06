import React from 'react'
import Form from './Form'

interface State {
    email: string
    password: string
    confirmPassword: string
    error: string
    isSignedUp: boolean
    showPassword: boolean
    termsAccepted: boolean
}

interface Props { }

export default class FormContainer extends React.Component<Props, State>{
    state = {
        email: "",
        password: "",
        confirmPassword: "",
        error: "Please sign up",
        isSignedUp: false,
        showPassword: false,
        termsAccepted: false
    }

    onSubmit = (event: any) => {
        event.preventDefault()

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
        } else if (!this.state.termsAccepted) {
            this.setState({
                error: "Please accept the terms"
            })
        } else {
            this.setState({
                email: "",
                password: "",
                confirmPassword: "",
                isSignedUp: true,
                error: "You are signed up",
                termsAccepted: false
            })
        }
    }

    public onChange = (event: { target: { name: any; value: any } }) => {
        const newState = { [event.target.name]: event.target.value } as Pick<State, keyof State>
        this.setState(newState)
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


    render() {
        return (
            <div>

                {<h3>{this.state.error}</h3>}

                <Form
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    values={this.state}
                    showPassword={this.state.showPassword}
                    onClickPassword={this.onClickPassword}
                    termsAccepted={this.state.termsAccepted}
                    onClickTerms={this.onClickTerms}
                />

            </div>)
    }
}