import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function DeleteModal({ show, setShow, onDeleteData }) {
    const handleClose = () => {
        setShow(false);
    }

    const handleDelete = () => {
        setShow(false);
        onDeleteData();
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
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