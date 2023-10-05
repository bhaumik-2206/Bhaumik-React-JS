// import React from 'react'

// const Task1 = ({ country }) => {
//     const handleClick = (e) => {
//         if (e.target.style.backgroundColor === "dodgerblue") {
//             e.target.style.backgroundColor = "";
//         } else {
//             e.target.style.backgroundColor = "dodgerblue";
//         }
//     }
//     return (
//         <div>
//             {
//                 country.map((ele) => (
//                     <button key={ele} onClick={handleClick}>{ele}</button>
//                 ))
//             }
//         </div>
//     )
// }

// export default Task1


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Task1 = ({ country }) => {
    const [clickedArray, setClickedArray] = useState([]);
    const params = useParams();
    let totalBtn = params.button; 

    const handleClick = (e) => {
        setClickedArray(pre => {
            if (pre.includes(e)) {
                return pre.filter(ele => ele !== e);
            } else {
                return [...pre, e];
            }
        })
    };

    return (
        <div>
            {country.slice(0,totalBtn).map((ele) => (
                <button key={ele} id={ele}
                    className={`btn border border-2 fs-5 me-2 ${clickedArray.includes(ele) ? 'btn-primary' : ''}`}
                    onClick={() => handleClick(ele)}
                >
                    {ele}
                </button>
            ))}
        </div>
    );
};

export default Task1;