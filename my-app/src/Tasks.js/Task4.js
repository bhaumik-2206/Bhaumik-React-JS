import React, { useEffect, useState } from 'react'

const Task4 = ({ countryPair }) => {
    const [countryArray, setCountryArray] = useState(Object.entries(countryPair));
    const [clickedButton, setClickedButton] = useState([]);
    const [checkCapital, setCheckCapital] = useState(false);
    useEffect(() => {
        if (clickedButton.length >= 2) {
            let checkName = countryArray.findIndex((ele) => ele.includes(clickedButton[0]) && ele.includes(clickedButton[1]));
            // console.log(checkName);
            if (checkName !== -1) {
                setTimeout(() => {
                    setCountryArray(pre => pre.filter((e, index) => index !== checkName));
                }, 500);
            } else {
                setCheckCapital(true);
            }
            setTimeout(() => {
                setClickedButton([]);
            }, 500);
        }

    }, [clickedButton, countryArray]);

    const handleClick = (ele) => {
        if (clickedButton.includes(ele)) {
            setClickedButton(clickedButton.filter(e => e !== ele));
        } else {
            setClickedButton(pre => [...pre, ele]);
        }
        setCheckCapital(false);
    }
    return (
        <div>
            {
                countryArray.flat().map(ele => (
                    <button key={ele}
                        className={`btn border border-2 me-2 fs-5 ${clickedButton.includes(ele) ? (!checkCapital ? "btn-primary" : "btn-danger") : ""}`}
                        onClick={() => handleClick(ele)}>{ele}</button>
                ))
            }
        </div >
    )
}

export default Task4;