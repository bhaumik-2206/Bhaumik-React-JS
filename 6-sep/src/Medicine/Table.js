import dayjs from 'dayjs';
import React from 'react'
export function MakeMedicineTable({ medicineData, setMedicineData, setShowAddMedicineModal, setEditInfo }) {
    const onDelete = (index) => {
        const updatedArray = medicineData.filter((ele, i) => i !== index);
        setMedicineData(updatedArray);
    }
    const onEdit = (index) => {
        setEditInfo(medicineData[index]);
        setShowAddMedicineModal(true);
    };
    return (
        medicineData.length > 0 ?
            (
                <>
                    <h2 className='text-primary text-center'>Add Medicine</h2>
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
                                        <button className='btn btn-primary m-auto ms-3' onClick={() => onEdit(index)}>Edit</button>
                                        {/* <button className='btn btn-primary m-auto ms-3'>Edit</button> */}
                                        <button className='btn btn-primary m-auto ms-3' onClick={() => onDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br />
                </>
            ) :
            <h1 className='text-black'>No Medicine Added</h1>
    )
}

export function MakeRecordTable({ medicineRecord }) {



    return (
        medicineRecord.length > 0 ?
            (
                <>
                    <h2 className='text-primary text-center'>Add Record</h2>
                    <table className='table table-hover table-dark text-center fs-5'>
                        <thead>
                            <tr>
                                <th>Medicine</th>
                                <th>Date</th>
                                <th>Pack</th>
                                <th>Batch</th>
                                <th>Quantity</th>
                                <th>Selected Item</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medicineRecord.map((ele, index) => (
                                <tr key={index} id={ele.id}>
                                    <td>{ele.medicineName}</td>
                                    <td>{dayjs().format("DD-MM-YYYY")}</td>
                                    <td>{ele.pack}</td>
                                    <td>{ele.batch}</td>
                                    <td>{ele.quantity}</td>
                                    <td>{ele.selectedItem}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br />
                </>
            ) :
            (false)
    )
}