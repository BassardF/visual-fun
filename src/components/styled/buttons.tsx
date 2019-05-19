import styled from 'styled-components'

import { darkBlue } from './colors';

export const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    font-size: 12px;
    border: 1px solid ${darkBlue};
    color: ${darkBlue};
    padding: 1em 2em;
    outline: none;
    :hover {
        cursor: ${ ({disabled}) => disabled ? 'not-allowed' : 'pointer'};
    }
    opacity: ${ ({disabled}) => disabled ? '.3' : '1'};
`