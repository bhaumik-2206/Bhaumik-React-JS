import React from 'react'
import DifferentContextComponent from './DifferentContextComponent'
import NewContext from './NewContext'

const CheckContext = () => {
    
    return (
        <DifferentContextComponent>
            <NewContext />
        </DifferentContextComponent>
    )
}

export default CheckContext