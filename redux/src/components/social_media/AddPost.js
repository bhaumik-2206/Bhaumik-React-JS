import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addPost } from '../../feature/social_media/social_media';

const AddPost = ({ show, setShow }) => {
    const [postData, setPostData] = useState({ image: "", caption: "" });
    const dispatch = useDispatch();

    const handleOperation = (e) => {
        e.preventDefault();
        dispatch(addPost(postData));

        setShow(false);
        toast.success("Post added successfully");
    };

    return (
        show && (
            <div
                onClick={() => setShow(false)}
                className="fixed inset-0 w-screen h-screen overflow-y-auto bg-gray-500 bg-opacity-75"
            >
                <div onClick={(e) => e.stopPropagation()} className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative z-20 w-full max-w-md bg-white rounded-lg shadow-xl">
                        <form onSubmit={handleOperation} className="p-6 space-y-4">
                            {/* File Input */}
                            <div>
                                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                    Choose an image
                                </label>
                                <input
                                    type="file"
                                    id="image"
                                    accept="image/*"
                                    onChange={(e) => setPostData((pre) => ({ ...pre, image: URL.createObjectURL(e.target.files[0]) }))}
                                    className="mt-1 p-2 border rounded-md w-full"
                                />
                            </div>

                            {/* Caption Textarea */}
                            <div>
                                <label htmlFor="caption" className="block text-sm font-medium text-gray-700">
                                    Write a caption
                                </label>
                                <textarea
                                    value={postData.caption}
                                    onChange={(e) => setPostData((pre) => ({ ...pre, caption: e.target.value }))}
                                    id="caption"
                                    rows="4"
                                    className="mt-1 p-2 border rounded-md w-full"
                                ></textarea>
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                                >
                                    Upload
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShow(false)}
                                    className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-md"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    );
};

export default AddPost;
