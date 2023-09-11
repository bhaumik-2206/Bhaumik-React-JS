import { useState } from 'react'

export default function ChildUseState(props) {
    const [preCount, setPreCount] = useState(props.count);
    const [check, setCheck] = useState(null);
    if (preCount !== props.count) {
        setPreCount(props.count);
        setCheck(props.count > preCount ? "Increment" : "Decrement");
    }
    return (
        <div>
            {check && <h2>The Count is {check}</h2>}
        </div>
    )
}
