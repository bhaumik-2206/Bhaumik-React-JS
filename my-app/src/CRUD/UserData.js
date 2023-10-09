import React from 'react'

const UserData = ({ data, getData, setIsEdit, setShow }) => {
    console.log(data);
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete!!!')) {
            try {
                let res = await fetch(`http://localhost:3400/userCRUD/${id}`)
                if (res.ok) {
                    let a = await fetch(`http://localhost:3400/userCRUD/${id}`, {
                        method: 'DELETE',
                        headers: {
                            "content-type": 'application/json'
                        }
                    });
                }
            } catch (error) {
                console.log("ERROR: " + error);
            }
            getData();
        }
    }

    const handleEdit = async (data) => {
        try {
            let res = await fetch(`http://localhost:3400/userCRUD/${data.id}`)
            if (res.ok) {
                setShow(true);
                setIsEdit(data);
            }
        } catch (error) {
            console.log("ERROR: " + error);
        }
    }
    return (
        <table className='border-black'>
            <tr className='border'>
                <th>Sr. No.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Operation</th>
            </tr>
            {
                data.map((ele, index) => (
                    <tr key={index} className='border'>
                        <td>{index + 1}</td>
                        <td>{ele.fname}</td>
                        <td>{ele.lname}</td>
                        <td>{ele.age}</td>
                        <td>
                            <button onClick={() => handleEdit(ele)}>EDIT</button>
                            <button onClick={() => handleDelete(ele.id)}>DELETE</button>
                        </td>
                    </tr>
                ))
            }
        </table>
    )
}

export default UserData
