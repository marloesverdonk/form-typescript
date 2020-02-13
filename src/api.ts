

let counter = 0
export let logInPromise : () => Promise<boolean> = () =>
  ++counter % 4 === 0 ?
    Promise.resolve(true)
  :
   // Promise.reject("The server is busy with lots of other requests. Please try again later.")
   Promise.resolve(false)


    // give it inputs email/password
    // add some logic: if password contains letter it fails else ... 

    // resolve: depending on the value do something

  