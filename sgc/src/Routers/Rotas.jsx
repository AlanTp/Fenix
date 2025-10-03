import React from "react";
import { createBrowserRouter } from 'react-router-dom';
import VendaComPromotor from '../Modelos/VendaComPromotor.jsx';
import Home from '../Modelos/Home.jsx';
import VendaSemPromotor from '../Modelos/VendaSemPromotor.jsx';
import Batidas from '../Modelos/Batidas.jsx';
import CadastroBatidas from "../Modelos/CadastroBatidas";

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
    {
        path:'/Batidas',
        element: <Batidas />,
    },
    {
        path:'/CadastroBatidas',
        element: <CadastroBatidas/>,
    },


]);

export default Rotas;