import * as React from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";

import { small } from './styled/font-sizes';
import { lightGreen, blue, darkBlue } from './styled/colors';
import { FlexContainer, FlexChild } from './styled/containers';


const Avatar = styled.div`
    flex-grow: 1;
    color: white;
    background-color: ${lightGreen};
    font-size: ${small};
    padding-top: 13px;
    margin: 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    border-radius: 100px;
    box-sizing: border-box;
    :hover{
        cursor: pointer;
    }
`;

const InnerLink = styled.div`
    display: inline-block;
    margin-top: 24px;
    margin-left: 20px;
    font-size: ${small};
    transition: opacity .5s linear;
    opacity: ${({ hidden }) => hidden ? '0' : '1'};
    & *{
        text-decoration: none;
        cursor: pointer;
        color: ${lightGreen};
        transition: color .3s linear;
        :hover{
            color: ${blue};
        }
    }
`;

export default function Navbar() {

    const [ showLink, changeShowLink ] = React.useState(false);

    return (
    <FlexContainer>
        <FlexChild flexGrow="0">
            <Avatar onClick={() => changeShowLink(!showLink)}>F</Avatar>
        </FlexChild>
        <FlexChild  flexGrow="1">
            <InnerLink hidden={!showLink}>
                <span><Link to="/">HOME</Link></span>
            </InnerLink>
        </FlexChild>
    </FlexContainer>
    )
}
