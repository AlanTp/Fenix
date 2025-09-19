import React from "react";
import { createBrowserRouter } from 'react-router-dom';
import VendaComPromotor from '../Modelos/VendaComPromotor.jsx';
import Home from '../Modelos/Home.jsx';
import VendaSemPromotor from '../Modelos/VendaSemPromotor.jsx';

const Rotas = createBrowserRouter([
    {
        path:'/',
        element: <Home />,
    },
    {
        path:'/VendaComPromotor',
        element: <VendaComPromotor />,
    },
    {
        path:'/VendaSemPromotor',
        element: <VendaSemPromotor />,
    },

]);

export default Rotas;