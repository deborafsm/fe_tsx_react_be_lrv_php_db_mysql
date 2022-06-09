import React from "react";

import AppRoute from './routes';
import { BrowserRouter } from 'react-router-dom';

const Routes: React.FC = () => (
    <BrowserRouter>
        <AppRoute />
    </BrowserRouter>
)
export default Routes;