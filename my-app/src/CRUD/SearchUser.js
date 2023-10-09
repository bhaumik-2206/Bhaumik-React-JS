import React from 'react'

const SearchUser = ({ search, setSearch }) => {
    return (
        <div className="form-group w-50 my-3 m-auto">
            <input className='form-control ' type="text" placeholder='Search For Any User' value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
}

export default SearchUser
