import React, { useState } from 'react'
import AddOutRecordModal from './Add_OutRecordModal'

const AddRecord = ({ show, setShow, setData, check, add }) => {
    const [currentRecord, setCurrentRecord] = useState({ medicineName: "", quantity: "", selectedItem: "" })

    const handleClose = () => {
        setShow(false);
        setCurrentRecord({ medicineName: "", quantity: "", selectedItem: "" });
    }

    const handleChangeInput = (e) => {
        let { id, value } = e.target;
        setCurrentRecord({ ...currentRecord, [id]: value });
    }

    const addRecordSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch(`http://localhost:3400/${check}`);
            let ans = await res.json();
            let findMedicine = ans.findIndex(ele => ele.medicineName.toLowerCase().trim() === currentRecord.medicineName.toLowerCase().trim())
            if (findMedicine !== -1) {
                let res = await fetch(`http://localhost:3400/${add}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(currentRecord),
                });
                let ans = await res.json();
                setData(preData => [...preData, ans]);
                setShow(false);
            } else {
                alert(`${currentRecord.medicineName} is not available`);
            }
        } catch (error) {
            console.log("ERROR: " + error);
        }
    }

    return (
        <AddOutRecordModal show={show} handleClose={handleClose} handleChangeInput={handleChangeInput} addRecordSubmit={addRecordSubmit} />
    )
}

export default AddRecord;