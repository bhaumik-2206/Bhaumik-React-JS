import React, { useEffect, useState } from 'react'

const History = () => {
    const [orderedItems, setOrderedItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3401/orderedItem")
            .then(e => e.json())
            .then(data => setOrderedItems(data))
            .catch(error => console.log(error))
    }, [])

    console.log(orderedItems)

    return (
        <div>
            {
                orderedItems.map((ele, index) => (
                    <div className='w-75 mx-auto bg-slate-0 border-1 shadow-md rounded-xl my-3 p-3' key={ele.id}>
                        {ele.value.map((item, index) => (
                            <div key={index}>
                                <p>{}</p>
                                <p>{item.price}</p>
                            </div>
                        ))}
                    </div>
                ))
            }
        </div>
    )
}

export default History
