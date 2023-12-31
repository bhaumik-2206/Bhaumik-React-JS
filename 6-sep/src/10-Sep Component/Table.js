import Table from 'react-bootstrap/Table';
export default function MakeTable({ tableData, sendDataToParent, setShow, setEditInfo }) {
    const onDelete = (index) => {
        const updatedArray = tableData.filter((ele, i) => i !== index);
        sendDataToParent(updatedArray);
    }
    const onEdit = (index) => {
        let value = tableData[index];
        setEditInfo(value);
        setShow(true);
    };
    return (
        tableData.length > 0 ?
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
                        {tableData.map((ele, index) => (
                            <tr key={index} id={ele.id}>
                                <td>{ele.medicineName}</td>
                                <td>{ele.quantity}</td>
                                <td>{ele.expiryDate}</td>
                                <td>{ele.pack}</td>
                                <td>{ele.batchName}</td>
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
            <h1 className='text-white'>No Record Required</h1>
    )
}