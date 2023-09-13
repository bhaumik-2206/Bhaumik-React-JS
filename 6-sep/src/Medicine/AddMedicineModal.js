import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Pack, Batch } from './Pack';
import dayjs from 'dayjs';
export default function AddMedicineModal({ show, setShow, medicineData, setMedicineData, editInfo }) {
    const [expiryType, setExpiryType] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOptionBatch, setSelectedOptionBatch] = useState('');
    const [currentMedicine, setCurrentMedicine] = useState({ medicineName: "", quantity: null, selectedDate: "", selectedDays: null, expiryDate: "" })
    const [isPastDate, setIsPastDate] = useState(true);

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
        setShow(false);
        setExpiryType('');
        setSelectedOption('');
        setCurrentMedicine({ medicineName: "", quantity: null, selectedDate: "", selectedDays: null, expiryDate: "" })
    };

    const addMedicineInTable = (e) => {
        e.preventDefault();
        if (editInfo !== -1) {
            let updateData = [...medicineData];
            const editedInfo = {
                id: editInfo,
                medicineName: e.target.medicineName.value.trim(),
                pack: e.target.selectPack.value,
                quantity: e.target.quantity.value,
                selectedDate: e.target.selectedDate.value,
                selectedDays: e.target.selectedDays.value || 0,
                expiryDate: null,
                batch: e.target.batchName.value,
            };
            updateData[editInfo] = editedInfo;
            setMedicineData(updateData);
            setShow(false);
            handleClose();
            // console.log(newItem);
        } else if (isPastDate) {
            console.log(currentMedicine);
            const newItem = {
                id: medicineData.length > 0 ? medicineData[medicineData.length - 1].id + 1 : 1,
                medicineName: currentMedicine.medicineName,
                pack: selectedOption,
                quantity: currentMedicine.quantity,
                selectedDate: currentMedicine.selectedDate,
                selectedDays: currentMedicine.selectedDays,
                expiryDate: currentMedicine.expiryDate,
                batch: selectedOptionBatch,
            };
            setMedicineData((preItem) => [...preItem, newItem]);
            handleClose();
        }
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Medicine</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" onSubmit={addMedicineInTable}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Medicine Name</Form.Label>
                            <Form.Control type="text" name='medicineName' defaultValue={editInfo !== -1 ? medicineData[editInfo].medicineName : currentMedicine.medicineName} onChange={(e) => setCurrentMedicine({ ...currentMedicine, medicineName: e.target.value })} placeholder="Enter medicine name" required />
                        </Form.Group>
                        <Form.Select aria-label="Default select example" value={editInfo !== -1 ? medicineData[editInfo].pack : selectedOption} onChange={handleSelectChange} name='selectPack' className='mb-3' required>
                            <option value="">Select Pack</option>
                            <Pack />
                        </Form.Select>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="number" name='quantity' min={0} defaultValue={editInfo !== -1 ? medicineData[editInfo].quantity : currentMedicine.quantity} onChange={(e) => setCurrentMedicine({ ...currentMedicine, quantity: e.target.value })} placeholder="Enter medicine Quantity" required />
                        </Form.Group>
                        <div key={`inline-radio`} className="mb-3">
                            <Form.Check inline label="By Date" name="expiryType" value="byDate" checked={editInfo !== -1 ? (medicineData[editInfo].selectedDays ? false : true) : expiryType === "byDate"} onChange={(e) => setExpiryType(e.target.value)} type="radio" id={`inline-radio-byDate`} required />
                            <Form.Check inline label="By Days" name="expiryType" value="byDays" checked={editInfo !== -1 ? (medicineData[editInfo].selectedDays ? true : false) : expiryType === "byDays"} onChange={(e) => setExpiryType(e.target.value)} type="radio" id={`inline-radio-byDays`} required />
                        </div>
                        {expiryType === 'byDate' ? (
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="date" value={editInfo !== -1 ? medicineData[editInfo].selectedDate : currentMedicine.selectedDate} name='selectedDate' onChange={handleDateChange} required />
                                {!isPastDate && (
                                    <p style={{ color: 'red' }}>Please select a date in the future.</p>
                                )}
                            </Form.Group>
                        ) : false}
                        {expiryType === 'byDays' ? (
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="date" value={editInfo !== -1 ? medicineData[editInfo].selectedDate : currentMedicine.selectedDate} name='selectedDate' onChange={handleDateChange} required />
                                <Form.Control type="number" value={editInfo !== -1 ? medicineData[editInfo].selectedDays : currentMedicine.selectedDays} name='selectedDays' onChange={handleDayChange} min={0} required />
                                {!isPastDate ? (
                                    <p style={{ color: 'red' }}>Please select a date in the future.</p>
                                ) : false}
                            </Form.Group>
                        ) : false}
                        <Form.Select value={editInfo !== -1 ? medicineData[editInfo].batch : selectedOptionBatch} aria-label="Default select example" name='batchName' disabled>
                            <Batch indexOfPackValue={selectedOption} getValueFromBatch={(data => setSelectedOptionBatch(data))} />
                        </Form.Select>
                        <button type="submit" className='btn btn-primary m-auto d-block mt-3'>{editInfo === -1 ? "Add Medicine" : "Update Medicine"}</button>
                    </form>
                </Modal.Body>
            </Modal >
        </div>
    );
}

// (e) => setCurrentMedicine({ ...currentMedicine, selectedDays: e.target.value })