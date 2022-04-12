import React from "react";
import {
    Container,
    Headers,
    MenuContainer,
    MenuItemLink,
    Title

} from './style';
import { FaLevelDownAlt,FaRegHeart, FaMoneyBill } from "react-icons/fa";


const Aside: React.FC = () => {
    return (
        <Container>
            <Headers>
                <FaMoneyBill  size={50}/>
                {/* <Title>Zhou Zi Shu <FaRegHeart/> Wen Ke Xing </Title> */}
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