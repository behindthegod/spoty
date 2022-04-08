import React from 'react';
import Navbar from "../component/Navbar";
import {FC} from "react";
import {Container} from "@mui/material";

const MainLayout: FC = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container >
                {children}
            </Container>
        </>
    );
};

export default MainLayout;