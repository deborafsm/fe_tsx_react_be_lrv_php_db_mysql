import React from "react";
import {
    Container,
    Headers,
    MenuContainer,
    MenuItemLink

} from './style';
import { FaLevelDownAlt, FaToriiGate } from "react-icons/fa";


const Aside: React.FC = () => {
    return (
        <Container>
            <Headers>
                <FaToriiGate  size={50}/>
            </Headers>
            <MenuContainer>
                <MenuItemLink href="#">
                    Dashboard
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
}
export default Aside;