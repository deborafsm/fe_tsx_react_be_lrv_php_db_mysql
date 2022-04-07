import React from "react";
import Grid from "./style";
import Header from "../Header/header";
import Aside from "../Aside/aside";
import Content from "../Content/content";
const Layout: React.FC = () => {
    return (
        <Grid>
            <Header />
            <Aside />
            <Content />
        </Grid>


    );
}
export default Layout;