import React, { useState } from 'react'



const Notification = ({ value }) => {
    const [show, setShow] = useState(true);
    setTimeout(() => {
        setShow(false);
    }, 3000);
    return (
        <div className={`${show ? "block" : "hidden"} bg-sky-500 fixed px-5 py-3 right-5 bottom-5 text-white text-2xl rounded-lg shadow-lg`}>
            {value}
        </div>
    )
}

export default Notification;