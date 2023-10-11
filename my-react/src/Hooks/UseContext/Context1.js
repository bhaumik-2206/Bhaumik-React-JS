import React, { useContext } from 'react'
import UserData from './MainContext'

const Context1 = () => {
    const { name } = useContext(UserData);
    return (
        <h1>
            {name}
        </h1>
    )
}

export default Context1;