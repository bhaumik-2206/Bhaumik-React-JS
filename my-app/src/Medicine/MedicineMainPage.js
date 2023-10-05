import React, { useEffect, useState } from 'react'
import Table, { AddRecordTable } from './Table';
import AddMedicine from './AddMedicine';
// import Add_OutRecordModal from './Add_OutRecordModal';
import AddRecord from './AddRecord';

const MedicineMainPage = () => {
    const [show, setShow] = useState(false);
    const [showRecordModal, setShowRecordModal] = useState(false);
    const [showOutRecordModal, setShowOutRecordModal] = useState(false);
    const [medicineData, setMedicineData] = useState([]);
    const [isEditInfo, setIsEditInfo] = useState(null);

    const [recordData, setRecordData] = useState([]);
    const [outRecordData, setOutRecordData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3400/addMedicine")
            .then(e => e.json())
            .then(e => setMedicineData(e))
            .catch(e => console.log("ERROR: " + e))
        fetch("http://localhost:3400/addRecord")
            .then(e => e.json())
            .then(e => setRecordData(e))
            .catch(e => console.log("ERROR: " + e))
        fetch("http://localhost:3400/addOutRecord")
            .then(e => e.json())
            .then(e => setOutRecordData(e))
            .catch(e => console.log("ERROR: " + e))
    }, []);

    return (
        <div>
            <div className="text-center py-3 d-flex gap-4 justify-content-center">
                <button className='btn btn-primary fs-5' onClick={() => setShow(true)}>Add Medicine</button>
                <button className='btn btn-primary fs-5' onClick={() => setShowRecordModal(true)}>Add Record</button>
                <button className='btn btn-primary fs-5' onClick={() => setShowOutRecordModal(true)}>Add Out Record</button>
            </div>

            <AddMedicine show={show} setShow={setShow} setMedicineData={setMedicineData} isEditInfo={isEditInfo} setIsEditInfo={setIsEditInfo} medicineData={medicineData} />
            <AddRecord show={showRecordModal} setShow={setShowRecordModal} setData={setRecordData} check="addMedicine" add="addRecord" />
            <AddRecord show={showOutRecordModal} setShow={setShowOutRecordModal} setData={setOutRecordData} check="addRecord" add="addOutRecord" />
            {/* <Add_OutRecordModal showRecordModal={showRecordModal} setShowRecordModal={setShowRecordModal} /> */}

            <Table medicineData={medicineData} setMedicineData={setMedicineData} setIsEditInfo={setIsEditInfo} />
            <AddRecordTable recordData={recordData} />
            <AddRecordTable recordData={outRecordData} />
        </div>
    )
}

export default MedicineMainPage
