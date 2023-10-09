import React, { useEffect, useState } from 'react'
import ModalConfDelete from './ModalConfDelete';
import { useNavigate } from 'react-router-dom';
import PrintTable from './PrintTable';

const UserTable = ({ userData, getData, setIsEdit, setUserData }) => {
    const [show, setShow] = useState(false);
    const [deleteOrNot, setDeleteOrNot] = useState(-1);
    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setSearchData(userData.filter(ele => ele.fname.toLowerCase().trim().includes(search.toLowerCase().trim()) || ele.lname.toLowerCase().trim().includes(search.toLowerCase().trim())));
        // console.log(searchData);

        // let timer = setTimeout(async () => {
        //     let res = await fetch("http://localhost:3400/userData");
        //     let result = await res.json();
        //     setUserData(result.filter(ele => ele.fname.toLowerCase().trim().includes(search.toLowerCase().trim()) || ele.lname.toLowerCase().trim().includes(search.toLowerCase().trim())));
        // }, 500);
        // return () => clearTimeout(timer);
    }, [search]);



    const handleEdit = async (editedData) => {
        try {
            let res = await fetch(`http://localhost:3400/userData/${editedData.id}`)
            if (res.ok) {
                setIsEdit(editedData);
            }
        } catch (error) {
            console.log("ERROR: " + error);
        }
        navigate("/details")
    }

    const handleDelete = (id) => {
        setShow(true);
        setDeleteOrNot(id);
    }

    const deleteData = async () => {
        console.log("first")
        await fetch(`http://localhost:3400/userData/${deleteOrNot}`, {
            method: 'DELETE',
            headers: {
                "content-type": 'application/json'
            }
        });
        getData();
        setDeleteOrNot(-1);
    }

    return (
        <>
            <div className="form-group my-3 w-75 m-auto">
                <input
                    type="text"
                    placeholder='Search'
                    className="form-control"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <PrintTable userData={search.length > 0 ? searchData : userData} handleEdit={handleEdit} handleDelete={handleDelete} />
            <ModalConfDelete show={show} deleteOrNot={deleteOrNot} setShow={setShow} deleteData={deleteData} />
        </>
    )
}

export default UserTable
