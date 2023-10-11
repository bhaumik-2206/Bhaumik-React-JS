import React from 'react'

const ConfirmationModal = ({ show, setShow, setDeleteId, getData, deleteId }) => {
    const handleDelete = async () => {
        if(deleteId !== -1){
            try {
                let res = await fetch(`http://localhost:3500/userData/${deleteId}`,{
                    method: 'DELETE',
                });
                if(res.ok){
                    setShow(false);
                    getData();
                    setDeleteId(-1);
                }
            } catch (error) {
                alert("Data Not Found")
            }
        }
        // console.log("first")
    }
    return (
        <div className={`${show ? "block" : "hidden"} bg-white border shadow-2xl border-black rounded-2xl px-4 py-10 w-4/6 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-4`}>
            <h2 className="text-2xl mb-5">Are you sure you want to delete the data!!!</h2>
            <div className='d-flex justify-content-center gap-3'>
                <button className='bg-blue-500 text-white my-3 rounded-lg' onClick={() => setShow(false)}>NO</button>
                <button className='bg-blue-500 text-white my-3 rounded-lg' onClick={handleDelete}>DELETE</button>
            </div>
        </div>
    )
}

export default ConfirmationModal;