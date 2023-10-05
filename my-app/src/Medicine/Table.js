import React, { useState } from 'react'
import ConfirmationModal from './ConfirmationModal';

const Table = ({ medicineData, setMedicineData, setIsEditInfo }) => {
    const [clickOnDeleteButton, setClickOnDeleteButton] = useState(-1);
    const [clickOnEditButton, setClickOnEditButton] = useState(-1);
    const [showConfModal, setShowConfModal] = useState(false);
    const [editOrDelete, setEditOrDelete] = useState(null);

    const onDelete = async (id) => {
        setClickOnDeleteButton(id);
        setShowConfModal(true);
        setEditOrDelete("delete");
    }

    const deleteMedicine = async () => {
        await fetch(`http://localhost:3400/addMedicine/${clickOnDeleteButton}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        setMedicineData(prevData => prevData.filter(item => item.id !== clickOnDeleteButton));
        setShowConfModal(false);
        setClickOnDeleteButton(-1);
        setEditOrDelete(null)
    }

    const onEdit = (id) => {
        setClickOnEditButton(id);
        setShowConfModal(true);
        setEditOrDelete("edit");
    }

    const editMedicine = async () => {
        setIsEditInfo(medicineData.find(ele => ele.id === clickOnEditButton))
        setEditOrDelete(null);
        setShowConfModal(false);
        setClickOnEditButton(-1);
    }

    return (
        <>
            {medicineData.length > 0 ? (
                <div>
                    <h2 className='text-primary text-center'>Medicine</h2>
                    <table className='table table-hover table-dark text-center fs-5'>
                        <thead>
                            <tr>
                                <th>Medicine</th>
                                <th>Quantity</th>
                                <th>Expiry Date</th>
                                <th>Pack</th>
                                <th>Batch</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medicineData.map((ele, index) => (
                                <tr key={index} id={ele.id}>
                                    <td>{ele.medicineName}</td>
                                    <td>{ele.quantity}</td>
                                    <td>{ele.expiryDate}</td>
                                    <td>{ele.pack}</td>
                                    <td>{ele.batch}</td>
                                    <td style={{ width: "20%" }}>
                                        <button className='btn btn-primary m-auto ms-3' onClick={() => onEdit(ele.id)}>Edit</button>
                                        <button className='btn btn-primary m-auto ms-3' onClick={() => onDelete(ele.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (<h1>No Medicine Required</h1>)
            }
            {clickOnDeleteButton !== -1 ? <ConfirmationModal sendDataForConfirmation={clickOnDeleteButton} showConfModal={showConfModal} setShowConfModal={setShowConfModal} operationOnData={deleteMedicine} editOrDelete={editOrDelete} /> : false}
            {clickOnEditButton !== -1 ? <ConfirmationModal sendDataForConfirmation={clickOnEditButton} showConfModal={showConfModal} setShowConfModal={setShowConfModal} operationOnData={editMedicine} editOrDelete={editOrDelete} /> : false}
        </>
    )
}
export default Table;



// import React from 'react'

export function AddRecordTable({ recordData }) {

    return (
        <div>
            {recordData.length > 0 ? (
                <div>
                    <h2 className='text-primary text-center'>Records</h2>
                    <table className='table table-hover table-dark text-center fs-5'>
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Medicine</th>
                                <th>Quantity</th>
                                <th>Selected Item</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recordData.map((ele, index) => (
                                <tr key={index} id={ele.id}>
                                    <td>{index + 1}</td>
                                    <td>{ele.medicineName}</td>
                                    <td>{ele.quantity}</td>
                                    <td>{ele.selectedItem}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) :
                (false)
                // (<h1>No Record Required</h1>)
            }
        </div>
    )
}