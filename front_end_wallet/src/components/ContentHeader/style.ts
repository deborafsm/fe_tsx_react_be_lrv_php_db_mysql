import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    background-color: ${props => props.theme.colors.primary};
    display:flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const TitleHeader = styled.div`
   > h2{
       color:${props => props.theme.colors.white};
       &::after {
           content: '';
           display: block;
           width: 55px;
           border-bottom: 10px solid ${props => props.theme.colors.info}
          
       }
   }
`;

export const ControllersHeader = styled.div`
   display: flex;
   margin: 10px;
   > button{
       margin-left: 10px;
       padding:0 5px 0px 5px;
       background-color: ${props => props.theme.colors.secondary};
       border: 1px solid ${props => props.theme.colors.gray};
       color: ${props => props.theme.colors.white};
       border-radius: 10%;
    }
    
`;