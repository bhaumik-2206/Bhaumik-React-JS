import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ModalProfileEdit from './ModalProfileEdit';
import ModalEducationDetails from './ModalEducationDetails';
import PrintInformation from './PrintInformation';
import ModalAddressDetails from './ModalAdressDetails';
import LogOut from './LogOut';
import ChangePassword from './ChangePassword';

const Profile = () => {
    const [userData, setUserData] = useState({});
    const [show, setShow] = useState(false);
    const [showEducationModal, setShowEducationModal] = useState(false);
    const [showAddressModal, setShowAddressModal] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        let id = localStorage.getItem("id");
        if (id) {
            fetch(`http://localhost:3500/registerUser?id=${id}`)
                .then(e => e.json())
                .then(data => {
                    // console.log(data[0])
                    setUserData(data[0])
                })
                .catch(error => console.log("ERROR", error))
        } else {
            console.log("ERROR Token Not Found")
        }
    }, []);

    return (
        <div className='container'>
            <button onClick={() => navigate("/user")} className="bg-red-500 text-white py-2 rounded-lg my-3 px-6">Back</button>
            <div className="flex justify-between align-middle py-4">
                <h1 className="text-4xl text-white">Profile</h1>
                <div>
                    <ChangePassword />
                    <LogOut />
                </div>
            </div>
            <div className='row bg-gray-800 p-3 mb-4 rounded-lg'>
                <PrintInformation value={userData.fullName} title="Full Name" />
                <PrintInformation value={userData.dateOfBirth} title="Date Of Birth" />
                <PrintInformation value={userData.email} title="Email" />
                <PrintInformation value={userData.mobileNumber} title="Mobile Number" />
                <PrintInformation value={userData.bloodGroup} title="Blood Group" />
                <PrintInformation value={userData.gender} title="Gender" />
                <button onClick={() => setShow(true)} className='bg-sky-500 text-xl text-white rounded-lg py-2'>Edit</button>
            </div>
            <ModalProfileEdit show={show} setShow={setShow} userData={userData} setUserData={setUserData} />

            <h1 className="text-4xl text-white mb-3">Address</h1>
            <div className='row bg-gray-800 p-3 mb-4 rounded-lg'>
                <div className="col-md-6 text-white mb-3">
                    <p className='mb-1 text-lg'>Currenrt Address</p>
                    {userData.currentAddress ?
                        <>
                            <p>{userData.currentAddress.homeNumber} , {userData.currentAddress.society}</p>
                            <p>{userData.currentAddress.near}</p>
                            <p>{userData.currentAddress.city} {userData.currentAddress.state} {userData.currentAddress.country} {userData.currentAddress.pincode}</p>
                        </> :
                        <p className='text-gray-400'>Not Added</p>}
                </div>
                <div className="col-md-6 text-white mb-3">
                    <p className='mb-1 text-lg'>Permanent Address</p>
                    {userData.perManentAddress ?
                        <>
                            <p>{userData.perManentAddress.homeNumber} , {userData.perManentAddress.society}</p>
                            <p>{userData.perManentAddress.near}</p>
                            <p>{userData.perManentAddress.city} {userData.perManentAddress.state} {userData.perManentAddress.country} {userData.perManentAddress.pincode}</p>
                        </> :
                        <p className='text-gray-400'>Not Added</p>}
                </div>
                <button onClick={() => setShowAddressModal(true)} className='bg-sky-500 text-xl text-white rounded-lg py-2'>Edit</button>
            </div>
            <ModalAddressDetails show={showAddressModal} setShow={setShowAddressModal} userData={userData} setUserData={setUserData} />

            <h1 className="text-4xl text-white mb-3">Education Details</h1>
            <div className='row bg-gray-800 p-3 mb-4 rounded-lg'>
                <div className="col-md-6 text-white mb-3">
                    <p>Branch</p>
                    {userData.education && userData.education.branch ? <p>{userData.education.branch}</p> : <p className='text-gray-400'>Not Added</p>}
                </div>
                <div className="col-md-6 text-white mb-3">
                    <p>CGPA / Percentage</p>
                    {userData.education && userData.education.percentage ? <p>{userData.education.percentage}</p> : <p className='text-gray-400'>Not Added</p>}
                </div>
                <div className="col-md-6 text-white mb-3">
                    <p>Degree</p>
                    {userData.education && userData.education.degree ? <p>{userData.education.degree}</p> : <p className='text-gray-400'>Not Added</p>}
                </div>
                <div className="col-md-6 text-white mb-3">
                    <p>University / College</p>
                    {userData.education && userData.education.college ? <p>{userData.education.college}</p> : <p className='text-gray-400'>Not Added</p>}
                </div>
                <div className="col-md-6 text-white mb-3">
                    <p>Year Of Completion</p>
                    {userData.education && userData.education.ending ? <p>{userData.education.ending}</p> : <p className='text-gray-400'>Not Added</p>}
                </div>
                <div className="col-md-6 text-white mb-3">
                    <p>Year Of Joining</p>
                    {userData.education && userData.education.joining ? <p>{userData.education.joining}</p> : <p className='text-gray-400'>Not Added</p>}
                </div>
                <button onClick={() => setShowEducationModal(true)} className='bg-sky-500 text-xl text-white rounded-lg py-2'>Edit</button>
            </div>
            <ModalEducationDetails show={showEducationModal} setShow={setShowEducationModal} userData={userData} setUserData={setUserData} />
        </div>
    )
}

export default Profile
