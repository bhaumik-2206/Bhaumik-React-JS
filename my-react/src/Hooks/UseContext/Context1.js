import React, { useContext } from 'react'
import UserData from './MainContext'
import { Internal } from './UseContext'

const Context1 = () => {
    const name = useContext(UserData);
    // const context = useContext(Internal);
    // console.log(context)
    return (
        <h1>
            {name}
        </h1>
    )
}

export default Context1;