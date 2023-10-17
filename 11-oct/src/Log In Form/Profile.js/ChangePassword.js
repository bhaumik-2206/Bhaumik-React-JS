import React, { useState } from 'react'

const ChangePassword = () => {
    const [show, setShow] = useState(false);

    const handleChangePassword = () => {

    }
    return (
        <button onClick={handleChangePassword} className="bg-sky-500 text-lg me-3 px-3 text-white rounded-lg py-1">Change Password</button>
    )
}

export default ChangePassword;