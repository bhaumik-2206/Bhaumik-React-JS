import React, { useState, useEffect } from 'react'
import AddDataModal from './AddDataModal';
import Table from './Table';

export default function MainPage() {
    const [show, setShow] = useState(false);
    const [userData, setUserData] = useState([]);
    const [isEditInfo, setIsEditInfo] = useState(-1);

    useEffect(() => {
        // console.log(isEditInfo);
        if (isEditInfo !== -1) {
            setShow(true);
        }
    }, [isEditInfo])


    useEffect(() => {
        fetch('http://localhost:3400/data')
            .then((response) => response.json())
            .then((data) => setUserData(data));
    }, []);

    const addUserDataForm = () => {
        setShow(true);
    }

    const handleAddUser = (modalData) => {
        if (isEditInfo !== -1) {
            fetch(`http://localhost:3400/data/${isEditInfo}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(modalData),
            })
                .then(a => a.json())
                .then(a => {
                    let editTheData = [...userData];
                    let storVar = editTheData.map(ele => ele.id === isEditInfo ? a : ele);
                    setUserData(storVar);
                    // console.log(a);
                })
            setIsEditInfo(-1);
        } else {
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
        }
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

            <AddDataModal userData={userData} show={show} setShow={setShow} onAddUser={handleAddUser} isEditInfo={isEditInfo} setIsEditInfo={setIsEditInfo} />
            <Table userData={userData} setIsDeleteUser={setIsDeleteUser} setIsEditInfo={setIsEditInfo} />
        </div>
    )
}