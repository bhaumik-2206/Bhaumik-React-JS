// // -----useState----
// import { useState } from 'react';

// export default function Counter() {
//     const [count, setCount] = useState(0);
//     const increment = () => setCount(count + 1);
//     const decrement = () => setCount(count - 1);
//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     );
// }


// // -----useEffect----
import { useEffect, useState } from 'react';
export default function DataFetching() {
    const [data, setData] = useState([]);
    useEffect(() => {
        // Fetch data from an API
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    let a = 1;
    return (
        <div>
            <ul>
                {data.map(ele => (
                    <li key={a}>({a++})  {ele.name.common}</li>
                ))}
            </ul>
        </div>
    );
}