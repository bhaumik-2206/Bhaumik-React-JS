import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';

const Form = ({ show, setShow, getData, setIsEdit, isEdit, setSearch }) => {
    const [currentData, setCurrentData] = useState({ fname: "", lname: "", age: "" });

    useEffect(() => {
        if (isEdit !== -1) {
            setCurrentData(isEdit);
        }
    }, [isEdit]);


    const handleClose = () => {
        setShow(false);
        setCurrentData({ fname: "", lname: "", age: "" });
        setIsEdit(-1);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentData(pre => ({ ...pre, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEdit !== -1) {
            try {
                await fetch(`http://localhost:3400/userCRUD/${isEdit.id}`, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(currentData)
                })
            } catch (error) {
                console.log("ERROR: " + error)
            }
        } else {
            try {
                await fetch("http://localhost:3400/userCRUD", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(currentData),
                });
            } catch (error) {
                console.log("ERROR: " + error)
            }
        }
        setSearch("");
        getData();
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Medicine</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <input className='form-control' placeholder='Enter Your First Name' type="text" name='fname' value={currentData.fname} onChange={handleChange} />
                    </div>
                    <div className="form-group mb-3">
                        <input className='form-control' placeholder='Enter Your Last Name' type="text" name='lname' value={currentData.lname} onChange={handleChange} />
                    </div>
                    <div className="form-group mb-3">
                        <input className='form-control' placeholder='Enter Your Age' type="number" name='age' value={currentData.age} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary d-block m-auto">Add Medicine</button>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default Form
