import React, { useEffect, useState } from 'react';
import {Button, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Calculo from '../Calculos/Calculo.jsx';
import CalculoComPromotor from '../Calculos/CalculoComPromotor.jsx';
import styles from '../Estilos/App.module.css';
import Linhas from '../Modelos/Linhas.jsx';
import Linhas1500a10000 from '../Modelos/Linhas1500a10000.jsx';
import Quantidade100a1000 from '../Modelos/Quantidade100a1000.jsx';
import Quantidade1500a10000 from '../Modelos/Quantidade1500a10000.jsx';

import {LinkContainer} from "react-router-bootstrap";

function VendaComPromotor() {
  let linhas1 = Linhas();
  let linhas2 = Linhas1500a10000();
  let qtd = Quantidade100a1000();
  let qtd2 = Quantidade1500a10000();
  const [PrcEmb, setPrcEmb] = useState();
  const [valvula, setValvula] = useState(0);
  const [margem, setMargem] = useState(1);
  const [arte, setArte] = useState(0);
  const [margemSilk, setMargemSilk] = useState(1)
  
  useEffect(()=> {

  }, []);

  
  return (
    <div>
      <Navbar className={`${styles.navbar} justify-content-left`} >

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
    
    <Container>
            <div className={styles.subtitulo}>
                <h3>Vendas Com Promotor</h3>
            </div>
        <Row>
            {/* Valvula */}
            <Col className={styles.colForm}>
                <div className={styles.input_group}>
                    <label>Valvula</label>
                    <select
                        className={styles.entradaDados}
                        value={valvula}
                        onChange={(e) => setValvula(Number(e.target.value))}
                    >
                        <option value={0.495}>Sim</option>
                        <option value={0}>Não</option>
                    </select>
                </div>
            </Col>

            {/* Arte */}
            <Col className={styles.colForm}>
                <div className={styles.input_group}>
                    <label>Arte</label>
                    <select
                        className={styles.entradaDados}
                        value={arte}
                        onChange={(e) => setArte(Number(e.target.value))}
                    >
                        <option value={50}>Sim</option>
                        <option value={0}>Não</option>
                    </select>
                </div>
            </Col>

            {/* Preço Embalagem */}
            <Col className={styles.colForm}>
                <div className={styles.input_group}>
                    <label>Preço Emb.</label>
                    <input
                        type="number"
                        className={styles.opcoes_input}
                        value={PrcEmb}
                        onChange={(e) => setPrcEmb(Number(e.target.value))}
                    />
                </div>
            </Col>

            {/* Margem Embalagem */}
            <Col className={styles.colForm}>
                <div className={styles.input_group}>
                    <label>Margem Emb.</label>
                    <select
                        className={styles.entradaDados}
                        value={margem}
                        onChange={(e) => setMargem(Number(e.target.value))}
                    >
                        <option value={1}>0%</option>
                        <option value={0.50}>50%</option>
                        <option value={0.60}>40%</option>
                        <option value={0.70}>30%</option>
                    </select>
                </div>
            </Col>

            {/* Margem Silk */}
            <Col className={styles.colForm}>
                <div className={styles.input_group}>
                    <label>Margem Silk</label>
                    <select
                        className={styles.entradaDados}
                        value={margemSilk}
                        onChange={(e) => setMargemSilk(Number(e.target.value))}
                    >
                        <option value={1}>0%</option>
                        <option value={0.50}>50%</option>
                        <option value={0.60}>40%</option>
                        <option value={0.70}>30%</option>
                    </select>
                </div>
            </Col>
        </Row>


        <Row className={styles.cabecalho}>
        <Col> Produto</Col>
        <Col>Quantidade</Col>
        <Col>1 Cor</Col>
        <Col>2 Cores</Col>
        <Col>3 Cores</Col>
        <Col>4 Cores</Col>
        <Col>5 Cores</Col>
        <Col>6 Cores</Col>
      </Row>
      {linhas1.map((linha) => (
        <Row key={linha} className={styles.linhas}>
          <Col>Emb Personalizado</Col>
          <Col>{qtd[linha]}</Col>
          <Col>R$ {Calculo(qtd[linha],CalculoComPromotor(1,qtd[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(qtd[linha],CalculoComPromotor(2,qtd[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(qtd[linha],CalculoComPromotor(3,qtd[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(qtd[linha],CalculoComPromotor(4,qtd[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(qtd[linha],CalculoComPromotor(5,qtd[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(qtd[linha],CalculoComPromotor(6,qtd[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
          </Row>
      ))}
      <Row className={styles.custoM}>
      <label> Preço de embalagens por cor de 1.500 ate 10.000 unidades</label>
      </Row>
      <Row className={styles.cabecalho}>
        <Col> Produto</Col>
        <Col>Quantidade</Col>
        <Col>1 Cor</Col>
        <Col>2 Cores</Col>
        <Col>3 Cores</Col>
        <Col>4 Cores</Col>
        <Col>5 Cores</Col>
        <Col>6 Cores</Col>
      </Row>
      {linhas2.map((linha) => (
        <Row key={linha} className={styles.linhas}>
          <Col>Emb Personalizado</Col>
          <Col>{qtd2[linha]}</Col>
          <Col>R$ {Calculo(qtd2[linha],CalculoComPromotor(1,qtd2[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(qtd2[linha],CalculoComPromotor(2,qtd2[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(qtd2[linha],CalculoComPromotor(3,qtd2[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(qtd2[linha],CalculoComPromotor(4,qtd2[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(qtd2[linha],CalculoComPromotor(5,qtd2[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(qtd2[linha],CalculoComPromotor(6,qtd2[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
          </Row>
      ))}
    </Container>
      <div className={styles.Botao_Voltar}>
        <Button variant="outline-primary"
            className={styles.link_voltar}
            as={Link}
            to ='/Home'>
            Home
        </Button>
      </div>

    </div>
  )
}

export default VendaComPromotor;