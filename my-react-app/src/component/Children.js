import React from 'react'
import BUTTONS from '../style/button';
import { useTheme } from 'styled-components';

const Children = () => {
    const theme = useTheme();
    return (
        <div>
            <BUTTONS.Button1>Styled Component Button</BUTTONS.Button1>
            <BUTTONS.Button3>Theme Color</BUTTONS.Button3>
        </div>
    )
}

export default Children;