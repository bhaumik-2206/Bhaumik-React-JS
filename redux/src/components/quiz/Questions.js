import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAnswer, submitAnswer } from '../../feature/quiz/quizSlice';

const Questions = ({ setShow }) => {
    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions);
    const [questionNumber, setQuestionNumber] = useState(0);

    useEffect(() => {
        if (questions.every(ele => !ele.selectedOption)) {
            setQuestionNumber(0);
        }
    }, [questions])


    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
            <p className="text-gray-700 text-center">
                Attempted Question {questions.filter(ele => ele.selectedOption).length} / {questions.length}
            </p>
            <div className="mt-4">
                <p className="text-xl">{questions[questionNumber].question}</p>
                <div className="flex gap-3 py-4 mt-3">
                    {questions[questionNumber].options.map((option, i) => (
                        <button
                            key={i}
                            onClick={() => dispatch(checkAnswer({ option, question_id: questions[questionNumber].id }))}
                            className={`w-1/4 p-2 ${questions[questionNumber].selectedOption === option ? "bg-green-200" : "bg-white"} border border-gray-300 rounded-md`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <div className="mt-6 flex justify-between">
                    <button
                        className={`w-1/4 bg-black hover:bg-slate-900 text-white p-2 rounded-md ${!questionNumber && "cursor-not-allowed"}`}
                        onClick={() => !questionNumber || setQuestionNumber(pre => pre - 1)}
                        disabled={!questionNumber}
                    >
                        Prev
                    </button>
                    {questions.length === questionNumber + 1 ? (
                        <button
                            className={`${questions.every(ele => ele.selectedOption) || "cursor-not-allowed"} w-1/4 bg-black hover:bg-slate-900 text-white p-2 rounded-md`}
                            onClick={() => {
                                if (questions.every(ele => ele.selectedOption)) {
                                    dispatch(submitAnswer());
                                    setShow(true)
                                } else {
                                    alert("Please attempted all questions")
                                }
                            }}
                        >
                            Submit
                        </button>
                    ) : (
                        <button
                            className="w-1/4 bg-black hover:bg-slate-900 text-white p-2 rounded-md"
                            onClick={() => setQuestionNumber(pre => pre + 1)}
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Questions;
{/* {questions.map(ele => (
    <div key={ele.id}>
        <p className='text-xl'>{ele.question}</p>
        {ele.options.map((option, i) => (
            <button
                key={i}
                onClick={() => dispatch(checkAnswer({ option, question_id: ele.id }))}
                className={` bg-white px-3 mx-1.5 text-black border-2 border-black`}
            >{option}</button>
        ))}
        <button>next</button>
    </div>
))} */}