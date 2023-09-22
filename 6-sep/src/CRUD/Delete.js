import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function DeleteModal({ show, setShow, onDeleteData, dataToDelete, setDataToDelete }) {
    const handleClose = () => {
        setShow(false);
    }

    const handleDelete = async () => {
        setShow(false);
        try {
            let res = await fetch(`http://localhost:3400/data/${dataToDelete}`);
            if (res.ok) {
                onDeleteData();
            }
        } catch (error) {
            setDataToDelete(-1);
            console.log("ERROR : " + error);
        }
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>DELETE USER</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete the user</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleDelete}>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default DeleteModal;