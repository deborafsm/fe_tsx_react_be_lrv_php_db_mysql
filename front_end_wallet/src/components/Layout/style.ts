import styled from 'styled-components';
// Layout H - HEADER AS - ASIDE CT - CONTENT
const Grid = styled.div`
    display: grid;
    grid-template-columns:250px auto;
    grid-template-rows:70px auto;
    grid-template-areas:
    'AS HM'
    'AS CT';
    height: 100vh;

`;
export default Grid