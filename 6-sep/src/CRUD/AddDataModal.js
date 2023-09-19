import React, { useState, useEffect } from 'react'
import ModalUserForm from './Modal';

export default function AddDataModal({ userData, show, setShow, onAddUser, isEditInfo, setIsEditInfo, setLastSaveData }) {
    let falseData = { fname: "", lname: "", password: "", mobile: "", email: "" };
    const [currentUserData, setCurrentUserData] = useState({ fname: "", lname: "", email: "", password: "", mobile: "" })
    const [isDataFalse, setIsDataFalse] = useState(falseData);

    useEffect(() => {
        if (isEditInfo !== -1) {
            fetch('http://localhost:3400/data')
                .then((response) => response.json())
                .then((data) => {
                    let editedData = data.find(ele => ele.id === isEditInfo);
                    setCurrentUserData(editedData);
                });
        }
    }, [isEditInfo, userData])

    const handleClose = () => {
        setShow(false);
        setIsEditInfo(-1);
        setCurrentUserData({ fname: "", lname: "", email: "", password: "", mobile: "" });
        setIsDataFalse(falseData);
    }

    const validationRulesAndError = {
        fname: {
            min: 3,
            error: 'First Name must have at least 3 letters',
        },
        lname: {
            min: 3,
            error: 'Last Name must have at least 3 letters',
        },
        email: {
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            error: 'Please enter a valid Email',
        },
        password: {
            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^*&+=/_-]).{8,}$/,
            error: 'Your password is not strong enough. Please include at least 8 character and one Lowercase , Uppercase , Number and Special Character.',
        },
        mobile: {
            min: 10,
            max: 10,
            error: 'Mobile Number must have exactly 10 numbers',
        },
    };

    const checkSetTheTrueData = (e) => {
        const { id, value } = e.target;
        const rule = validationRulesAndError[id];
        setCurrentUserData(preValue => ({ ...preValue, [id]: value }));
        // console.log(value.split(" ").filter(Boolean).join("").length)
        if (value.length === 0) {
            setIsDataFalse({ ...isDataFalse, [id]: '' });
        } else if (id === "password" && value.includes(" ")) {
            setIsDataFalse({ ...isDataFalse, [id]: <p style={{ color: 'red' }}>Password cannot contain spaces</p> });
        } else if (rule.pattern && !rule.pattern.test(value)) {
            setIsDataFalse({ ...isDataFalse, [id]: <p style={{ color: 'red' }}>{rule.error}</p> });
        } else if (rule.min && value.split(" ").filter(Boolean).join(" ").length < rule.min) {
            setIsDataFalse({ ...isDataFalse, [id]: <p style={{ color: 'red' }}>{rule.error}</p> });
        } else if (rule.max && value.trim().length > rule.max) {
            setIsDataFalse({ ...isDataFalse, [id]: <p style={{ color: 'red' }}>{rule.error}</p> });
        } else {
            setIsDataFalse({ ...isDataFalse, [id]: '' });
        }
    };
    // console.log("       HELLO       WORLD      ".split(" ").filter(Boolean).join(" "));
    function addUserInTable(e) {
        e.preventDefault();
        let error = <p style={{ color: 'red' }}>Field Required*</p>
        for (const key in isDataFalse) {
            // console.log(currentUserData[key]);
            if (currentUserData[key].trim() === "") {
                setIsDataFalse(preValue => ({ ...preValue, [key]: error }));
            }
        }
        // if (currentUserData.fname.trim() === "") {
        //     setIsDataFalse(preValue => ({ ...preValue, fname: error }));
        // }
        // if (currentUserData.lname.trim() === "") {
        //     setIsDataFalse(preValue => ({ ...preValue, lname: error }));
        // }
        // if (currentUserData.email.trim() === "") {
        //     setIsDataFalse(preValue => ({ ...preValue, email: error }));
        // }
        // if (currentUserData.password.trim() === "") {
        //     setIsDataFalse(preValue => ({ ...preValue, password: error }));
        // }
        // if (currentUserData.mobile.trim() === "") {
        //     setIsDataFalse(preValue => ({ ...preValue, mobile: error }));
        // }
        if (!isDataFalse.fname && !isDataFalse.lname && !isDataFalse.email && !isDataFalse.password && !isDataFalse.mobile && currentUserData.fname && currentUserData.lname && currentUserData.email && currentUserData.password && currentUserData.mobile) {
            onAddUser(currentUserData);
            handleClose();
        }
    }

    return (
        <div>
            <ModalUserForm show={show} isEditInfo={isEditInfo} isDataFalse={isDataFalse} checkSetTheTrueData={checkSetTheTrueData} currentUserData={currentUserData} handleClose={handleClose} addUserInTable={addUserInTable} userData={userData} />
        </div>
    )
}

// const checkSetTheTrueData = (e) => {
//     if (e.target.id === "fname") {
//         setCurrentUserData(preValue => ({ ...preValue, fname: e.target.value }));
//         if (e.target.value.trim().length === 0) {
//             setIsDataFalse({ ...isDataFalse, fname: "" });
//         } else if (e.target.value.trim().length < 3) {
//             setIsDataFalse({ ...isDataFalse, fname: <p style={{ color: 'red' }}>First Name Have At least 3 letter</p> });
//         } else {
//             setIsDataFalse({ ...isDataFalse, fname: "" });
//         }
//     } else if (e.target.id === "lname") {
//         setCurrentUserData(preValue => ({ ...preValue, lname: e.target.value }));
//         if (e.target.value.trim().length === 0) {
//             setIsDataFalse({ ...isDataFalse, lname: "" });
//         } else if (e.target.value.trim().length < 3) {
//             setIsDataFalse({ ...isDataFalse, lname: <p style={{ color: 'red' }}>Last Name Have At least 3 letter</p> });
//         } else {
//             setIsDataFalse({ ...isDataFalse, lname: "" });
//         }
//     } else if (e.target.id === "email") {
//         setCurrentUserData(preValue => ({ ...preValue, email: e.target.value }));
//         if (e.target.value.trim().length === 0) {
//             setIsDataFalse({ ...isDataFalse, email: "" });
//         } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.target.value)) {
//             setIsDataFalse({ ...isDataFalse, email: <p style={{ color: 'red' }}>Please Enter Valid Email</p> });
//         } else {
//             setIsDataFalse({ ...isDataFalse, email: "" });
//         }
//     } else if (e.target.id === "password") {
//         setCurrentUserData(preValue => ({ ...preValue, password: e.target.value }));
//         if (e.target.value.length === 0) {
//             setIsDataFalse({ ...isDataFalse, mobile: "" });
//         } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^*&+=_-]).{8,}$/.test(e.target.value)) {
//             setIsDataFalse({ ...isDataFalse, password: <p style={{ color: 'red' }}>Your password is not strong enough. Please enter atleast one Lowercase , Uppercase , Number , Special character</p> });
//         } else {
//             setIsDataFalse({ ...isDataFalse, password: "" });
//         }
//     } else if (e.target.id === "mobile") {
//         setCurrentUserData(preValue => ({ ...preValue, mobile: e.target.value }));
//         if (e.target.value.trim().length === 0) {
//             setIsDataFalse({ ...isDataFalse, mobile: "" });
//         } else if (e.target.value.length < 10 || e.target.value.length > 10) {
//             setIsDataFalse({ ...isDataFalse, mobile: <p style={{ color: 'red' }}>Mobile Number Have Atleast 10 number</p> });
//         } else {
//             setIsDataFalse({ ...isDataFalse, mobile: "" });
//         }
//     }
// }


// const checkSetFirstName = (e) => {
//     setCurrentUserData(preValue => ({ ...preValue, fname: e.target.value }));
//     if (e.target.value.trim().length === 0) {
//         setIsDataFalse({ ...isDataFalse, fname: "" });
//     } else if (e.target.value.trim().length < 3) {
//         setIsDataFalse({ ...isDataFalse, fname: <p style={{ color: 'red' }}>First Name Have At least 3 letter</p> });
//     } else {
//         setIsDataFalse({ ...isDataFalse, fname: "" });
//     }
// }
// const checkSetLastName = (e) => {
//     setCurrentUserData(preValue => ({ ...preValue, lname: e.target.value }));
//     if (e.target.value.trim().length === 0) {
//         setIsDataFalse({ ...isDataFalse, lname: "" });
//     } else if (e.target.value.trim().length < 3) {
//         setIsDataFalse({ ...isDataFalse, lname: <p style={{ color: 'red' }}>Last Name Have At least 3 letter</p> });
//     } else {
//         setIsDataFalse({ ...isDataFalse, lname: "" });
//     }
// }
// const checkSetEmail = (e) => {
//     setCurrentUserData(preValue => ({ ...preValue, email: e.target.value }));
//     if (e.target.value.trim().length === 0) {
//         setIsDataFalse({ ...isDataFalse, email: "" });
//     } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.target.value)) {
//         setIsDataFalse({ ...isDataFalse, email: <p style={{ color: 'red' }}>Please Enter Valid Email</p> });
//     } else {
//         setIsDataFalse({ ...isDataFalse, email: "" });
//     }
// }
// const checkSetPassword = (e) => {
//     setCurrentUserData(preValue => ({ ...preValue, password: e.target.value }));
//     if (e.target.value.trim().length === 0) {
//         setIsDataFalse({ ...isDataFalse, password: "" });
//     } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^*&+=_-]).{8,}$/.test(e.target.value)) {
//         setIsDataFalse({ ...isDataFalse, password: <p style={{ color: 'red' }}>Please Include atleast one lowercase,uppercase,number,special character</p> });
//     } else {
//         setIsDataFalse({ ...isDataFalse, password: "" });
//     }
// }
// const checkSetMobileNumber = (e) => {
//     setCurrentUserData(preValue => ({ ...preValue, mobile: e.target.value }));
//     if (e.target.value.trim().length === 0) {
//         setIsDataFalse({ ...isDataFalse, mobile: "" });
//     } else if (e.target.value.length < 10 || e.target.value.length > 10) {
//         setIsDataFalse({ ...isDataFalse, mobile: <p style={{ color: 'red' }}>Mobile Number Have Atleast 10 number</p> });
//     } else {
//         setIsDataFalse({ ...isDataFalse, mobile: "" });
//     }
// }
