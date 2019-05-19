import styled from 'styled-components'
import { lightGreen, blue} from './colors';

export const H1 = styled.h1`
color: ${lightGreen};
font-size: 30px;
margin-bottom: 0px;
`

export const Hr = styled.hr`
border-color: ${blue};
border-top: none;
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
export const P = styled.p`
    color: ${blue};
    font-size: 12px;
`;

export const A = styled.a`
    color: ${lightGreen};
    font-size: 12px;
`;