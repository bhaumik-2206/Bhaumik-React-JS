import React, { useEffect, useState } from 'react'

const MainMedicinePage = () => {
    const [medicineData, setMedicineData] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3400/addMedicine")
            .then(e => e.json())
            .then(e => setMedicineData(e))
            console.log(medicineData)
    }, [])

    return (
        <div>
            <h2 className='text-primary text-center'>Add Medicine</h2>
            <table className='table table-hover table-dark text-center fs-5'>
                <thead>
                    <tr>
                        <th>Medicine</th>
                        <th>Quantity</th>
                        {/* <th>Expiry Date</th>
                        <th>Pack</th>
                        <th>Batch</th>
                        <th>Operation</th> */}
                    </tr>
                </thead>
                <tbody>
                    {medicineData.map((ele, index) => (
                        <tr key={index} id={ele.id}>
                            <td>{ele.medicineName}</td>
                            <td>{ele.quantity}</td>
                            {/* <td>{ele.expiryDate}</td>
                            <td>{ele.pack}</td>
                            <td>{ele.batch}</td>
                            <td style={{ width: "20%" }}>
                                <button className='btn btn-primary m-auto ms-3' onClick={() => onEdit(index)}>Edit</button>
                                <button className='btn btn-primary m-auto ms-3' onClick={() => onDelete(index)}>Delete</button>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MainMedicinePage
