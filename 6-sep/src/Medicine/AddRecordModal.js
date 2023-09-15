import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

export default function AddRecordModal({ showAddRecordModal, setShowAddRecordModal, medicineData, setMedicineData, medicineRecord, setMedicineRecord }) {
    const [checkQuantity, setCheckQuantity] = useState(true);
    const [currentRecord, setCurrentRecord] = useState({ medicineName: "", selectedItem: "", quantity: null, })
    const [isMedicineSelect, setIsMedicineSelect] = useState(null);

    const handleClose = () => {
        setShowAddRecordModal(false);
        setCurrentRecord({ medicineName: "", selectedItem: "", quantity: null, });
        setCheckQuantity(true);
        setIsMedicineSelect(null);
    }

    const giveSuggestion = (e) => {
        setCurrentRecord({ ...currentRecord, medicineName: e.target.value });
        // let indexOfInputMedicine = medicineData.map((ele, index) => ele.medicineName.toLowerCase().includes(currentRecord.medicineName.toLowerCase()) ?.ele.medicineName);
        // console.log(indexOfInputMedicine)
        // if (indexOfInputMedicine !== -1) {

        // } else {
        //     alert("Medicine Not Found");
        // }
    }

    const handleSelectedItem = (e) => {
        setCurrentRecord({ ...currentRecord, selectedItem: e.target.value });
    }

    const handleQuantityChange = (e) => {
        setCurrentRecord({ ...currentRecord, quantity: e.target.value });

    }

    const addRecordMedicine = (e) => {
        e.preventDefault();
        let indexOfInputMedicine = medicineData.findIndex((ele, index) => ele.medicineName.toLowerCase() === currentRecord.medicineName.toLowerCase());
        if (indexOfInputMedicine === -1) {
            alert("Medicine not found");
            return;
        }
        if (medicineData[indexOfInputMedicine].quantity >= currentRecord.quantity) {
            setCheckQuantity(true);
        } else {
            setCheckQuantity(false);
            return;
        }
        if (checkQuantity) {
            let isIncludeMedicineData = medicineRecord.findIndex(ele => ele.medicineName === currentRecord.medicineName);
            if (isIncludeMedicineData === -1) {
                let newRecord = {
                    id: medicineRecord.length > 0 ? medicineRecord[medicineRecord.length - 1].id + 1 : 1,
                    medicineName: currentRecord.medicineName,
                    pack: medicineData[indexOfInputMedicine].pack,
                    quantity: currentRecord.quantity,
                    batch: medicineData[indexOfInputMedicine].batch,
                    selectedItem: currentRecord.selectedItem,
                }
                setMedicineRecord((preValue) => [...preValue, newRecord]);
            } else {
                let medicineQuantityUpdated = [...medicineRecord];
                medicineQuantityUpdated[isIncludeMedicineData].quantity = Number(medicineRecord[isIncludeMedicineData].quantity) + Number(currentRecord.quantity);
                setMedicineRecord(medicineQuantityUpdated);
            }
            let medicineQuantityUpdated = [...medicineData];
            medicineQuantityUpdated[indexOfInputMedicine].quantity = medicineData[indexOfInputMedicine].quantity - currentRecord.quantity;
            setMedicineData(medicineQuantityUpdated);
            handleClose();
        }
    }
    return (
        <div>
            <Modal show={showAddRecordModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Medicine</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" onSubmit={addRecordMedicine}>
                        <div className="mb-3 form-group">
                            <label htmlFor="medicineName">Medicine Name</label>
                            <input type="text" className='form-control' id='medicineName' name='medicineName' placeholder="Enter medicine name" onChange={giveSuggestion} required />
                        </div>
                        {
                            !isMedicineSelect?.(<h1>HELLO WOELD</h1>)
                        }
                        <div className="mb-3 form-group">
                            <select id="" value={currentRecord.selectedItem} onChange={handleSelectedItem} name='selectPack' className='mb-3 form-control' required>
                                <option value="">Select Item</option>
                                <option name="1" id="">1</option>
                                <option name="2" id="">2</option>
                                <option name="3" id="">3</option>
                            </select>
                        </div>
                        <div className="mb-3 form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" value={currentRecord.quantity} onChange={handleQuantityChange} className='form-control' name='quantity' min={0} placeholder="Enter medicine Quantity" required />
                        </div>
                        {!checkQuantity ? (
                            <p style={{ color: 'red' }}>Failed Request </p>
                        ) : false}
                        <button type="submit" className='btn btn-primary m-auto d-block mt-3'>Add Record</button>
                    </form>
                </Modal.Body>
            </Modal >
        </div>
    )
}


// function giveSuggestion(e, suggestion, allData, failed) {
//     clicked = false;
//     suggestion.innerHTML = "";
//     let a = allData.findIndex(ele => ele.medicineName.toLowerCase().includes(e.target.value.toLowerCase().trim().slice(0, indexOfSlesh(e)).trim()));
//     if (allData.length == 0 && e.target.value.trim() != "") {
//         failed.style.display = "block";
//     } else if (e.target.value.trim() == "") {
//         clicked = false;
//         failed.style.display = "none";
//     } else if (e.target.value.trim() != "" && a != -1) {
//         allData.forEach(ele => {
//             if (ele.medicineName.toLowerCase().includes(e.target.value.toLowerCase().trim().slice(0, indexOfSlesh(e)).trim())) {
//                 let newEle = document.createElement('p');
//                 newEle.innerText = ele.medicineName;
//                 newEle.addEventListener("click", () => {
//                     if (ele.id.startsWith("addMedicine")) {
//                         e.target.value = ele.medicineName + " | " + ele.pack + " | " + ele.batchName;
//                         addRecord.elements.quantity.value = ele.quantity;
//                     } else if (ele.id.startsWith("addRecord")) {
//                         e.target.value = ele.medicineName;
//                     }
//                 });
//             }
//         });
//     }
// }