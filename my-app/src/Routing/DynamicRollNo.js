import React from 'react'
import { Outlet } from 'react-router-dom'

const DynamicRollNo = () => {
    return (
        <>
            <h1>I am Student</h1>
            <Outlet />
        </>
    )
}

export default DynamicRollNo


export function Number2() {
    return (
        <h1>Nested Id</h1>
    )
}
