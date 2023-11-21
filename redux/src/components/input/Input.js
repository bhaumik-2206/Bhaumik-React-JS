import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeValue, resetValues } from '../../feature/input/inputSlice';

const Input = () => {
    const inputValue = useSelector(state => state.inputSlice.input_value);
    console.log(inputValue)
    const dispatch = useDispatch();

    const handleChange = (e, id) => {
        dispatch(changeValue({ value: e.target.value, id }))
    }
    return (
        <div>
            {inputValue.map((ele, index) => (
                <div key={index}>
                    <input
                        value={ele.selectedNumber ? ele.selectedNumber : ""}
                        className='border border-black'
                        type="number"
                        onChange={(e) => handleChange(e, ele.id)}
                    />
                </div>
            ))}
            <button onClick={() => dispatch(resetValues())}>reset</button>
        </div>
    )
}

export default Input
