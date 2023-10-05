import React, { useState } from 'react'

const Task2 = ({ country }) => {
    const [clicked, setClicked] = useState("");
    const handleClick = (ele) => {
        if (clicked === ele) {
            setClicked("");
        } else {
            setClicked(ele);
        }
    }
    return (
        <div>
            {country.map((ele) => (
                <button key={ele}
                    className={`btn border border-2 fs-5 me-2 ${ele === clicked ? 'btn-primary' : ''}`}
                    onClick={() => handleClick(ele)}>{ele}</button>
            ))}
        </div>
    )
}

export default Task2
