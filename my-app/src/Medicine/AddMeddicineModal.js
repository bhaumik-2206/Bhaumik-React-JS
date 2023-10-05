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
                    {/* <form action="" onSubmit={addMedicineInTable}>
                        <div key={`inline-radio`} className="mb-3 form-group">
                            <div className="custom-control custom-radio">
                                <input className='custom-control-input' value="byDate" defaultChecked={editInfo ? editInfo.selectedDays ? false : true : expiryType === "byDate"} onChange={(e) => setExpiryType(e.target.value)} type="radio" id={`inline-radio-byDate`} name='selectDateRadioBtn' required />
                                <label className='custom-control-label' htmlFor="inline-radio-byDate">By Date</label>
                                <input className='custom-control-input' value="byDays" defaultChecked={editInfo ? editInfo.selectedDays ? true : false : expiryType === "byDays"} onChange={(e) => setExpiryType(e.target.value)} type="radio" id={`inline-radio-byDays`} name='selectDateRadioBtn' required />
                                <label className='custom-control-label' htmlFor="inline-radio-byDays">By Days</label>
                            </div>
                            {
                                expiryType === "byDate" ? (
                                    <div className='form-group'>
                                        <br /><input className='form-control' type="date" value={currentMedicine.selectedDate} name='selectedDate' onChange={handleDateChange} required />
                                        {!isPastDate ? (
                                            <p style={{ color: 'red' }}>Please select a date in the future.</p>
                                        ) : false}
                                    </div>
                                ) : (
                                    expiryType === "byDays" ? (
                                        <>
                                            <br /><input className='form-control' type="date" value={currentMedicine.selectedDate} name='selectedDate' onChange={handleDateChange} required />
                                            <br /><input className='form-control' type="number" value={currentMedicine.selectedDays} name='selectedDays' onChange={handleDayChange} min={0} required />
                                            {!isPastDate ? (
                                                <p style={{ color: 'red' }}>Please select a date in the future.</p>
                                            ) : false}
                                        </>
                                    ) : (false)
                                )
                            }
                        </div>
                        <button type="submit" className='btn btn-primary m-auto d-block mt-3'>{editInfo === -1 ? "Add Medicine" : "Update Medicine"}</button>
                    </form> */}
                </Modal.Body>
            </Modal >
        </div>
    )
}

export default AddMeddicineModal