import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Pack, Batch } from './Pack';
import dayjs from 'dayjs';

export default function AddMedicineForm({ editInfo, data, sendDataToGrandParent, show, setShow }) {
    const [expiryType, setExpiryType] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOptionBatch, setSelectedOptionBatch] = useState('');
    const [selectedDate, setSelectedDate] = useState('');           // Selected Date 
    const [selectedDays, setSelectedDays] = useState("");           // Selected Date 
    const [isPastDate, setIsPastDate] = useState(true);             // It is a valid date or not


    const handleDateChange = (e) => {
        const inputDate = e.target.value;
        setSelectedDate(inputDate);
        const SelDate = dayjs(inputDate);
        const currentDate = dayjs();
        if (SelDate.isBefore(currentDate, 'day') && expiryType === "byDate") {
            setIsPastDate(false);
        } else if (expiryType === "byDays") {
            let expiryDate = SelDate.add(selectedDays, 'day');
            if (expiryDate.isBefore(currentDate, 'day')) {
                setIsPastDate(false);
            } else {
                setIsPastDate(true);
            }
        } else {
            setIsPastDate(true);
        }
    };

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
    };
    const handleClose = () => {
        setShow(false);
        setSelectedOption("");
        setSelectedDate("");
        setIsPastDate(true);
        setExpiryType("");
    };

    const changeDaysWhenChange = (e) => {
        e.preventDefault();
        setSelectedDays(e.target.value);
        let a = dayjs(selectedDate);
        let expiryDate = a.add(e.target.value, 'day');
        if (expiryDate.isBefore(dayjs(), 'day')) {
            setIsPastDate(false);
        } else {
            setIsPastDate(true);
        }
    }

    const addMedicineInTable = (e) => {
        e.preventDefault();
        // let searchMedicine = data.findIndex(ele => ele.medicineName.toUpperCase() === e.target.medicineName.value.trim().toUpperCase());
        // if (searchMedicine !== -1) {
        //     alert("Medicine already exists!!!");
        //     return;
        // }
        if (editInfo) {

        } else if (e.target.medicineName.value.trim() !== '' && isPastDate) {
            let selectedDate = dayjs(expiryType === 'byDate' ? e.target.expiryDateByDate.value : e.target.expiryDateByDays.value);
            let selDays = expiryType === 'byDays' ? e.target.addDaysInExpiryDateByDays.value : "";
            // setSelectedDays(selDays);
            let add = selectedDate.add(selDays, 'day');
            const newItem = {
                id: data.length > 0 ? data[data.length - 1].id + 1 : 1,
                medicineName: e.target.medicineName.value.trim(),
                pack: e.target.selectPack.value,
                quantity: Number(e.target.quantity.value),
                selectedDate: selectedDate.format("YYYY-MM-DD"),
                selectedDays: selectedDays,
                expiryDate: expiryType === 'byDate' ? selectedDate.format("YYYY-MM-DD") : add.format("YYYY-MM-DD"),
                batchName: e.target.batchName.value,
            };
            sendDataToGrandParent((preMedicine) => {
                return [...preMedicine, newItem]
            });
            handleClose();
        }
    }
    const [medi, setMedi] = useState("");
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Medicine</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" onSubmit={addMedicineInTable}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={editInfo ? editInfo.medicineName : medi} onChange={(e) => setMedi(e.target.value)} name='medicineName' placeholder="Enter medicine name" required />
                        </Form.Group>
                        <Form.Select aria-label="Default select example" value={editInfo ? editInfo.pack : selectedOption} onChange={handleSelectChange} name='selectPack' className='mb-3' required>
                            <option value="">Select Pack</option>
                            <Pack />
                        </Form.Select>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="number" value={editInfo?.quantity} name='quantity' min={0} placeholder="Enter medicine Quantity" required />
                        </Form.Group>
                        <div key={`inline-radio`} className="mb-3">
                            <Form.Check inline label="By Date" name="expiryType" type="radio" id={`inline-radio-byDate`} value="byDate" checked={editInfo ? true : expiryType === 'byDate'} onChange={(e) => setExpiryType(e.target.value)} required />
                            <Form.Check inline label="By Days" name="expiryType" type="radio" id={`inline-radio-byDays`} value="byDays" checked={editInfo ? (editInfo.selectedDays ? true : "") : expiryType === 'byDays'} onChange={(e) => setExpiryType(e.target.value)} required />
                        </div>
                        {expiryType === 'byDate' ? (
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="date" value={editInfo ? editInfo.expiryDate : selectedDate} onChange={handleDateChange} name='expiryDateByDate' required />
                                {/* <input type="date" onChange={(e) => e.target.value} /> */}
                                {!isPastDate && (
                                    <p style={{ color: 'red' }}>Please select a date in the future.</p>
                                )}
                            </Form.Group>
                        ) : false}
                        {expiryType === 'byDays' ? (
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="date" value={editInfo ? editInfo.selectedDate : selectedDate} onChange={handleDateChange} name='expiryDateByDays' required />
                                <Form.Control type="number" value={editInfo ? editInfo.selectedDays : selectedDays} onChange={changeDaysWhenChange} min={0} name='addDaysInExpiryDateByDays' required />
                                {!isPastDate ? (
                                    <p style={{ color: 'red' }}>Please select a date in the future.</p>
                                ) : false}
                            </Form.Group>
                        ) : false}
                        <Form.Select value={selectedOptionBatch} aria-label="Default select example" name='batchName' disabled>
                            <Batch indexOfPackValue={selectedOption} getValueFromBatch={(data => setSelectedOptionBatch(data))} />
                        </Form.Select>
                        <button type="submit" className='btn btn-primary m-auto d-block mt-3'>{editInfo?.medicineName ? "Update Med" : "Add Med"}</button>
                    </form>
                </Modal.Body>
            </Modal >
        </>
    );
}
