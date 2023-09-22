import React from 'react'
import { useParams } from 'react-router-dom'
const UserChildComponent = () => {
    // const params = useParams()
    // console.log(params)
    // let id = params.userId;
    // console.log(id)

    // Also destructure the id 
    const { id } = useParams()
    return (
        <div>
            <h1>Welcome User {id}</h1>
        </div>
    )
}
export default UserChildComponent
