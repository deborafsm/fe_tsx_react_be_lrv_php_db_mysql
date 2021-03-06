
import React, { useState } from "react";
import SelectInput from "../Select";
import {
    Container,
    TitleHeader,
    ControllersHeader
} from "./style";


interface IContentHeaderProps {
    title: string;
    lineColor: string;
    children: React.ReactNode;
    // controllers: React.ReactNode;
}
const ContentHeader: React.FC<IContentHeaderProps> = ({ title, lineColor, children }) => {

    return (
        <Container >
            <TitleHeader lineColor={lineColor}>
                <h2>{title}</h2>
            </TitleHeader>
            <ControllersHeader>
                {children}
            </ControllersHeader>
        </Container>
    );
}
export default ContentHeader;