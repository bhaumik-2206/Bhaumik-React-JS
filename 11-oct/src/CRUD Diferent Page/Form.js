import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Form = () => {
    const { field } = useParams();
    const navigate = useNavigate();
    const [currentData, setCurrentData] = useState({ firstName: "", lastName: "", age: "", mobileNumber: "" })

    let validField = ["firstName", "lastName", "age", "mobileNumber"];

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (field !== "mobileNumber") {
            navigate(`/addUser/${validField[validField.findIndex(ele => ele === field) + 1]}`)
        } else {
            try {
                let res = await fetch("http://localhost:3500/userData", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(currentData)
                })
                if (res.ok) {
                    navigate("/")
                }
            } catch (error) {
                alert("ERROR: " + error.message)
            }
        }
    }
    return (
        <>
            {validField.includes(field) ? (
                <div className='ml-3'>
                    <h1 className='text-2xl'>Enter Your {field}</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <input
                            type={field === "firstName" || field === "lastName" ? "text" : "number"}
                            className='bg-sky-50 text-black border border-slate-950 p-1 text-lg w-1/2'
                            id={field}
                            value={currentData[field]}
                            onChange={(e) => setCurrentData(pre => ({ ...pre, [field]: e.target.value }))}
                            required
                        />
                        <br />
                        {/* <button onClick={handlePreForm}>PRE</button> */}
                        {field === "firstName" ?
                            (false) :
                            (<button
                                className='bg-blue-500 text-white my-3 rounded-lg'
                                type='button'
                                onClick={() => navigate(`/addUser/${validField[validField.findIndex(ele => ele === field) - 1]}`)}
                            >Previous</button>)
                        }
                        {field === "mobileNumber" ?
                            (<button
                                className='bg-blue-500 text-white my-3 rounded-lg'
                                type='submit'>Submit</button>) :
                            (<button
                                className='bg-blue-500 text-white my-3 rounded-lg'
                                type='submit'>Next</button>)}
                        <button className='bg-red-600 text-white my-3 rounded-lg' type='button' onClick={() => navigate("/")}>Cancel</button>
                    </form>
                </div>
            ) : (<h1 className='text-3xl'>This is not a valid field</h1>)}
        </ >
    )
}

export default Form
