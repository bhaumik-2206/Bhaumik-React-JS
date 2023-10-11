import React from 'react'

const ConfirmationModal = ({ show, setShow, deleteId, getData }) => {
    const handleClose = () => {
        setShow(false);
    }

    const handleDelete = async () => {
        if (deleteId !== -1) {
            try {
                let res = await fetch(`http://localhost:3401/userData/${deleteId}`, {
                    method: 'DELETE'
                })
                if (res.ok) {
                    setShow(false);
                    getData();
                }
            } catch (error) {
                console.log("ERROR: " + error);
            }
        }
    }


    return (
        <div className={`${show ? "d-block" : "d-none"} bg-secondary p-3 w-50 position-absolute top-50 start-50 translate-middle rounded-4`}>
            <h2>Are you sure you want to delete the data!!!</h2>
            <div className='d-flex justify-content-center gap-3'>
                <button className='btn btn-primary' onClick={handleClose}>NO</button>
                <button className='btn btn-primary' onClick={handleDelete}>DELETE</button>
            </div>
        </div>

        // <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        //     <div class="modal-dialog">
        //         <div class="modal-content">
        //             <div class="modal-header">
        //                 <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        //                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //             </div>
        //             <div class="modal-body">
        //                 ...
        //             </div>
        //             <div class="modal-footer">
        //                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        //                 <button type="button" class="btn btn-primary">Save changes</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ConfirmationModal;