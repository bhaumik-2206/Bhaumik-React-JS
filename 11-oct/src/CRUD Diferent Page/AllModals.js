import React, { useReducer, useState } from 'react'
import FirstName from './FirstName';
import LastName from './LastName';
import AgeModal from './AgeModal';
import MobileNumber from './MobileNumber';

const AllModals = ({ state, dispatch }) => {
    const [currentData, setCurrentData] = useState({ firstName: "", lastName: "", age: "", mobileNumber: "" })

    // const [state, dispatch] = useReducer(reducer, { firstName: true, lastName: false, age: false, mobileNumber: false })

    // function reducer(state, action) {
    //     let defaultModal = { firstName: false, lastName: false, age: false, mobileNumber: false };
    //     if (action.type === "firstName") {
    //         return { ...defaultModal, "firstName": true }
    //     } else if (action.type === "lastName") {
    //         return { ...defaultModal, "lastName": true }
    //     } else if (action.type === "age") {
    //         return { ...defaultModal, "age": true }
    //     } else if (action.type === "mobileNumber") {
    //         return { ...defaultModal, "mobileNumber": true }
    //     } else {
    //         return defaultModal;
    //     }
    // }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentData(pre => ({ ...pre, [name]: value }));
    }

    return (
        <div>
            <FirstName state={state} dispatch={dispatch} handleChange={handleChange} currentData={currentData} setCurrentData={setCurrentData} />
            <LastName state={state} dispatch={dispatch} handleChange={handleChange} currentData={currentData} setCurrentData={setCurrentData} />
            <AgeModal state={state} dispatch={dispatch} handleChange={handleChange} currentData={currentData} setCurrentData={setCurrentData} />
            <MobileNumber state={state} dispatch={dispatch} handleChange={handleChange} currentData={currentData} setCurrentData={setCurrentData} />
        </div>
    )
}

export default AllModals
