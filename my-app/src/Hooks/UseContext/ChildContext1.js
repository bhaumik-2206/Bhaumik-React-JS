import React, { useContext } from 'react'
// import UserContext from './Context';
import { UserContext } from './UseContext';

const ChildContext1 = () => {
    let user = useContext(UserContext);
    console.log(user);
    
    return (
        <h1>{user.name} - {user.age}</h1>
    )
}

export default ChildContext1;