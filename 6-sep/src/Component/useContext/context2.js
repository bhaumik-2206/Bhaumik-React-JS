// import React, { useContext } from 'react'
// import Contaxt1, { myContext, updateContext } from './contaxt1'

// const Context2 = () => {
//     const value = useContext(myContext);
//     const updateChange = useContext(updateContext);
//     return (
//         <div>
//             {/* <Contaxt1> */}
//                 <button onClick={updateChange}>CLICK</button>
//                 <h1>{value ? "HELLO" : "WORLD"}</h1>
//             {/* </Contaxt1> */}
//         </div>
//     )
// }
// export default Context2

import Contaxt1 from './contaxt1'
import React, { useContext } from 'react'
import Context3 from './context3'

const Context2 = () => {
    return (
        <Contaxt1>
            <Context3 />
        </Contaxt1>
    )
}
export default Context2