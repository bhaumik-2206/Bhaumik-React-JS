import React from 'react'

const PrintInformation = ({ value, title }) => {

    return (
        <div className="col-md-6 text-white mb-3">
            <p>{title}</p>
            {value ? <p>{value}</p> : <p className='text-gray-400'>Not Added</p>}
        </div>
    )
}

export default PrintInformation
