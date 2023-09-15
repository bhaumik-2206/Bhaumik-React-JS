import React, { useState, useEffect } from 'react';
// import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Pack, Batch } from './Pack';
import dayjs from 'dayjs';
export default function AddMedicineModal({ showAddMedicineModal, setShowAddMedicineModal, medicineData, setMedicineData, editInfo }) {
    const [expiryType, setExpiryType] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOptionBatch, setSelectedOptionBatch] = useState('');
    const [currentMedicine, setCurrentMedicine] = useState({ medicineName: "", quantity: null, selectedDate: "", selectedDays: null, expiryDate: "" })
    const [isPastDate, setIsPastDate] = useState(true);

    useEffect(() => {
        setCurrentMedicine(editInfo ? editInfo : { medicineName: "", quantity: null, selectedDate: "", selectedDays: null, expiryDate: "" });
        setExpiryType(editInfo ? editInfo.selectedDays ? "byDays" : "byDate" : "");
        setSelectedOption(editInfo ? editInfo.pack : "");
        setSelectedOptionBatch(editInfo ? editInfo.batch : "");
    }, [editInfo]);

    // console.log(currentMedicine);
    // console.log(expiryType);

    const handleDateChange = (e) => {
        const inputDate = e.target.value;
        const selDate = dayjs(e.target.value);
        const currentDate = dayjs();
        if (selDate.isBefore(currentDate, 'day') && expiryType === "byDate") {
            setIsPastDate(false);
            setCurrentMedicine({ ...currentMedicine, expiryDate: inputDate, selectedDate: inputDate });
        } else if (expiryType === "byDays") {
            let expiryDate = selDate.add(currentMedicine.selectedDays || 0, 'day');
            if (expiryDate.isBefore(currentDate, 'day')) {
                setIsPastDate(false);
                setCurrentMedicine({ ...currentMedicine, expiryDate: expiryDate.format("YYYY-MM-DD"), selectedDate: inputDate });
            } else {
                setIsPastDate(true);
                setCurrentMedicine({ ...currentMedicine, expiryDate: expiryDate.format("YYYY-MM-DD"), selectedDate: inputDate });
            }
            console.log(expiryDate, currentMedicine);
        }
        else {
            setIsPastDate(true);
            setCurrentMedicine({ ...currentMedicine, expiryDate: inputDate, selectedDate: inputDate });
        }
    };

    const handleDayChange = (e) => {
        setCurrentMedicine({ ...currentMedicine, selectedDays: e.target.value, expiryDate: dayjs(currentMedicine.selectedDate).add(e.target.value, 'day').format("YYYY-MM-DD") || "" });
    }

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
    };

    const handleClose = () => {
        setShowAddMedicineModal(false);
        setExpiryType('');
        setSelectedOption('');
        setCurrentMedicine({ medicineName: "", quantity: null, selectedDate: "", selectedDays: null, expiryDate: "" })
    };

    const addMedicineInTable = (e) => {
        e.preventDefault();
        let isAdded = medicineData.findIndex(ele => ele.medicineName.toLowerCase() === currentMedicine.medicineName.toLowerCase());
        // console.log(isAdded);
        if (editInfo) {
            let checkIndex = medicineData.findIndex((ele, index) => ele.medicineName === editInfo.medicineName)
            let updateData = [...medicineData];
            const editedInfo = {
                id: editInfo.id,
                medicineName: currentMedicine.medicineName.trim(),
                pack: selectedOption,
                quantity: currentMedicine.quantity,
                selectedDate: currentMedicine.selectedDate,
                selectedDays: currentMedicine.selectedDays,
                expiryDate: currentMedicine.expiryDate,
                batch: selectedOptionBatch,
            };
            updateData[checkIndex] = editedInfo;
            setMedicineData(updateData);
            handleClose();
        } else if (isPastDate && isAdded === -1 && currentMedicine.medicineName.trim() !== "") {
            // console.log(currentMedicine);
            const newItem = {
                id: medicineData.length > 0 ? medicineData[medicineData.length - 1].id + 1 : 1,
                medicineName: currentMedicine.medicineName.trim(),
                pack: selectedOption,
                quantity: currentMedicine.quantity,
                selectedDate: currentMedicine.selectedDate,
                selectedDays: currentMedicine.selectedDays,
                expiryDate: currentMedicine.expiryDate,
                batch: selectedOptionBatch,
            };
            setMedicineData((preItem) => [...preItem, newItem]);
            handleClose();
        } else {
            alert("Enter a Valid Medicine Name");
        }
    }

    return (
        <div>
            <Modal show={showAddMedicineModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Medicine</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" onSubmit={addMedicineInTable}>
                        <div className="mb-3 form-group">
                            <label htmlFor="medicineName">Medicine Name</label>
                            <input type="text" className='form-control' id='medicineName' name='medicineName' value={currentMedicine.medicineName} onChange={(e) => setCurrentMedicine({ ...currentMedicine, medicineName: e.target.value })} placeholder="Enter medicine name" required />
                        </div>
                        <div className="mb-3 form-group">
                            <select id="" value={selectedOption} onChange={handleSelectChange} name='selectPack' className='mb-3 form-control' required>
                                <option value="">Select Pack</option>
                                <Pack />
                            </select>
                        </div>
                        <div className="mb-3 form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" className='form-control' name='quantity' min={0} defaultValue={currentMedicine.quantity} onChange={(e) => setCurrentMedicine({ ...currentMedicine, quantity: e.target.value })} placeholder="Enter medicine Quantity" required />
                        </div>
                        <div key={`inline-radio`} className="mb-3 form-group">
                            <div className="custom-control custom-radio">
                                <input className='custom-control-input' value="byDate" defaultChecked={editInfo ? editInfo.selectedDays ? false : true : expiryType === "byDate"} onChange={(e) => setExpiryType(e.target.value)} type="radio" id={`inline-radio-byDate`} name='selectDateRadioBtn' required />
                                <label className='custom-control-label' htmlFor="inline-radio-byDate">By Date</label>
                                {/* </div>
                            <div className="custom-control custom-radio"> */}
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
                        <div className="mb-3 form-group">
                            <select className='form-control' value={selectedOptionBatch} aria-label="Default select example" name='batchName' disabled>
                                <option value="">Select Batch</option>
                                <Batch selectedOption={selectedOption} setSelectedOptionBatch={setSelectedOptionBatch} />
                            </select>
                        </div>
                        <button type="submit" className='btn btn-primary m-auto d-block mt-3'>{editInfo === -1 ? "Add Medicine" : "Update Medicine"}</button>
                    </form>
                </Modal.Body>
            </Modal >
        </div>
    );
}


// {/* <Form.Group className="mb-3" controlId="formBasicEmail">
//     <Form.Label>Medicine Name</Form.Label>
//     <Form.Control type="text" name='medicineName' defaultValue={editInfo ? editInfo.medicineName : currentMedicine.medicineName} onChange={(e) => setCurrentMedicine({ ...currentMedicine, medicineName: e.target.value })} placeholder="Enter medicine name" required />
// </Form.Group>
// <Form.Select aria-label="Default select example" value={editInfo ? editInfo.pack : selectedOption} onChange={handleSelectChange} name='selectPack' className='mb-3' required>
//     <option value="">Select Pack</option>
//     <Pack />
// </Form.Select>
// <Form.Group className="mb-3" controlId="formBasicEmail">
//     <Form.Label>Quantity</Form.Label>
//     <Form.Control type="number" name='quantity' min={0} defaultValue={editInfo ? editInfo.quantity : currentMedicine.quantity} onChange={(e) => setCurrentMedicine({ ...currentMedicine, quantity: e.target.value })} placeholder="Enter medicine Quantity" required />
// </Form.Group>
// <div key={`inline-radio`} className="mb-3">
//     <Form.Check inline label="By Date" name="expiryType" value="byDate" checked={editInfo ? editInfo.selectedDays ? false : true : expiryType === "byDate"} onChange={(e) => setExpiryType(e.target.value)} type="radio" id={`inline-radio-byDate`} required />
//     <Form.Check inline label="By Days" name="expiryType" value="byDays" checked={editInfo ? editInfo.selectedDays ? true : false : expiryType === "byDays"} onChange={(e) => setExpiryType(e.target.value)} type="radio" id={`inline-radio-byDays`} required />
// </div>
// {expiryType === 'byDate' ? (
//     <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Control type="date" value={editInfo ? editInfo.selectedDate : currentMedicine.selectedDate} name='selectedDate' onChange={handleDateChange} required />
//         {!isPastDate && (
//             <p style={{ color: 'red' }}>Please select a date in the future.</p>
//         )}
//     </Form.Group>
// ) : false}
// {expiryType === 'byDays' ? (
//     <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Control type="date" value={editInfo ? editInfo.selectedDate : currentMedicine.selectedDate} name='selectedDate' onChange={handleDateChange} required />
//         <Form.Control type="number" value={editInfo ? editInfo.selectedDays : currentMedicine.selectedDays} name='selectedDays' onChange={handleDayChange} min={0} required />
//         {!isPastDate ? (
//             <p style={{ color: 'red' }}>Please select a date in the future.</p>
//         ) : false}
//     </Form.Group>
// ) : false}
// <Form.Select value={editInfo ? editInfo.batch : selectedOptionBatch} aria-label="Default select example" name='batchName'>
//     <option value="">Select Batch</option>
//     <Batch selectedOption={selectedOption} setSelectedOptionBatch={setSelectedOptionBatch} />
// </Form.Select> */}