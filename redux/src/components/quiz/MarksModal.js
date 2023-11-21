import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MarksModal = ({ show, setShow }) => {
    const navigate = useNavigate();
    const correct_answer = useSelector((state) => state.result);
    const questions = useSelector((state) => state.questions);

    const handleShowResult = () => {
        setShow(false);
        navigate("/result");
    };

    const handleRetake = () => {
        setShow(false);
        navigate("/");
    };

    return (
        show && <div
            className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="bg-gray-800 text-white w-full max-w-md p-8 rounded-lg"
                onClick={(e) => e.stopPropagation()}>
                <p className="text-4xl text-center">{correct_answer > questions.length / 2 ? '😊' : '😔'}</p>
                <p className="text-2xl mt-4">
                    Result: {correct_answer} / {questions.length}
                </p>
                <div>
                    <button className="mt-8 bg-green-600 hover:bg-green-500 w-full rounded-md px-4 py-2 text-lg font-semibold text-black shadow-sm"
                        onClick={handleRetake} >
                        Re Take
                    </button>
                    <button className="mt-8 bg-green-600 hover:bg-green-500 w-full rounded-md px-4 py-2 text-lg font-semibold text-black shadow-sm"
                        onClick={handleShowResult} >
                        Result
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MarksModal
