import React, { useEffect, useState } from 'react'

const SearchUser = () => {
    const [userData, setUserData] = useState([])
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        // let timer;
        // if (!searchValue === "") {
        let timer = setTimeout(async () => {
            let res = await fetch("http://localhost:3500/registerUser");
            let result = await res.json();
            setUserData(result.filter(user => {
                return user.fullName.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
            }));
            console.log(userData);
        }, 500);
        // }
        return () => clearTimeout(timer);
    }, [searchValue]);


    return (
        <div className='form-group w-50 mx-auto my-3'>
            <input type="text" className='form-control' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Search For Any User' />
            {userData.map(ele => (
                <p className='text-white mt-2'>{ele.fullName}</p>
            ))}
        </div>
    )
}

export default SearchUser;