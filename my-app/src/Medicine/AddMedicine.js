import React, { useEffect, useState } from 'react'
// import Modal from 'react-bootstrap/Modal';
import AddMeddicineModal from './AddMeddicineModal';

const AddMedicine = ({ setShow, show, setMedicineData, isEditInfo, setIsEditInfo, medicineData }) => {
    const [currentMedicine, setCurrentMedicine] = useState({ medicineName: "", quantity: "", pack: "", expiryDate: "", batch: "" })

    const handleClose = () => {
        setShow(false);
        setCurrentMedicine({ medicineName: "", quantity: "", pack: "", expiryDate: "", batch: "" });
        setIsEditInfo(null);
    }

    useEffect(() => {
        if (isEditInfo) {
            setCurrentMedicine(isEditInfo);
            setShow(true);
        }
    }, [isEditInfo])

    const handleChangeInput = (e) => {
        let { id, value } = e.target;
        setCurrentMedicine({ ...currentMedicine, [id]: value });
    }

    const addMedicineOnSubmit = async (e) => {
        e.preventDefault();
        if (isEditInfo) {
            try {
                let res = await fetch(`http://localhost:3400/addMedicine/${isEditInfo.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(currentMedicine),
                })
                let ans = await res.json();
                setMedicineData(pre => pre.map(ele => ele.id === isEditInfo.id ? ans : ele));
                setShow(false);
                setIsEditInfo(null);
            } catch (error) {
                console.log("ERROR: " + error);
            }
        } else {
            try {
                let res = await fetch("http://localhost:3400/addMedicine", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(currentMedicine),
                })
                let ans = await res.json();
                setMedicineData(pre => [...pre, ans]);
                setShow(false);
                console.log("first");
            } catch (error) {
                console.log("ERROR: " + error);
            }
        }
    }

    return (
        <AddMeddicineModal show={show} handleChangeInput={handleChangeInput} currentMedicine={currentMedicine} addMedicineOnSubmit={addMedicineOnSubmit} handleClose={handleClose} />
    );
}
export default AddMedicine