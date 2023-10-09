import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const Formm = ({ show, setShow }) => {
    const [currentData, setCurrentData] = useState({ fname: "", lname: "", age: "" })

    const handleClose = () => {
        setShow(false);
        setCurrentData({ fname: "", lname: "", age: "" });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("first")
        handleClose();
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCurrentData(pre => ({ ...pre, [id]: value }))
    }
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Medicine</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" id='fname' value={currentData.fname} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="text" id='lname' value={currentData.lname} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="text" id='age' value={currentData.age} onChange={handleChange} className="form-control" />
                    </div>
                    <button className='btn btn-primary' type="submit">Add User</button>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default Formm
