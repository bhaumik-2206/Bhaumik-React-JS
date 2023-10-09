import React, { useEffect } from 'react'

const ModalConfDelete = ({ show, deleteOrNot, setShow, deleteData }) => {

    const handleClose = () => {
        setShow(false);
    }

    const handleDelete = async () => {
        if (deleteOrNot !== -1) {
            try {
                let res = await fetch(`http://localhost:3400/userData/${deleteOrNot}`)
                if (res.ok) {
                    setShow(false);
                    console.log("first")
                    deleteData();
                }
            } catch (error) {
                console.log("ERROR: " + error);
            }
        }
    }


    return (
        <div className={`${show ? "d-block" : "d-none"} bg-secondary p-3 w-50 fixed top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4`}>
            <h2>Are you sure you want to delete the data!!!</h2>
            <div className='d-flex justify-content-center gap-3'>
                <button className='btn btn-primary' onClick={handleClose}>NO</button>
                <button className='btn btn-primary' onClick={handleDelete}>DELETE</button>
            </div>
        </div>
    )
}

export default ModalConfDelete
