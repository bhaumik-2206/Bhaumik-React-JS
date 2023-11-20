import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, setUser } from '../../feature/crud/crud';
import { useNavigate } from 'react-router-dom';

const Table = ({ setIsEditData }) => {
    // const navigate = useNavigate();
    const userData = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("http://localhost:3400/data")
            .then(res => res.json())
            .then(data => dispatch(setUser(data)))
    }, []);

    return (
        <>
            <button
                type="submit"
                // onClick={() => navigate("/addUser")}
                className="my-3 block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Add User
            </button>
            <div className="container mx-auto my-8">
                {userData.length > 0 ? (
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">First Name</th>
                                <th className="py-2 px-4 border-b">Last Name</th>
                                <th className="py-2 px-4 border-b">Age</th>
                                <th className="py-2 px-4 border-b">Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((user, index) => (
                                <tr key={index} className={(index % 2 === 0) ? 'bg-gray-100' : ''}>
                                    <td className="py-2 px-4 border-b">{user.fname}</td>
                                    <td className="py-2 px-4 border-b">{user.lname}</td>
                                    <td className="py-2 px-4 border-b">{user.age}</td>
                                    <td className="py-2 px-4 border-b space-x-2">
                                        <button
                                            onClick={() => setIsEditData(user.id)}
                                            // onClick={() => navigate(`/editUser/${user.id}`)}
                                            className="text-blue-500 hover:text-blue-700 focus:outline-none">
                                            Edit
                                        </button>
                                        <button onClick={() => dispatch(deleteUser(user.id))} className="text-red-500 hover:text-red-700 focus:outline-none">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <h1 className="text-xl font-semibold text-center text-gray-700">
                        User Data Is Empty
                    </h1>
                )}
            </div>
        </>
    );
}

export default Table;
