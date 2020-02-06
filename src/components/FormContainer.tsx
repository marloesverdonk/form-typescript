import React from 'react'
import Form from './Form'

interface State {
    email: string
    password: string
    confirmPassword: string
    error: string
    isSignedUp: boolean
}

interface Props { }

export default class FormContainer extends React.Component<Props, State>{
    state = {
        email: "",
        password: "",
        confirmPassword: "",
        error: "Please sign up",
        isSignedUp: false
    }

    onSubmit = (event: any) => {
        event.preventDefault()

        if (!this.state.email.includes('@')) {
            this.setState({
                error: "Please fill in an emailadres"
            })
        } else if (!this.state.password || !this.state.password.match(/[A-Z]/g) || !this.state.password.match(/[0-9]/g)) {
            this.setState({
                error: "Please fill in a password with a capital and a number"
            })
        } else if (this.state.password !== this.state.confirmPassword) {
            this.setState({
                error: "Passwords don't match"
            })
        } else {
            this.setState({
                email: "",
                password: "",
                confirmPassword: "",
                isSignedUp: true,
                error: "You are signed up"
            })
        }
    }

    public onChange = (event: { target: {name: any; value: any} }) => {
        const newState = { [event.target.name]: event.target.value } as Pick<State, keyof State>
        this.setState(newState)
    }

    render() {
        return (
            <div>
                <Form
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    values={this.state}
                />
                {this.state.error}
            </div>)
    }
}