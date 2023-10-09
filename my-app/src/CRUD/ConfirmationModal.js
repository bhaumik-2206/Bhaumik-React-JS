import React from 'react'
import { Modal } from 'react-bootstrap'

const ConfirmationModal = ({ conformationModal, setConformationModal, confId, operation }) => {
    const handleClose = () => {
        setConformationModal(false)
    }
    const handleDelete = async () => {
        if (confId !== -1) {
            try {
                let res = await fetch(`http://localhost:3400/userCRUD/${confId}`)
                if (res.ok) {
                    setConformationModal(false);
                    operation();
                }
            } catch (error) {
                console.log("ERROR: " + error);
            }
        }
    }

    return (
        <Modal show={conformationModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure you want to delete the data!!!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-end">
                    <button onClick={handleClose} className='btn btn-primary ms-3'>No</button>
                    <button onClick={handleDelete} className='btn btn-primary ms-3'>DELETE</button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ConfirmationModal
