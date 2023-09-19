// export default function MainButton(props) {
//     return (
//         <button onClick={() => alert(props.message)}>
//             {props.children}
//         </button>
//     );
// }

import React, { useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
function CalendarComponent() {
    const [save, setSave] = useState('');
    console.log(save)
    dayjs.extend(relativeTime);
    const handleSave = () => {
        const currentTime = dayjs();
        setSave(currentTime);
    };

    return (
        <div>
            <h1>{save && save.fromNow()}</h1>
            <button onClick={handleSave}>ClickMe</button>
        </div>
    );
}

export default CalendarComponent;
