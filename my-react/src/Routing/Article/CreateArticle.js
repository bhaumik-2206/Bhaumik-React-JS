import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const CreateArticle = () => {
    const [currentArticle, setCurrentArticle] = useState({ title: "", content: "", author: "" })
    const navigate = useNavigate();
    const { articleId } = useParams();

    useEffect(() => {
        if (articleId) {
            fetch(`http://localhost:3401/createdArticle/${articleId}`)
                .then(e => e.json())
                .then(article => setCurrentArticle(article))
        }
    }, [articleId])



    const handleChange = e => {
        const { name, value } = e.target;
        setCurrentArticle(pre => ({ ...pre, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (articleId) {
            try {
                let res = await fetch(`http://localhost:3401/createdArticle/${articleId}`, {
                    method: 'PUT',
                    headers: { "Content-Type": "Application/json" },
                    body: JSON.stringify(currentArticle)
                })
                navigate("/showArticle")
            } catch (error) {
                console.log("ERROR: " + error)
            }
        } else {
            try {
                let res = await fetch("http://localhost:3401/createdArticle", {
                    method: 'POST',
                    headers: { "Content-Type": "Application/json" },
                    body: JSON.stringify(currentArticle)
                })
                navigate("/showArticle")
            } catch (error) {
                console.log("ERROR: " + error)
            }
        }
    }


    return (
        <form className='w-75 m-auto my-3 bg-secondary p-3 rounded-4' onSubmit={handleSubmit}>
            <div className="form-group my-3">
                <input
                    value={currentArticle.author}
                    onChange={handleChange}
                    type="text"
                    className="form-control fs-5"
                    name='author'
                    placeholder='Enter Author Name' />
            </div>
            <div className="form-group my-3">
                <input
                    value={currentArticle.title}
                    onChange={handleChange}
                    type="text"
                    className="form-control fs-5"
                    name='title'
                    placeholder='Enter Title' />
            </div>
            <div className="form-group my-3">
                <textarea
                    value={currentArticle.content}
                    onChange={handleChange}
                    name="content"
                    placeholder='Enter Article'
                    cols="30" rows="3"
                    className="form-control fs-5"></textarea>
            </div>
            <button className='w-100 btn btn-dark fs-5' type="submit">Add Article</button>
        </form>
    )
}

export default CreateArticle
