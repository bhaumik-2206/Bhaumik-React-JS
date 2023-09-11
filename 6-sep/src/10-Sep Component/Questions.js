// //----if else if
// export default function Questions() {
//   const number = 30;
//   return (
//     <div>
//       {number > 0 && number <= 10 ? (
//         <p>This between 0 to 10</p>
//       ) : number > 10 && number <= 20 ? (
//         <p>This between 10 to 20</p>
//       ) : number > 20 && number <= 30 ? (
//         <p>This between 20 to 30</p>
//       ) : (
//         <p>This is more than 30</p>
//       )}
//     </div>
//   );
// }

import React from 'react'

// export default function Questions() {
//     let a = 25;
//     function checkNumber(number){
//         if(number > 0 && number <= 10){
//             return "This between 0 to 10";
//         }else if(number > 10 && number <= 20){
//             return "This between 10 to 20"
//         }else if(number > 20 && number <= 30){
//             return "This between 20 to 30"
//         }else{
//             return "This is more than 30";
//         }
//     }
//     return (
//         <div>
//             <h1>{checkNumber(a)}</h1>
//         </div>
//     )
// }


// export default function Questions() {
//     let a = [<h1>Hello</h1>, <h1>World</h1>];
//     return (
//         <div>
//             {a.map((ele, index) => (
//                 <div key={index}>{ele}</div>
//             ))}
//         </div>
//     )
// }



import { useState } from 'react'
export default function Questions({ data }) {
    // data.greet = "HELLO WORLD";
    const [change, setChange] = useState(data);
    const handle = () => {
        let a = { ...change };
        a.greet = "HELLO WORLD";
        setChange(a);
    }
    return (
        <h1>
            {change.greet}
            <button onClick={handle}>HELLO</button>
        </h1>
    )
}