import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import AddItem from './AddItem'
import History from './History'
import HomeRest from './HomeRest'

const Restaurant = () => {
    return (
        <div>
            <div>
                <Link to="/">Home</Link>&emsp;
                <Link to="/orderItem">Order Item</Link>&emsp;
                <Link to="/history">History</Link>&emsp;
            </div>
            <Routes>
                <Route path='/' element={<HomeRest />} />
                <Route path='/orderItem' element={<AddItem />} />
                <Route path='/history' element={<History />} />
            </Routes>
        </div>
    )
}

export default Restaurant
