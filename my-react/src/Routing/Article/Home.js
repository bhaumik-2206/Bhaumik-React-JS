import React, { useEffect, useState } from 'react'

const Home = () => {
    const [articleData, setArticleData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3401/article")
            .then(e => e.json())
            .then(data => setArticleData(data))
            .catch(e => console.log("ERROR: " + e.message));
    }, [])



    return (
        <div className="container">

            <div className='row'>
                {
                    articleData.map((ele, index) => (
                        <div key={ele.id} className='col-4 my-2'>
                            <div className='bg-secondary border border-black border-3 text-white p-2 text-center'>
                                <h4>{ele.title}</h4>
                                <p className='mb-0'>{ele.content}</p>
                                <p>-{ele.author}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home
