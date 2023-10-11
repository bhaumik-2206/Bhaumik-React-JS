import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';

const Home = () => {
	const [ search, setSearch] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log()
    // console.log(setSearchParams)

    useEffect(()=>{
		let searchValue = searchParams.get('search');
		setSearch(searchValue)
	}, [])

    const handleChange = (e) =>{
		setSearch(e.target.value)
	  	setSearchParams({number: e.target.value});
    }

    return (
        <>
            <button>Number is :- {searchParams.get("number")}</button><br />
            <input type="number" value={search} onChange={handleChange} />
        </>
    )
}

export default Home;