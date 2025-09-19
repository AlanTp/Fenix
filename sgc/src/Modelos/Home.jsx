import React from "react";
import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import '../Estilos/Home.css';
import '../Modelos/Home.jsx';
import logo from '../imagens/logo.png';

function Home (){

    return(
        <div className="divisao_geral">
            <Navbar className='justify-content-center' >
            <Navbar.Brand><img src={logo} alt='logotipo fenix' height={100} width={100}/></Navbar.Brand>
            <Navbar.Brand><b className='titulo'>Fênix Soluções em Embalagens</b></Navbar.Brand>
            </Navbar>

        <Container>
            <div className="imagem_central">
            <img src={logo} alt='Imagem inicial' height={300} width={300}/>
            </div>
        </Container>
            <Container className="botoes_alinhamento">
                <Row>
                    <Col><Button variant="outline-primary"
                     className="Botao"
                     as={Link}
                     to ='/VendaComPromotor'>Venda Com Promotor</Button>
                    </Col>
                    <Col><Button variant="outline-primary"
                     className="Botao"
                     as={Link}
                     to ='/VendaSemPromotor'>Venda Sem Promotor</Button>
                    </Col>
                </Row>
                
            </Container>

        </div>
        
    )

}

export default Home;