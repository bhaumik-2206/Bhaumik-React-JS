import React, { useContext } from 'react'
import { AllTypeOfContext } from './Context1'

const Context2 = () => {
    let { string, number, func, array, object } = useContext(AllTypeOfContext);
    return (
        <div>
            <h1>{string}</h1>
            <h1>{number}</h1>
            <h1>{func()}</h1>
            <h1>{array.join("-")}</h1>
            <h1>Age of {object.name} is {object.age}</h1>
        </div>
    )
}

export default Context2
