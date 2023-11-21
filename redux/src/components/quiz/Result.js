import React, { useState } from 'react';
import {  useSelector } from 'react-redux';
import ShowAnswer from './ShowAnswer';
import { useNavigate } from 'react-router-dom';

const Result = () => {
    const navigate = useNavigate();
    const [showAnswer, setShowAnswer] = useState(false);
    const correct_answer = useSelector((state) => state.result);
    const questions = useSelector((state) => state.questions);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white">
            <div className="bg-gray-100 text-gray-800 w-full h-full p-8">
                <div className="max-w-md mx-auto">
                    <p className="text-4xl text-center">{correct_answer > questions.length / 2 ? '😊' : '😔'}</p>
                    <p className="text-2xl mt-4">
                        Result: {correct_answer} / {questions.length}
                    </p>
                    <div className="mt-8 space-y-4">
                        <button className="bg-blue-500 hover:bg-blue-400 w-full rounded-md px-4 py-2 text-lg font-semibold text-white shadow-sm"
                            onClick={() => navigate("/")}>
                            Re Take
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-400 w-full rounded-md px-4 py-2 text-lg font-semibold text-white shadow-sm"
                            onClick={() => setShowAnswer(true)}>
                            Show Answer
                        </button>
                    </div>
                    <ShowAnswer showAnswer={showAnswer} setShowAnswer={setShowAnswer} />
                </div>
            </div>
        </div >
    );
};

export default Result;
