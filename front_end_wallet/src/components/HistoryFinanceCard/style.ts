import styled from "styled-components";

interface IContainerProps {
    color: string;
}
interface ITagProps {
    color: string;
}
export const Container = styled.li<IContainerProps>`
    
    padding: 12px 10px;
    margin: 10px 0;    

    list-style:none;
    border-radius:5px;
    background-color: ${props => props.color};

    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
    transition: all .3s;
    position: relative;
    &:hover{
        opacity: .7;
        transform: translateX(10px);
    }
    > div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
    }
`;
export const Tag = styled.div<ITagProps>`
    width: 10px;
    height: 70%;
    background-color: ${props => props.color};
    position: absolute;
    left: 0;
`;

