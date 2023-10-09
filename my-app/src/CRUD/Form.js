import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';

const Form = ({ show, setShow, getData, setIsEdit, isEdit }) => {
    const [currentData, setCurrentData] = useState({ fname: "", lname: "", age: "" });

    useEffect(() => {
        if (isEdit !== -1) {
            setCurrentData(isEdit);
        }
    }, [isEdit])


    const handleClose = () => {
        setShow(false);
        setCurrentData({ fname: "", lname: "", age: "" });
        setIsEdit(-1);
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentData({ ...currentData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEdit !== -1) {
            let a = await fetch(`http://localhost:3400/userCRUD/${isEdit.id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(currentData)
            })
        } else {
            let a = await fetch("http://localhost:3400/userCRUD", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(currentData),
            });
        }
        getData();
        handleClose();
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Medicine</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" onSubmit={handleSubmit}>
                        <input placeholder='Enter Your First Name' type="text" name='fname' value={currentData.fname} onChange={handleChange} />
                        <input placeholder='Enter Your Last Name' type="text" name='lname' value={currentData.lname} onChange={handleChange} />
                        <input placeholder='Enter Your Age' type="number" name='age' value={currentData.age} onChange={handleChange} />
                        <button type="submit" className="btn btn-primary d-block m-auto">Add Medicine</button>
                    </form>
                </Modal.Body>
            </Modal >
        </div>
    )
}

export default Form
