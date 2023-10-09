import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

const AddMeddicineModal = ({ show, handleChangeInput, currentMedicine, addMedicineOnSubmit, handleClose }) => {

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Medicine</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" onSubmit={addMedicineOnSubmit}>
                        <div className="mb-3 form-group">
                            <label htmlFor="medicineName">Medicine Name</label>
                            <input value={currentMedicine.medicineName} onChange={handleChangeInput} type="text" id='medicineName' className="form-control" placeholder='Enter Medicine Name' />
                        </div>
                        <div className="mb-3 form-group">
                            <label htmlFor="pack">Select Pack</label>
                            <select id="pack" value={currentMedicine.pack} onChange={handleChangeInput} className='mb-3 form-control'>
                                <option value="">Select Pack</option>
                                <option value="Pack-1">Pack-1</option>
                                <option value="Pack-2">Pack-2</option>
                                <option value="Pack-3">Pack-3</option>
                                {/* <Pack /> */}
                            </select>
                        </div>
                        <div className="mb-3 form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" value={currentMedicine.quantity} onChange={handleChangeInput} id='quantity' className="form-control" placeholder='Enter Quantity' />
                        </div>
                        <div className="mb-3 form-group">
                            <label htmlFor="expiryDate">Expiry Date</label>
                            <input type="date" value={currentMedicine.expiryDate} onChange={handleChangeInput} id='expiryDate' className="form-control" placeholder='Select Expiry Date' />
                        </div>
                        <div className="mb-3 form-group">
                            <label htmlFor="batch">Select Batch</label>
                            <select id="batch" value={currentMedicine.batch} onChange={handleChangeInput} className='mb-3 form-control'>
                                <option value="">Select Batch</option>
                                <option value="A1">A1</option>
                                <option value="A2">A2</option>
                                <option value="A3">A3</option>
                                {/* <Pack /> */}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary d-block m-auto">Add Medicine</button>
                    </form>
                </Modal.Body>
            </Modal >
        </div>
    )
}

export default AddMeddicineModal