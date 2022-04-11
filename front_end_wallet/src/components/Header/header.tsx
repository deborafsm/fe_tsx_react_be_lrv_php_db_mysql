import emojis from "../../utils/emojis";
import React, { useMemo } from "react";

import Toggle from '../../components/Toggle/Toggle';
import {
    Container,
    Profile,
    Welcome,
    UserName
} from './style'
const Header: React.FC = () => {
    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice]
    }, []);
    return (
        <Container>
            <Toggle />
            <Profile>
                <Welcome>
                    Olá, {emoji}
                    <UserName>UserName: Débora Freire</UserName>
                </Welcome>
            </Profile>
        </Container>


    );
}
export default Header;