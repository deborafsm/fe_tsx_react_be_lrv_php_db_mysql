import React from "react";
import Grid from "./style";
import Header from "../Header/header";
import Aside from "../Aside/aside";
import Content from "../Content/content";
const Layout: React.FC = ({ children }) => {
    return (
        <Grid>
            <Header />
            <Aside />
            <Content >
                { children }
            </Content>
        </Grid>


    );
}
export default Layout;