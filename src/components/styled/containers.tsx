import styled from 'styled-components'

export const FlexContainer = styled.div`
    display: flex;
`;

export const FlexChild = styled.div`
    flex-grow: ${ ({flexGrow}) => flexGrow};
`;

export const Wrapper = styled.div`
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding: 50px; 
    padding-top: 50px; 
`