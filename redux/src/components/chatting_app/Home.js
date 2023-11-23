import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editMessage, sendChat } from '../../feature/chatting_app/chatting_app';

const Home = () => {
    const [sendmessageU1, setSendmessageU1] = useState("");
    const [sendmessageU2, setSendmessageU2] = useState("");
    const [isEditU1MessageU1, setIsEditU1MessageU1] = useState(false);
    const [isEditU1MessageU2, setIsEditU1MessageU2] = useState(false);
    const [isHoverU1, setIsHoverU1] = useState({});
    const [isHoverU2, setIsHoverU2] = useState({});
    const user_1_mesage = useSelector(state => state.chat.user1);
    const user_2_mesage = useSelector(state => state.chat.user2);
    const dispatch = useDispatch();

    const handleSendMessage = (e, user) => {
        e.preventDefault();
        if (user === 1 && sendmessageU1.trim()) {
            if (isEditU1MessageU1) {
                dispatch(editMessage({ message: sendmessageU1, user: 1, id: Object.keys(isHoverU1)[0] }))
                setSendmessageU1("");
                setIsEditU1MessageU1(false);
            } else {
                dispatch(sendChat({ message: sendmessageU1, user: 1 }));
                setSendmessageU1("");
            }
        } else if (user === 2 && sendmessageU2.trim()) {
            if (isEditU1MessageU2) {
                dispatch(editMessage({ message: sendmessageU2, user: 2, id: Object.keys(isHoverU2)[0] }))
                setSendmessageU2("");
                setIsEditU1MessageU2(false);
            } else {
                dispatch(sendChat({ message: sendmessageU2, user: 2 }));
                setSendmessageU2("");
            }
        }
    }

    return (
        <div className='flex w-full h-screen divide-x-2 divide-gray-950'>
            <div className='w-1/2 bg-red-100 flex flex-col'>
                <div className='flex-1 flex flex-col justify-end overflow-hidden'>
                    <div className='overflow-x-hidden overflow-scroll p-5'>
                        {user_1_mesage.length > 0 ? user_1_mesage.map((message, index) => (
                            <div key={index} className={index === user_1_mesage.length - 1 ? 'font-bold' : ''}>
                                <p className={message.send ? 'text-right' : 'text-left'}>
                                    {message.send ? (
                                        <span
                                            onMouseEnter={() => setIsHoverU1({ [message.id]: true })}
                                            onMouseLeave={() => setIsHoverU1({ [message.id]: false })}
                                            className={message.send ? 'bg-blue-500 rounded text-white p-2 ps-7 relative inline-block mb-2' : 'bg-gray-200 rounded p-2 inline-block mb-2'}>
                                            <i onClick={() => { setSendmessageU1(message.send); setIsEditU1MessageU1(true) }} className={`absolute  top-3.5 left-10 fa-solid fa-pen text-black opacity-0 ${isHoverU1[message.id] && "left-2 opacity-100 duration-300 cursor-pointer"}`}></i>
                                            {/* {isHoverU1 ?  : null} */}
                                            <span className=''>{message.send}</span>
                                        </span>
                                    ) : (
                                        <span className='bg-gray-200 rounded p-2 inline-block mb-2'>
                                            {message.receive}
                                        </span>
                                    )}
                                </p>
                            </div>
                        )) : <h1 className='text-center text-2xl font-bold'>Chat is empty</h1>}
                    </div>
                </div>
                <div className='relative bottom-0 w-full p-5'>
                    <form action="" onSubmit={(e) => handleSendMessage(e, 1)}>
                        <input
                            placeholder='Type a message...'
                            value={sendmessageU1}
                            onChange={(e) => setSendmessageU1(e.target.value)}
                            type="text"
                            className='w-full border border-neutral-800 p-3 rounded' />
                        <button className="cursor-pointer absolute right-[25px] text-lg top-[25px] bg-blue-500 text-white w-10 h-10 rounded-md flex justify-center items-center">
                            <i className='fa-solid fa-paper-plane '></i>
                        </button>
                    </form>
                </div>
            </div>
            <div className='w-1/2 bg-green-100 flex flex-col'>
                <div className='flex-1 flex flex-col justify-end overflow-hidden'>
                    <div className='overflow-x-hidden overflow-scroll p-5'>
                        {user_2_mesage.length > 0 ? user_2_mesage.map((message, index) => (
                            <div key={index} className={index === user_1_mesage.length - 1 ? 'font-bold' : ''}>
                                <p className={message.send ? 'text-right' : 'text-left'}>
                                    {message.send ? (
                                        <span
                                            onMouseEnter={() => setIsHoverU2({ [message.id]: true })}
                                            onMouseLeave={() => setIsHoverU2({ [message.id]: false })}
                                            className={message.send ? 'bg-blue-500 rounded text-white p-2 ps-7 relative inline-block mb-2' : 'bg-gray-200 rounded p-2 inline-block mb-2'}>
                                            <i onClick={() => { setSendmessageU2(message.send); setIsEditU1MessageU2(true) }} className={`absolute  top-3.5 left-10 fa-solid fa-pen text-black opacity-0 ${isHoverU2[message.id] && "left-2 opacity-100 duration-300 cursor-pointer"}`}></i>
                                            <span className=''>{message.send}</span>
                                        </span>
                                    ) : (
                                        <span className='bg-gray-200 rounded p-2 inline-block mb-2'>
                                            {message.receive}
                                        </span>
                                    )}
                                </p>
                            </div>
                        )) : <h1 className='text-center text-2xl font-bold'>Chat is empty</h1>}
                    </div>
                </div>
                <div className='relative bottom-0 w-full p-5'>
                    <form action="" onSubmit={(e) => handleSendMessage(e, 2)}>
                        <input
                            placeholder='Type a message...'
                            value={sendmessageU2}
                            onChange={(e) => setSendmessageU2(e.target.value)}
                            type="text"
                            className='w-full border border-neutral-800 p-3 rounded' />
                        <button className="cursor-pointer absolute right-[25px] text-lg top-[25px] bg-blue-500 text-white w-10 h-10 rounded-md flex justify-center items-center">
                            <i className='fa-solid fa-paper-plane '></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
