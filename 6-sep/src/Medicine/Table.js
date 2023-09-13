import React from 'react'
import Table from 'react-bootstrap/Table';
export default function MakeTable({ medicineData, setMedicineData, setShow, setEditInfo }) {
    const onDelete = (index) => {
        console.log("object")
        const updatedArray = medicineData.filter((ele, i) => i !== index);
        setMedicineData(updatedArray);
    }
    const onEdit = (index) => {
        setEditInfo(index);
        setShow(true);
    };
    return (
        medicineData.length > 0 ?
            (
                <Table striped bordered hover variant="dark" className='text-center fs-5'>
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
                </Table>
            ) :
            <h1 className='text-black'>No Record Required</h1>
    )
}
