// import allData from './MainArray';
import { useState } from 'react'
export default function MakeTable({ tableData, sendDataToParent }) {
    const [mainArray, setMainArray] = useState(tableData);
    const onDelete = (index) => {
        console.log(index);
        let a = mainArray.filter((ele, i) => i !== index);
        // let indexToSplice = a.findIndex(ele => ele.id === index + 1);
        // let index = a.map(e => e.id).indexOf(id);
        // console.log(index);
        // a.splice(index - 1, 1);
        console.log(a)
        setMainArray(a);
        sendDataToParent(a);
    }
    return (
        tableData.length > 0 ?
            (
                <table>
                    <tr>
                        <td>Medicine</td>
                        <td>Quantity</td>
                        <td>Expiry Date</td>
                        <td>Pack</td>
                        <td>Batch</td>
                        <td>Operation</td>
                    </tr>
                    {tableData.map((ele, index) => (
                        <tr key={index}>
                            <td>{ele.medicineName}</td>
                            <td>{ele.quantity}</td>
                            <td>{ele.expiryDate}</td>
                            <td>{ele.pack}</td>
                            <td>{ele.batchName}</td>
                            <td>
                                <button>Edit</button>
                                <button onClick={() => onDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </table>
            ) :
            <h1>No Record Required</h1>
    )
}