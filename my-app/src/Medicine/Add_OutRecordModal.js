import React from 'react'
import Modal from 'react-bootstrap/Modal';

const Add_OutRecordModal = ({ show, handleClose, handleChangeInput, addRecordSubmit }) => {

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Record</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" onSubmit={addRecordSubmit}>
                        <div className="mb-3 form-group">
                            <label htmlFor="medicineName">Medicine Name</label>
                            <input value={handleChangeInput.medicineName} onChange={handleChangeInput} type="text" id='medicineName' className="form-control" placeholder='Enter Medicine Name' />
                        </div>
                        <div className="mb-3 form-group">
                            <label htmlFor="Item">Select Item</label>
                            <select value={handleChangeInput.selectedItem} onChange={handleChangeInput} id="selectedItem" className='mb-3 form-control'>
                                <option value="">Select Item</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div className="mb-3 form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input value={handleChangeInput.quantity} onChange={handleChangeInput} type="number" id='quantity' className="form-control" placeholder='Enter Quantity' />
                        </div>
                    <button type="submit" className="btn btn-primary d-block m-auto">Add Record</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Add_OutRecordModal;