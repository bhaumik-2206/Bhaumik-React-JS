import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Home'
import { Link } from 'react-router-dom'
import CreateArticle from './CreateArticle'
import ShowArticle from './ShowArticle'

const MainArticlePage = () => {
    return (
        <>
            <div className='sticky-top bg-black'>
                <Link className='fs-3' to="/">Home</Link>&emsp;
                <Link className='fs-3' to="/article">Article</Link>&emsp;
                <Link className='fs-3' to="/showArticle">Show Article</Link>&emsp;
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/article" element={<CreateArticle />} />
                <Route path="/showArticle" element={<ShowArticle />} />
                <Route path="/editArticle/:articleId" element={<CreateArticle />} />
            </Routes>
        </>
    )
}

export default MainArticlePage
