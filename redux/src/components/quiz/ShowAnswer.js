import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ShowAnswer = () => {
    const navigate = useNavigate();
    const questions = useSelector((state) => state.questions);

    useEffect(() => {
        if (questions.length === 0) {
            navigate("/")
        }
    }, [questions]);

    return (
        <div className=" border border-slate-400 max-w-2xl mx-auto divide-y divide-slate-400 overflow-x-hidden rounded-md shadow-md">
            {questions.map((que, index) => (
                <div key={index} className={`${que.selectedOption === que.correctAnswer ? "bg-green-50" : "bg-red-50"} p-4`}>
                    <div>
                        <p className="text-xl font-semibold">{(index + 1) + ") " + que.question}</p>
                        <div className="flex justify-between py-1">
                            {que.selectedOption === que.correctAnswer ? (
                                <>
                                    <p className='text-green-600'>Correct Answer</p>
                                    <p>1 marks</p>
                                </>
                            ) : (
                                <>
                                    <p className='text-red-500'>Wrong Answer</p>
                                    <p>0 marks</p>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="flex gap-3 py-2 mt-3">
                        {que.options.map((option, i) => (
                            <button
                                key={i}
                                className={`w-1/4 p-2 ${que.correctAnswer === option
                                    ? "bg-green-500 text-white"
                                    : que.selectedOption === option
                                        ? "bg-red-500 text-white"
                                        : "bg-white text-black"
                                    } border text-black border-gray-300 rounded-md focus:outline-none`}
                            >{option}</button>
                        ))}
                    </div>
                </div>
            ))}
            <button
                onClick={() => navigate("/")}
                className="mx-4 mb-4 w-[-webkit-fill-available] block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
            >
                Re take
            </button>
        </div>
    );
};

export default ShowAnswer;
