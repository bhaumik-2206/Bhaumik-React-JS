import React, { useContext } from 'react'
import UserContext from './Context';
import { DataContext } from './UseContext';
// import { UserContext } from './UseContext';

const New = () => {
    let { greet, name } = useContext(DataContext);

    return (
        <>
            <h1>{greet}-{name}</h1>
        </>
    )
}

export default New;