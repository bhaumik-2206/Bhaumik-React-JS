import React, { useState, useEffect } from 'react'
import AddDataModal from './AddDataModal';
import Table from './Table';
import dayjs from 'dayjs';

export default function MainPage() {
    const [show, setShow] = useState(false);
    const [userData, setUserData] = useState([]);
    const [isEditInfo, setIsEditInfo] = useState(-1);

    const [lastSaveData, setLastSaveData] = useState("");

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

    const handleAddUser = async (modalData) => {
        if (isEditInfo !== -1) {
            let responseEdited = await fetch(`http://localhost:3400/data/${isEditInfo}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(modalData),
            })
            let answerEdited = await responseEdited.json();
            let editTheData = [...userData];
            let storVar = editTheData.map(ele => ele.id === isEditInfo ? answerEdited : ele);
            setUserData(storVar);
            setIsEditInfo(-1);
            setLastSaveData(dayjs());
        } else {
            let responseAddUser = await fetch('http://localhost:3400/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(modalData),
            })
            let answerNewUser = await responseAddUser.json();
            setUserData((preData) => [...preData, answerNewUser]);
            setLastSaveData(dayjs());
        }
        // console.log(modalData)
    };
    const setIsDeleteUser = (id) => {
        fetch(`http://localhost:3400/data/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => setUserData(prevData => prevData.filter(item => item.id !== id)));
        setLastSaveData(dayjs());
    }

    return (
        <div>
            <div className="text-center py-3">
                <button className='btn btn-primary fs-4 px-5 py-2' onClick={addUserDataForm}>Add User</button>
            </div>

            <AddDataModal userData={userData} show={show} setShow={setShow} onAddUser={handleAddUser} isEditInfo={isEditInfo} setIsEditInfo={setIsEditInfo} setLastSaveData={setLastSaveData} />
            <Table userData={userData} setIsDeleteUser={setIsDeleteUser} setIsEditInfo={setIsEditInfo} lastSaveData={lastSaveData} />
        </div>
    )
}