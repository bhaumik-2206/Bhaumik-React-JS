import React, { useEffect, useState } from 'react'
import ConfirmationModal from './ConfirmationModal';
import PrintTable from './PrintTable';

const Table = () => {
    const [userData, setUserData] = useState([])
    const [show, setShow] = useState(false);
    const [deleteId, setDeleteId] = useState(-1);
    // const [field, setField] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3500/userData")
            .then(e => e.json())
            .then(data => {
                setUserData(data)
            })
            .catch(e => console.log(e))
    }, [])


    const handleDelete = (id) => {
        setShow(true);
        setDeleteId(id);
    }

    async function getData() {
        let res = await fetch("http://localhost:3500/userData");
        let result = await res.json();
        setUserData(result);
    }

    return (
        <>
            <PrintTable handleDelete={handleDelete} userData={userData} />
            <ConfirmationModal show={show} setShow={setShow} deleteId={deleteId} getData={getData} setDeleteId={setDeleteId} />
        </>
    )
}

export default Table
