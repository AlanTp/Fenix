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
                    <Col><Button variant="outline-primary" className="Botao">
                    <Link to ='/Vendas'>Prestacao Servico</Link></Button></Col>
                    <Col><Button variant="outline-primary" className="Botao">
                    <Link to ='/Prestacao_servico'>Vendas direta</Link></Button></Col>
                </Row>
                
            </Container>
            <div className="rodape">
                <Container>
                    <Row className="linha_rodape">
                    <Col className="coluna_rodape">
                        <ul>
                            <li>Localizada</li>
                            <li>Avenida Barão da Boa Esperanca nº 1.795</li>
                            <li>Bairro: Antonio de brito</li>
                        </ul>
                    </Col>
                    <Col className="coluna_rodape">
                        <ul>
                            <li>Contato:</li>
                            <li>(035) 999661991</li>
                            <li>Felipe Brito</li>
                        </ul>
                    </Col>
                    <Col className="coluna_rodape">
                        <ul>
                            <li>Rede Socias</li>
                            <li>@Fenix_Embalagens_</li>
                            <li>Siga nos!</li>
                        </ul>
                    </Col>
                    </Row>
                </Container>
            </div>
        </div>
        
    )

}

export default Home;