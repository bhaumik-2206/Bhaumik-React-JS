import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeValues, checkWinner } from '../../feature/ticTacToe/ticTacToe';

const TicTacToe = () => {
    const [turn, setTurn] = useState(true)
    const value = useSelector(state => state.values);
    const winner = useSelector(state => state.winner);
    const dispatch = useDispatch();

    const handleChange = (index) => {
        if (!winner && !value[index]) {
            if (turn) {
                dispatch(changeValues({ index, value: "✖️" }))
            } else {
                dispatch(changeValues({ index, value: "⭕" }))
            }
            dispatch(checkWinner())
            setTurn(!turn);
        }
    }

    return (
        <div className={`flex flex-col items-center bg-green-200`}>
            <div>
                <div className="flex">
                    <div onClick={() => handleChange(0)} className='cursor-pointer flex justify-center items-center bg-black text-center text-4xl w-16 h-16 m-2 text-white'>{value[0]}</div>
                    <div onClick={() => handleChange(1)} className='cursor-pointer flex justify-center items-center bg-black text-center text-4xl w-16 h-16 m-2 text-white'>{value[1]}</div>
                    <div onClick={() => handleChange(2)} className='cursor-pointer flex justify-center items-center bg-black text-center text-4xl w-16 h-16 m-2 text-white'>{value[2]}</div>
                </div>
                <div className="flex">
                    <div onClick={() => handleChange(3)} className='cursor-pointer flex justify-center items-center bg-black text-center text-4xl w-16 h-16 m-2 text-white'>{value[3]}</div>
                    <div onClick={() => handleChange(4)} className='cursor-pointer flex justify-center items-center bg-black text-center text-4xl w-16 h-16 m-2 text-white'>{value[4]}</div>
                    <div onClick={() => handleChange(5)} className='cursor-pointer flex justify-center items-center bg-black text-center text-4xl w-16 h-16 m-2 text-white'>{value[5]}</div>
                </div>
                <div className="flex">
                    <div onClick={() => handleChange(6)} className='cursor-pointer flex justify-center items-center bg-black text-center text-4xl w-16 h-16 m-2 text-white'>{value[6]}</div>
                    <div onClick={() => handleChange(7)} className='cursor-pointer flex justify-center items-center bg-black text-center text-4xl w-16 h-16 m-2 text-white'>{value[7]}</div>
                    <div onClick={() => handleChange(8)} className='cursor-pointer flex justify-center items-center bg-black text-center text-4xl w-16 h-16 m-2 text-white'>{value[8]}</div>
                </div>
            </div>
            <p className='text-xl font-bold'>{!turn ? "⭕ Turn" : "✖️ Turn"}</p>
        </div>
    )
}

export default TicTacToe;