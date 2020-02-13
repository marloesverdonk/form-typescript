import { Email, Address } from './components/FormContainer'


export let logInPromise: (logInEmail: string, logInPassword: string) => Promise<string> = (logInEmail, logInPassword ) =>
(logInEmail === '@' && logInPassword === 'W1')?
Promise.resolve(""):
Promise.resolve("Incorrect email or password")


export let onNextPromise: (emailData: Email) => Promise<string> = (emailData) =>
  !emailData.email.includes('@') ?
    Promise.resolve('Please fill in an emailadres') :
    // !emailData.password || !emailData.password.match(/[A-Z]/g) || !emailData.password.match(/[0-9]/g) ?
    //   Promise.resolve('Please fill in a password (with a capital letter and a number') :
    //   emailData.password !== emailData.confirmPassword ?
    //     Promise.resolve(`Passwords don't match`) :
        Promise.resolve("")



export let onSubmitPromise: (addressData: Address) => Promise<string> = (addressData) =>
  // !addressData.number || !addressData.street || addressData.city === 'city' || !addressData.postalCode ?
  //   Promise.resolve('Please fill in all fields') :
    !addressData.termsAccepted ?
      Promise.resolve("Please accept the terms") :
      Promise.resolve("")




















      // onSubmit = async () => {
//   logInPromise().then((b) => {if(b){this.props.onChange({ ...this.props.values, error: 'You are logged in' })}})
//   .catch(_ => this.props.onChange({ ...this.props.values, error: 'Email or password incorrect!' })) // _ -> placeholder when you dont use the input

// let counter = 0
// export let logInPromise: () => Promise<boolean> = () =>
//   ++counter % 4 === 0 ?
//     Promise.resolve(true)
//     :
//     // Promise.reject("The server is busy with lots of other requests. Please try again later.")
//     Promise.resolve(false)