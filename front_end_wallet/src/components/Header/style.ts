import styled from 'styled-components';

export const Container = styled.div`
    grid-area: HM;
   
    background-color: ${props => props.theme.colors.tertiary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid ${props => props.theme.colors.gray};
    flex-direction: row-reverse;
`;
export const Welcome = styled.div`
    color: ${props => props.theme.colors.gray};
    flex-direction: row-reverse
`;

export const Profile = styled.h3`
    color: ${props => props.theme.colors.white};
`;


export const UserName = styled.div`
    display: flex;
    flex-direction: row;
   
`;
