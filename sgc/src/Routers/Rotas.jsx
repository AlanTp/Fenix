import React from "react";
import { createBrowserRouter } from 'react-router-dom';
import VendaComPromotor from '../Modelos/VendaComPromotor.jsx';
import Home from '../Modelos/Home.jsx';
import VendaSemPromotor from '../Modelos/VendaSemPromotor.jsx';
import Batidas from '../Modelos/Batidas.jsx';
import CadastroBatidas from "../Modelos/CadastroBatidas";
import Valvulas from "../Modelos/Valvulas.jsx";
import CadastroValvulas from "../Modelos/CadastroValvulas";
import Promotor from "../Modelos/Promotor.jsx";
import CadastroPromotor from "../Modelos/CadastroPromotor";
import Login from "../Modelos/Login.jsx";
import RotaProtegida from "./RotasProtegidas";

const Rotas = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/Home',
        element: (
            <RotaProtegida>
                <Home />
            </RotaProtegida>
        ),
    },
    {
        path: '/VendaComPromotor',
        element: (
            <RotaProtegida>
                <VendaComPromotor />
            </RotaProtegida>
        ),
    },
    {
        path: '/VendaSemPromotor',
        element: (
            <RotaProtegida>
                <VendaSemPromotor />
            </RotaProtegida>
        ),
    },
    {
        path: '/Batidas',
        element: (
            <RotaProtegida>
                <Batidas />
            </RotaProtegida>
        ),
    },
    {
        path: '/CadastroBatidas',
        element: (
            <RotaProtegida>
                <CadastroBatidas />
            </RotaProtegida>
        ),
    },
    {
        path: '/Valvulas',
        element: (
            <RotaProtegida>
                <Valvulas />
            </RotaProtegida>
        ),
    },
    {
        path: '/CadastroValvulas',
        element: (
            <RotaProtegida>
                <CadastroValvulas />
            </RotaProtegida>
        ),
    },
    {
        path: '/Promotor',
        element: (
            <RotaProtegida>
                <Promotor />
            </RotaProtegida>
        ),
    },
    {
        path: '/CadastroPromotor',
        element: (
            <RotaProtegida>
                <CadastroPromotor />
            </RotaProtegida>
        ),
    },


]);

export default Rotas;