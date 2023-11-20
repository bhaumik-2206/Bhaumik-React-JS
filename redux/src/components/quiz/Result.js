import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { retakeQuiz } from '../../feature/quiz/quizSlice';

const Result = ({ show, setShow, setQuestionNumber, setCount }) => {
    const correct_answer = useSelector(state => state.result);
    const questions = useSelector(state => state.questions);
    const dispatch = useDispatch();

    const handleRetake = () => {
        dispatch(retakeQuiz());
        setShow(false);
        setQuestionNumber(0);
        setCount(15);
    }
    return (
        show &&
        <div className="relative z-20" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className={`inset-0 ${show ? "bg-gray-500 fixed" : "bg-transparent"} bg-opacity-75`} />
            <div className={`py-5 px-8 z-20 bg-gray-800 text-white  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} onClick={(e) => { e.stopPropagation() }}>
                <p className='text-4xl text-center'>{correct_answer > (questions.length / 2) ? "😊" : "😔"}</p>
                <p className='text-2xl'>Result : {correct_answer} / {questions.length}</p>
                <button
                    className='bg-green-600 mt-4 hover:bg-green-500 w-full sm:w-28 rounded-md  px-3 py-2 text-lg font-semibold text-black shadow-sm sm:ml-3'
                    onClick={handleRetake}>Re Take</button>
            </div>
        </div>
    )
}

export default Result;