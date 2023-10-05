import React from 'react'
import { useLocation } from 'react-router-dom'

const Menu = () => {
    let abc = useLocation();
    console.log(abc);

    return (
        <div></div>
    )
}

export default Menu
