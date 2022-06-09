import React from "react";
import List from '../pages/List/list';
import Entrada from '../pages/Entrada/entrada'
import Dashboard from "../pages/Dashboard/dashboard";
import Layout from "../components/Layout/layout";
import { Routes, Route } from 'react-router-dom';

const AppRoutes: React.FC = () => (
    <Layout>
        <Routes>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/saida" element={<List/> } ></Route>
            <Route path="/entrada" element={<Entrada/> } ></Route>
        </Routes >
    </Layout>

);
export default AppRoutes;