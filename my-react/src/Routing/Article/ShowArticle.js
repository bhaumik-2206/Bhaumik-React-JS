import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const ShowArticle = () => {
    const [articleData, setArticleData] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:3401/createdArticle")
            .then(e => e.json())
            .then(data => setArticleData(data))
            .catch(e => console.log("ERROR: " + e.message));
    }, [])

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete")) {
            await fetch(`http://localhost:3401/createdArticle/${id}`, {
                method: "DELETE",
            })
            let response = await fetch(`http://localhost:3401/createdArticle`)
            let result = await response.json();
            setArticleData(result);
        }
    }

    return (
        <div className="container">

            <div className='row justify-content-center'>
                {
                    articleData.map((ele, index) => (
                        <div key={ele.id} className='col-4 my-2'>
                            <div className='bg-secondary border border-black border-3 text-white p-2 text-center'>
                                <h4>{ele.title}</h4>
                                <p className='mb-0'>{ele.content}</p>
                                <p>-{ele.author}</p>
                                <button className='btn btn-primary mx-2' onClick={() => navigate(`/editArticle/${ele.id}`)}>Edit</button>
                                <button className='btn btn-primary mx-2' onClick={() => handleDelete(ele.id)}>Delete</button>
                            </div>
                        </div>
                    ))
                }
                <div className='col-4 d-flex align-items-center justify-content-center'>
                    <button className='btn btn-primary fs-4' onClick={() => navigate("/article")}>+ Add Article</button>
                </div>
            </div>
        </div>
    )
}

export default ShowArticle;