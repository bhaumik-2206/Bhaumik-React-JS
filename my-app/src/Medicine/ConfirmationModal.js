import React from 'react'
import Modal from 'react-bootstrap/Modal';

const ConfirmationModal = ({ sendDataForConfirmation, showConfModal, setShowConfModal, operationOnData, editOrDelete }) => {
    // console.log(sendDataForConfirmation)
    const handleClose = () => {
        setShowConfModal(false);
    }
    const handleConfirm = async () => {
        if (sendDataForConfirmation !== -1) {
            try {
                let res = await fetch(`http://localhost:3400/addMedicine/${sendDataForConfirmation}`)
                if (res.ok) {
                    operationOnData();
                }
            } catch (error) {
                console.log("ERROR: " + error);
            }
        }
    }
    return (
        <div>
            <Modal show={showConfModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{editOrDelete === "delete" ? "Delete" : "Edit"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{editOrDelete === "delete" ? "Are you sure you want to delete the data!!!" : "Do you want to edit the data!!!"}</Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-primary' onClick={handleClose}>Close</button>
                    <button className='btn btn-primary' onClick={handleConfirm}>{editOrDelete === "delete" ? "Delete" : "Edit"}</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ConfirmationModal
