import React, { useState, useEffect } from 'react'
import AddDataModal from './AddDataModal';
import Table from './Table';

export default function MainPage() {
    const [show, setShow] = useState(false);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3400/data')
            .then((response) => response.json())
            .then((data) => setUserData(data));
    }, []);

    // console.log(userData);

    const addUserDataForm = () => {
        setShow(true);
    }

    const handleAddUser = (modalData) => {
        fetch('http://localhost:3400/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(modalData),
        })
            .then((response) => response.json())
            .then((newItemFromApi) => {
                setUserData((preData) => [...preData, newItemFromApi]);
                // console.log(userData)
                setShow(false);
            })
            .catch((error) => {
                console.error('Error adding item:', error);
            });
    };
    // console.log(modalData)

    const setIsDeleteUser = (id) => {
        fetch(`http://localhost:3400/data/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => setUserData(prevData => prevData.filter(item => item.id !== id)));
    }

    return (
        <div>
            <div className="text-center py-3">
                <button className='btn btn-primary fs-3 px-5' onClick={addUserDataForm}>Add</button>
            </div>

            <AddDataModal userData={userData} show={show} setShow={setShow} onAddUser={handleAddUser} />
            <Table userData={userData} setIsDeleteUser={setIsDeleteUser} />
        </div>
    )
}