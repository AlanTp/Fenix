import React from "react";
import { createBrowserRouter } from 'react-router-dom';
import App from '../Modelos/App.js';
import Home from '../Modelos/Home.jsx';
import Vendas from '../Modelos/Vendas.jsx';

const Rotas = createBrowserRouter([
    {
        path:'/',
        element: <Home />,
    },
    {
        path:'/Prestacao_servico',
        element: <App />,
    },
    {
        path:'/Vendas',
        element: <Vendas />,
    },
]);

export default Rotas;