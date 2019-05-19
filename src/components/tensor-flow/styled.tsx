import styled from 'styled-components'

const grey = '#ececec';
const lightGreen = '#9fd3c7';
const blue= '#385170';
const darkBlue = '#142d4c';

export const H1 = styled.h1`
    color: ${lightGreen};
    font-size: 30px;
    margin-bottom: 0px;
`

export const Hr = styled.hr`
    border-color: ${blue};
    border-top: none;
`

export const Wrapper = styled.div`
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding: 50px; 
    padding-top: 80px; 
    font-family: monospace;
`

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

export const Textarea = styled.textarea`
    background: ${lightGreen};
    min-width: 100%;
    font-size: 12px;
    box-sizing: border-box;
    padding: 2em;
    display: block;
    border-radius: 3px;
    border: none;
    resize: none;
    margin-top: 40px;
    margin-bottom: 20px;
    color: ${blue};
    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${blue};
    }
    :-ms-input-placeholder {
       color: ${blue};
    }
    outline: none;
`

export const Response = styled.div`
    margin-top: 20px;
    text-align: center;
    font-size: 12px;
    color: ${darkBlue};
`;

export const P = styled.p`
    color: ${blue};
    font-size: 12px;
`;

export const A = styled.a`
    color: ${lightGreen};
    font-size: 12px;
`;