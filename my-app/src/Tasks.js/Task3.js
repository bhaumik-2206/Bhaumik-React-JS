import React, { useState } from 'react'

const Task3 = ({ country }) => {
    const [clickedBtn, setClickedBtn] = useState([]);
    const handleClick = (ele) => {
        if (clickedBtn.includes(ele)) {
            setClickedBtn(pre => pre.filter(e => e !== ele));
        } else if (clickedBtn.length > 2) {
            return;
        } else {
            setClickedBtn(pre => [...pre, ele]);
        }
    }
    return (
        <div>
            {country.map((ele) => (
                <button key={ele}
                    className={`btn border border-2 fs-5 me-2 ${clickedBtn.includes(ele) ? 'btn-primary' : ''}`}
                    onClick={() => handleClick(ele)}>{ele}</button>
            ))}
        </div>
    )
}

export default Task3;