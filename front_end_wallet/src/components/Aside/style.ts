import styled from 'styled-components';

export const Container = styled.div
    `
    grid-area: AS;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray}
  
`
    ;
export const Headers = styled.header`
    display:flex;
    justify-content:center;
    padding: 10px 0 10px 0

`;

export const MenuContainer = styled.div`
    padding: 10px;    
    border: 1px solid ${props => props.theme.colors.gray}
`;


export const MenuItemLink = styled.a`
    display:flex;
    text-decoration: none;
    font-size: 1.3rem;
    color: ${props => props.theme.colors.gray}
    
`;