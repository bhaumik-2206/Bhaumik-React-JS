import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from './ConfirmationModal';

const LogOut = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(true)} className="bg-sky-500 text-xl px-4 text-white rounded-lg py-2">Log Out</button>
            <ConfirmationModal show={show} setShow={setShow} />
        </>
    )
}

export default LogOut
