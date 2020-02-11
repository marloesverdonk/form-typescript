import React from 'react'
import { State } from './FormContainer'

interface Props {
    values: State
}

export const Home: React.FC<Props> = (props) => {
    return (
        <div>
            <h1>Home</h1>
            {props.values.error}
        </div>)
}

export default Home


// Hoe gebruik je props bij Redirect of kan dat niet? 

// --> Home is verplaatst naar Formcontainer. Zo kunnen props worden meegegeven