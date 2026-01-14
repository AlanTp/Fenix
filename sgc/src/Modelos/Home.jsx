import React from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styles from '../Estilos/Home.module.css';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../imagens/LogoFenix.png";

function Home (){
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/Login");
        }
    }, [navigate]);
    return(
        <div className={styles.page}>
            <Navbar className={`${styles.navbar} justify-content-left`}>

            <Navbar.Brand><b className={styles.titulo}>Fênix Soluções em Embalagens</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="menu-principal" />

                <Navbar.Collapse id="menu-principal">
                    <Nav >
                        <LinkContainer  to="/Home" className="me-3">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>


                        <NavDropdown  title='Vendas' id='vendas' className="me-3">
                            <LinkContainer to='/VendaComPromotor'>
                                <NavDropdown.Item >Vendas com promotor</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to='/VendaSemPromotor'>
                                <NavDropdown.Item>Vendas sem promotor</NavDropdown.Item>
                            </LinkContainer>



                        </NavDropdown>
                        <NavDropdown title='Batidas' id='batidas' className="me-3">
                            <LinkContainer to='/CadastroBatidas'>
                                <NavDropdown.Item >Cadastrar Batidas</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/Batidas'>
                                <NavDropdown.Item >Relatorio Batidas</NavDropdown.Item>
                            </LinkContainer>


                        </NavDropdown>
                        <NavDropdown title='Valvulas' id='valvulas' className="me-3">
                            <LinkContainer to='/CadastroValvulas'>
                                <NavDropdown.Item >Cadastro Batidas Valvulas</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/Valvulas'>
                                <NavDropdown.Item >Relatorio Batidas Valvulas</NavDropdown.Item>
                            </LinkContainer>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>


            <div className={styles.content} />

        </div>
        
    )

}

export default Home;