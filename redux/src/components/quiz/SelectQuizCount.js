import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setQuestions } from '../../feature/quiz/quizSlice';
import { useNavigate } from 'react-router-dom';

const SelectQuizCount = () => {
    const navigate = useNavigate();
    const [number, setNumber] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const totalQuestions = useSelector((state) => state.total_questions);
    const questionType = useSelector((state) => state.question_type);
    const dispatch = useDispatch();

    const handleSetQuestion = (e) => {
        e.preventDefault();
        if (!selectedValue) {
            toast.error(`Please select a question type!!`);
            return;
        }
        if (number <= 0) {
            toast.error(`Number must be greater than 0!!`);
            return;
        }
        if (number <= totalQuestions[selectedValue].length) {
            navigate("/quiz");
            dispatch(setQuestions({ selectedNumber: Number(number), type: selectedValue }));
        } else {
            toast.error(`There are ${totalQuestions[selectedValue].length} questions`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-semibold mb-4">Quiz Application:-</h1>
            <form onSubmit={handleSetQuestion} className="bg-white p-8 rounded-md shadow-md">
                <div className="mb-4 flex gap-3">
                    <select
                        id="questionType"
                        onChange={(e) => setSelectedValue(e.target.value)}
                        className="border w-1/2 border-gray-300 p-2 rounded-md focus:outline-none "
                    >
                        <option value="">Select Question Type</option>
                        {questionType.map((ele, index) => (
                            <option key={index} value={ele}>
                                {ele}
                            </option>
                        ))}
                    </select>
                    <input
                        placeholder='Enter total question'
                        type="number"
                        id="questionCount"
                        disabled={!selectedValue}
                        value={number}
                        min={0}
                        onChange={(e) => setNumber(e.target.value)}
                        className="border w-1/2 border-gray-300 p-2 rounded-md focus:outline-none"
                    />
                </div>
                <div>
                    <button
                        disabled={!number}
                        type="submit"
                        className={`${number || 'cursor-not-allowed'
                            } w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none`}
                    >
                        Start
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SelectQuizCount;