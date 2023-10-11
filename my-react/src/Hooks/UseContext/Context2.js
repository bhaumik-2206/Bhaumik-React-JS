import React, { useContext } from 'react'
import { Internal } from './UseContext'

const Context2 = () => {
    let { obj } = useContext(Internal);
    return (
        <h1>
            {obj.a}-{obj.b}
        </h1>
    )
}

export default Context2;