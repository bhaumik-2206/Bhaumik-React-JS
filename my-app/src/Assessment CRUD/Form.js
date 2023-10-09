import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Form = ({ setUserData, getData, isEdit, setIsEdit }) => {
    const [currentData, setCurrentData] = useState({ fname: "", lname: "", email: "", mobile: "", password: "" });
    const navigate = useNavigate();


    useEffect(() => {
        if (isEdit !== -1) {
            console.log(isEdit)
            setCurrentData(isEdit)
        }
    }, [isEdit])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentData(pre => ({ ...pre, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEdit !== -1) {
            try {
                await fetch(`http://localhost:3400/userData/${isEdit.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(currentData),
                });
            } catch (error) {
                console.log("ERROR: " + error)
            }
            setIsEdit(-1);
        } else {
            try {
                await fetch("http://localhost:3400/userData", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(currentData),
                });
            } catch (error) {
                console.log("ERROR: " + error)
            }
        }
        setCurrentData({ fname: "", lname: "", email: "", mobile: "", password: "" });
        navigate("/");
        getData();
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <input className='form-control' placeholder='Enter Your First Name' type="text" name='fname' value={currentData.fname} onChange={handleChange} />
            </div>
            <div className="form-group mb-3">
                <input className='form-control' placeholder='Enter Your Last Name' type="text" name='lname' value={currentData.lname} onChange={handleChange} />
            </div>
            <div className="form-group mb-3">
                <input className='form-control' placeholder='Enter Your Mobile' type="number" name='mobile' value={currentData.mobile} onChange={handleChange} />
            </div>
            <div className="form-group mb-3">
                <input className='form-control' placeholder='Enter Your Email' type="email" name='email' value={currentData.email} onChange={handleChange} />
            </div>
            <div className="form-group mb-3">
                <input className='form-control' placeholder='Enter Your password' type="password" name='password' value={currentData.password} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary d-block m-auto">Add Medicine</button>
        </form>
    )
}

export default Form
