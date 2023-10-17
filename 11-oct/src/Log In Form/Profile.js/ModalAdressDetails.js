import { Formik } from 'formik';
import Modal from 'react-bootstrap/Modal';
import InputComponent from '../InputComponent';
import { useEffect, useState } from 'react';

function ModalAddressDetails({ show, setShow, userData, setUserData }) {
    const [cAddress, setCAddress] = useState({ homeNumber: "", society: "", near: "", city: "", state: "", country: "", pincode: "" });
    const [perAddress, setPerAddress] = useState({ homeNumber: "", society: "", near: "", city: "", state: "", country: "", pincode: "" });
    const [checkButton, setCheckButton] = useState(false);
    useEffect(() => {
        setCAddress(pre => ({ ...pre, ...userData.currentAddress }))
        setPerAddress(pre => ({ ...pre, ...userData.perManentAddress }));
    }, [userData])

    const handleSubmit = async (values, action) => {
        try {
            let res = await fetch(`http://localhost:3500/registerUser/${userData.id}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            });
            if (res.ok) {
                let a = await fetch(`http://localhost:3500/registerUser/${userData.id}`);
                let b = await a.json();
                setUserData(b);
                setShow(false);
            }
        } catch (error) {
            console.log("ERROR: " + error);
        }
    }

    return (
        <>
            <Modal
                size="lg"
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Address
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{ ...userData, currentAddress: cAddress, perManentAddress: perAddress }}
                        onSubmit={handleSubmit}
                        enableReinitialize
                    >
                        {props => (
                            <form className='row justify-center ' onSubmit={props.handleSubmit} action="">
                                <div className="col-6">
                                    <InputComponent type="text" name="currentAddress.homeNumber" props={props} placeholder='Enter Your Home Number' />
                                    <InputComponent type="text" name="currentAddress.society" props={props} placeholder='Enter Society Name' />
                                    <InputComponent type="text" name="currentAddress.near" props={props} placeholder='Enter Near Destination' />
                                    <InputComponent type="text" name="currentAddress.city" props={props} placeholder='Enter City Name' />
                                    <InputComponent type="text" name="currentAddress.state" props={props} placeholder='Enter State Name' />
                                    <InputComponent type="text" name="currentAddress.country" props={props} placeholder='Enter Country Name' />
                                    <InputComponent type="text" name="currentAddress.pincode" props={props} placeholder='Enter Pin Code' />
                                </div>
                                <div className="col-6">
                                    <InputComponent type="text" name="perManentAddress.homeNumber" props={props} placeholder='Enter Your Home Number' />
                                    <InputComponent type="text" name="perManentAddress.society" props={props} placeholder='Enter Society Name' />
                                    <InputComponent type="text" name="perManentAddress.near" props={props} placeholder='Enter Near Destination' />
                                    <InputComponent type="text" name="perManentAddress.city" props={props} placeholder='Enter City Name' />
                                    <InputComponent type="text" name="perManentAddress.state" props={props} placeholder='Enter State Name' />
                                    <InputComponent type="text" name="perManentAddress.country" props={props} placeholder='Enter Country Name' />
                                    <InputComponent type="text" name="perManentAddress.pincode" props={props} placeholder='Enter Pin Code' />
                                    <input type="checkbox" id='currAddress'
                                        onChange={() => {
                                            setCheckButton(!checkButton);
                                            if (checkButton) {
                                                setPerAddress(props.values.currentAddress)
                                            }
                                            // else {
                                            //     setPerAddress({ ...formData, PermAddress: formData.CurrAddress })
                                            // }
                                            // setCheckButton(pre => !pre)
                                            // if (checkButton) setPerAddress(props.values.currentAddress)
                                        }}
                                    />
                                    <label htmlFor="currAddress">Same As Current Address</label>
                                </div>
                                <div className='text-center'>
                                    <button type="button" className=' bg-red-500 text-lg text-white rounded-lg py-2 px-3 mx-2 ' onClick={() => setShow(false)}>Close</button>
                                    <button type="submit" className=' bg-sky-500 text-lg text-white rounded-lg py-2 px-3 mx-2 '>Update</button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default ModalAddressDetails;