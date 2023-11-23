import React, { useState } from 'react';
import AddPost from './AddPost';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
    const [show, setShow] = useState(false);
    const posts = useSelector(state => state.post.posts);
    const dispatch = useDispatch();

    return (
        <>
            <div className="main flex relative h-full">

                <div className="navbar fixed w-1/5 h-full px-4 pt-8 border-r border-gray-300 flex flex-col">
                    <div className="image">
                        <Link to="">
                            <img src="images/instagramm.png" alt="" className="w-full object-cover" />
                        </Link>
                    </div>

                    <div className="items flex flex-col">
                        <ul className="flex flex-col pt-5">
                            <li className="bold mb-3"><Link to="/" className="flex items-center"><i
                                className="fa fa-home fa-lg mr-2" aria-hidden="true"></i>Home</Link></li>
                            <li className="mb-3"><Link to="/" className="flex items-center"><i
                                className="fa fa-search fa-lg mr-2" aria-hidden="true"></i>Search</Link></li>
                            <li className="mb-3"><Link to="/" className="flex items-center"><i
                                className="fa fa-compass fa-lg mr-2" aria-hidden="true"></i>Explore</Link></li>
                            <li className="mb-3"><Link to="/" className="flex items-center"><i
                                className="fa fa-film fa-lg mr-2" aria-hidden="true"></i>Reels</Link></li>
                            <li className="mb-3"><Link to="/" className="flex items-center"><i
                                className="fa fa-commenting fa-lg mr-2" aria-hidden="true"></i>Messages</Link></li>
                            <li className="mb-3"><Link to="/" className="flex items-center"><i
                                className="fa fa-heart fa-lg mr-2" aria-hidden="true"></i>Notification</Link></li>
                            <li onClick={() => setShow(true)} className="mb-3"><Link to="/" className="flex items-center"><i
                                className="fa fa-plus-square fa-lg mr-2" aria-hidden="true"></i>Create Post</Link></li>
                            <li className="mb-3"><Link to="/" className="flex items-center"><i
                                className="fa fa-user fa-lg mr-2" aria-hidden="true"></i>Profile</Link></li>
                            <li><Link to="/" className="flex items-center"><i className="fa fa-bars fa-lg mr-2"
                                aria-hidden="true"></i>More</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mainn mt-10 w-1/2 ml-1/5">
                    <div className="feed">
                        {posts.length > 0 &&
                            <div className="">
                                {posts.map((post, index) => (
                                    <div key={index} className="frame w-3/4 pr-8 mx-auto">
                                        <div className="kiara flex items-center mb-3">
                                            <div className="w-12 h-12">
                                                <img src="images/virat.jpg" alt="" className="w-full h-full object-cover rounded-full" />
                                            </div>
                                            <div className="none pl-4">
                                                <div className="kiaran font-bold">Bhaumik Panchal <span className="opacity-50"> • 17h</span></div>
                                            </div>
                                        </div>
                                        <div className="bar">
                                            <abbr title="Options">
                                                <i className="fa-solid fa-ellipsis-vertical fa-rotate-90"></i>
                                            </abbr>
                                        </div>
                                        <img src={post.image} controls="auto" className="w-full rounded" />
                                        <div>
                                            <p>{post.caption}</p>
                                        </div>
                                        <div className="lcs flex justify-between items-center px-10 mt-5">
                                            <div className="phele flex gap-5 text-2xl">
                                                <i className="fa-regular fa-heart"></i>
                                                <i className="fa-regular fa-comment"></i>
                                                <i className="fa-regular fa-paper-plane"></i>
                                            </div>
                                            <div className="dusre">
                                                <i className="fa-regular fa-bookmark"></i>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>}
                        <div className="frame w-3/4 pr-8 mx-auto">
                            <div className="kiara flex items-center mb-3">
                                <div className="logo w-8">
                                    <img src="images/dhoni.jpg" alt="" className="w-full h-full object-top object-cover rounded-full" />
                                </div>
                                <div className="none pl-4">
                                    <div className="kiaran font-bold">ms_dhoni <span className="opacity-50"> • 17h</span></div>
                                </div>
                            </div>
                            <div className="bar">
                                <abbr title="Options">
                                    <i className="fa-solid fa-ellipsis-vertical fa-rotate-90"></i>
                                </abbr>
                            </div>
                            <img src="images/dhoni.jpg" controls="auto" className="w-full rounded" />
                            <div className="lcs flex justify-between items-center px-10 mt-5">
                                <div className="phele flex gap-5 text-2xl">
                                    <i className="fa-regular fa-heart"></i>
                                    <i className="fa-regular fa-comment"></i>
                                    <i className="fa-regular fa-paper-plane"></i>
                                </div>
                                <div className="dusre">
                                    <i className="fa-regular fa-bookmark"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pros w-1/5 pl-8">
                    <div className="promain flex items-center">
                        <div className="w-14 h-14">
                            <img src="images/virat.jpg" alt="" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="name w-60 pl-4">
                            <div className="newinn font-bold">bhaumik_panchal_2206</div>
                            <div className="sa opacity-50">Bhaumik Panchal</div>
                        </div>
                        <div className="switch w-20 text-blue-500">Switch</div>
                    </div>
                    <div className="suggest">
                        <div className="foryou flex justify-between">
                            <div className="sug font-bold text-gray-500">Suggested for you</div>
                            <div className="see text-sm font-semibold">See All</div>
                        </div>
                        <div className="pm">
                            <div className="prom flex items-center gap-5">
                                <div className="new w-1/5">
                                    <img src="images/sachint.jpg" alt="" className="w-full h-full object-cover rounded-full" />
                                </div>
                                <div className="new1 w-60">
                                    <div className="newinn font-bold">Sachin Tendulkar</div>
                                    <div className="newin opacity-50">Suggested For You</div>
                                </div>
                                <div className="foll text-blue-500">Follow</div>
                            </div>
                        </div>
                    </div>
                    <footer className="text-sm opacity-50 pl-4">© 2023 INSTAGRAM FROM META</footer>
                </div>
            </div>
            <AddPost show={show} setShow={setShow} />
        </>
    );
};

export default Home;
