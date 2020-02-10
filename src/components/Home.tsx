import React from 'react'

interface Props { }

export const Home: React.FC<Props> = (props) => {
    return (
        <div>
            <h1>Home</h1>
            {console.log(props)}
        </div>)
}

export default Home