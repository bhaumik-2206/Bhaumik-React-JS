import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAnswer, submitAnswer } from '../../feature/quiz/quizSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import MarksModal from './MarksModal';

const TimerQuestions = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [count, setCount] = useState(30)

    useEffect(() => {
        if (questions.length === 0) {
            navigate("/")
        }
    }, [questions])


    useEffect(() => {
        let timer;
        if (count !== 0) {
            timer = setTimeout(() => {
                setCount(pre => pre - 1)
            }, 1000);
        } else {
            if (questionNumber + 1 === questions.length) {
                dispatch(submitAnswer());
                setShow(true)
            } else {
                setCount(30);
                setQuestionNumber(pre => pre + 1);
            }
        }
        return () => clearTimeout(timer);
    }, [count])

    return (
        questions.length > 0 && <div className="max-w-md relative mx-auto p-4 bg-white rounded-md shadow-md">
            <div className='flex justify-between'>
                <p className="text-gray-700 text-center">
                    Attempted Question {questions.filter(ele => ele.selectedOption).length} / {questions.length}
                </p>
                <p className=' bg-gray-200 px-4 py-1 rounded-md'>0:{String(count).padStart(2, "0")}</p>
            </div>
            <div className="mt-4">
                <p className="text-xl">{(questionNumber + 1) + ") " + questions[questionNumber].question}</p>
                <div className="flex gap-3 py-4 mt-3">
                    {questions[questionNumber].options.map((option, i) => (
                        <button
                            key={i}
                            onClick={() => dispatch(checkAnswer({ option, question_id: questions[questionNumber].id }))}
                            className={`w-1/4 p-2 ${questions[questionNumber].selectedOption === option ? "bg-green-200" : "bg-white"} border border-gray-300 rounded-md`}
                        >{option}
                        </button>
                    ))}
                </div>
                <div className="mt-6 text-right">
                    {questions.length === questionNumber + 1 ? (
                        <button
                            className={` w-1/4 bg-black hover:bg-slate-900 text-white p-2 rounded-md`}
                            onClick={() => {
                                toast.success("Quiz Submitted")
                                dispatch(submitAnswer());
                                setShow(true)
                            }}
                        >Submit
                        </button>
                    ) : (
                        <button
                            className="w-1/4 bg-black hover:bg-slate-900 text-white p-2 rounded-md"
                            onClick={() => { setQuestionNumber(pre => pre + 1); setCount(30) }}
                        >Next
                        </button>
                    )}
                </div>
            </div>
            <MarksModal show={show} setShow={setShow} />
        </div>
    );
}

export default TimerQuestions
