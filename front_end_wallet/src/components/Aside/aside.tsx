import React from "react";

import {
    Container,
    Headers,
    MenuContainer,
    MenuItemLink,
    Title

} from './style';
import {
    FaLongArrowAltDown,
    FaLongArrowAltUp,
    FaColumns,
    FaMoneyBill,
    FaDoorOpen
} from "react-icons/fa";


const Aside: React.FC = () => {
    return (
        <Container>
            <Headers>
                <FaMoneyBill size={50} />
                <Title>Wallet</Title>
            </Headers>
            <MenuContainer>
                <MenuItemLink href="#">
                    <FaColumns />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="#">
                    <FaLongArrowAltUp />
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="#">
                    <FaLongArrowAltDown />
                    Saidas
                </MenuItemLink>
                <MenuItemLink href="#">
                    <FaDoorOpen />
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
}
export default Aside;