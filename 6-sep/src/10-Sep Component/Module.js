// import React from 'react'
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import { Pack, Batch } from './Pack';
// import allData from "./MainArray";
// import Table from "./Table";

// export default function Module() {
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     // const [mainArray, setAllData] = useState(allData);
//     const addMedicineInTable = (e) => {
//         e.preventDefault();
//         if (e.target.medicineName.value.trim() !== '') {
//             // setAllData([...mainArray, {
//             //     id: mainArray.length - 1,
//             //     medicineName: e.target.medicineName.value.trim(),
//             //     pack: e.target.selectPack.value,
//             //     quantity: Number(e.target.quantity.value),
//             //     selectedDate: null,
//             //     selectedDays: null,
//             //     expiryDate: null,
//             //     batchName: e.target.batchName.value,
//             // }]);
//             allData.push(
//                 {
//                     id: allData.length - 1,
//                     medicineName: e.target.medicineName.value.trim(),
//                     pack: e.target.selectPack.value,
//                     quantity: Number(e.target.quantity.value),
//                     selectedDate: null,
//                     selectedDays: null,
//                     expiryDate: null,
//                     batchName: e.target.batchName.value,
//                 }
//             )
//             setShow(false);
//             console.log(allData);
//             // allData = mainArray;
//         }
//     }
//     // console.log(allData);


//     return (
//         <>
//             <Button variant="primary" onClick={handleShow}>Add Medicine</Button>
//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Modal heading</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <form action="" onSubmit={addMedicineInTable}>
//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                             <Form.Label>Name</Form.Label>
//                             <Form.Control type="text" name='medicineName' placeholder="Enter medicine name" />
//                         </Form.Group>
//                         <Form.Select aria-label="Default select example" name='selectPack' className='mb-3'>
//                             <option>Select Pack</option>
//                             <Pack />
//                         </Form.Select>
//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                             <Form.Label>Quantity</Form.Label>
//                             <Form.Control type="number" name='quantity' min={0} placeholder="Enter medicine name" />
//                         </Form.Group>
//                         <Form.Label>Expiry Date</Form.Label>
//                         {['radio'].map((type) => (
//                             <div key={`inline-${type}`} className="mb-3">
//                                 <Form.Check inline label="By Date" name="group1" type={type} id={`inline-${type}-1`} />
//                                 <Form.Check inline label="By Days" name="group1" type={type} id={`inline-${type}-2`} />
//                             </div>
//                         ))}
//                         <Form.Select aria-label="Default select example" name='batchName'>
//                             <option>Select Pack</option>
//                             <Batch />
//                         </Form.Select>
//                         <button type="submit" className='btn btn-primary m-auto d-block mt-3'>Add Medicine</button>
//                     </form>
//                 </Modal.Body>
//             </Modal>
//         </>
//     );
// }

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Pack, Batch } from './Pack';
import Table from "./Table";

export default function Module({ data }) {
    const [show, setShow] = useState(false);
    const [mainArray, setMainArray] = useState(data);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addMedicineInTable = (e) => {
        e.preventDefault();
        if (e.target.medicineName.value.trim() !== '') {
            setMainArray((prevMainArray) => [
                ...prevMainArray,
                {
                    id: prevMainArray.length + 1,
                    medicineName: e.target.medicineName.value.trim(),
                    pack: e.target.selectPack.value,
                    quantity: Number(e.target.quantity.value),
                    selectedDate: null,
                    selectedDays: null,
                    expiryDate: null,
                    batchName: e.target.batchName.value,
                },
            ]);
            setShow(false);
        }
    }

    const receiveDataFromChild = (data) => {
        console.log('Data received from child:', data);
        setMainArray(data);
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>Add Medicine</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Medicine</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" onSubmit={addMedicineInTable}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='medicineName' placeholder="Enter medicine name" />
                        </Form.Group>
                        <Form.Select aria-label="Default select example" name='selectPack' className='mb-3'>
                            <option>Select Pack</option>
                            <Pack />
                        </Form.Select>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="number" name='quantity' min={0} placeholder="Enter medicine name" />
                        </Form.Group>
                        <Form.Label>Expiry Date</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check inline label="By Date" name="group1" type={type} id={`inline-${type}-1`} />
                                <Form.Check inline label="By Days" name="group1" type={type} id={`inline-${type}-2`} />
                            </div>
                        ))}
                        <Form.Select aria-label="Default select example" name='batchName'>
                            <option>Select Batch</option>
                            <Batch />
                        </Form.Select>
                        <button type="submit" className='btn btn-primary m-auto d-block mt-3'>Add Medicine</button>
                    </form>
                </Modal.Body>
            </Modal>
            <Table tableData={mainArray} sendDataToParent={receiveDataFromChild} />
        </>
    );
}