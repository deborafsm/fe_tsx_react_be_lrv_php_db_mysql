import styled from 'styled-components';
// import {FaCoffee} from 'react-icons'
export const Container = styled.div
    `
    grid-area: AS;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};
  
`
    ;
export const Headers = styled.header`
    display:flex;
    justify-content:center;
    padding: 10px 0 10px 0;
  

`;

export const MenuContainer = styled.nav`

    padding: 10px;    
    margin-top: 10px;
`;


export const MenuItemLink = styled.a`
    display:flex;
    text-decoration: none;
    font-size: 1.0rem;
    margin: 40px 0;
    color: ${props => props.theme.colors.gray};
    transition: opacity .3s;
    &:hover{
        opacity: .7;
    }
    >svg{
        margin-right: 10px;
    }
    
`;
export const Title = styled.h3`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    margin: 10px;
    font-size: 2em;
    color: ${props => props.theme.colors.gray};
`;

