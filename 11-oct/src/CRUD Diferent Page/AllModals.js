import React, { useReducer, useState } from 'react'
import FirstName from './FirstName';
import LastName from './LastName';
import AgeModal from './AgeModal';
import MobileNumber from './MobileNumber';

const AllModals = () => {
    const [currentData, setCurrentData] = useState({ firstName: "", lastName: "", age: "", mobileNumber: "" })
    const [state, dispatch] = useReducer(reducer, { firstName: true, lastName: false, age: false, mobileNumber: false })

    function reducer(state, action) {
        let defaultModal = { firstName: false, lastName: false, age: false, mobileNumber: false };
        if (action.goTo === "firstName") {
            return { ...defaultModal, [action.name]: true }
        } else if (action.goTo === "lastName") {
            return { ...defaultModal, [action.name]: true }
        } else if (action.goTo === "age") {
            return { ...defaultModal, [action.name]: true }
        } else if (action.goTo === "mobileNumber") {
            return { ...defaultModal, [action.name]: true }
        } else {
            return defaultModal;
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentData(pre => ({ ...pre, [name]: value }));
    }
    
    return (
        <div>
            <FirstName state={state} dispatch={dispatch} handleChange={handleChange} currentData={currentData} />
            <LastName state={state} dispatch={dispatch} handleChange={handleChange} currentData={currentData} />
            <AgeModal state={state} dispatch={dispatch} handleChange={handleChange} currentData={currentData} />
            <MobileNumber state={state} dispatch={dispatch} handleChange={handleChange} currentData={currentData} />
        </div>
    )
}

export default AllModals
