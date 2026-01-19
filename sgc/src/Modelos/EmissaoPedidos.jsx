import styles from "../Estilos/EmissaoPedido.module.css";
import {FormControl, FormGroup, FormLabel, Nav, Navbar, NavDropdown, Table} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import React from "react";
import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";

function EmissaoPedidos() {
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
                        <NavDropdown title='Pedidos' id='pedidos' className="me-3">
                            <LinkContainer to='/EmissaoPedidos'>
                                <NavDropdown.Item >Pedidos</NavDropdown.Item>
                            </LinkContainer>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

            <div>
                <Row>
                    <h2>Emissao de Pedidos</h2>
                </Row>
            </div>
            <Form>
               <FormGroup>
                   <FormLabel>Cliente</FormLabel>
                   <FormControl
                   type="text"
                  />
               </FormGroup>
                <FormGroup>
                    <FormLabel>Data Emissao Pedido</FormLabel>
                    <FormControl
                        type="date"
                    />
                </FormGroup>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <FormLabel>Tipo do Pedido</FormLabel>
                        </FormGroup>
                        <Form.Check
                            inline
                            type="checkbox"
                            label="Repetição sem alteração"
                        />
                        <Form.Check
                            inline
                            type="checkbox"
                            label="Repetição com alteração"
                        />

                        <Form.Check
                            inline
                            type="checkbox"
                            label="Pedido Novo"
                        />
                    </Col>

                    <Col md={2}>
                        <FormGroup>
                            <FormLabel>Valvula</FormLabel>
                        </FormGroup>
                        <Form.Check
                            inline
                            type={"checkbox"}
                            label={"Nao"}
                        />
                        <Form.Check
                            inline
                            type={"checkbox"}
                            label={"Sim"}
                        />
                    </Col>

                    <Col md={2}>
                        <FormGroup>
                            <FormLabel>Promotor</FormLabel>
                        </FormGroup>
                        <Form.Check
                            inline
                            type={"checkbox"}
                            label={"Nao"}
                        />
                        <Form.Check
                            inline
                            type={"checkbox"}
                            label={"Sim"}
                        />
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <FormLabel> Silk</FormLabel>
                        </FormGroup>
                        <Form.Check
                            inline
                            type={"checkbox"}
                            label={"Frente"}/>
                        <Form.Check
                            inline
                            type={"checkbox"}
                            label={"Verso"}/>
                    </Col>
                    <FormGroup>
                        <FormLabel>Quantidade Batidas</FormLabel>
                        <FormControl
                            type="text"
                        />
                    </FormGroup>

                    <Col md={4}>
                        <FormGroup>
                            <FormLabel>Estoque</FormLabel>
                        </FormGroup>
                        <Form.Check
                            inline
                            type="checkbox"
                            label="Fenix"
                        />
                        <Form.Check
                            inline
                            type="checkbox"
                            label="MakPlast"
                        />

                        <Form.Check
                            inline
                            type="checkbox"
                            label="MP"
                        />
                        <Form.Check
                            inline
                            type="checkbox"
                            label="ArtVac"
                        />
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <FormLabel>Arte</FormLabel>
                            <FormControl
                                type={"text"}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <FormLabel>Vendedor</FormLabel>
                            <FormControl
                                type={"text"}/>
                        </FormGroup>

                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <FormLabel>Comissao</FormLabel>
                            <FormControl
                                type={"text"}/>
                        </FormGroup>

                    </Col>
                    <Col md={12}>
                        <FormGroup>
                            <FormLabel>Status do Pedido</FormLabel>
                            <FormControl
                                type={"date"}/>
                        </FormGroup>
                    </Col>

                </Row>
                <div>
                    <h4>Itens do Pedido</h4>
                </div>
                <Row>
                    <Col md={3}>
                        <FormGroup>
                            <FormLabel>Descricao</FormLabel>
                            <FormControl
                                type={"text"}/>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <FormLabel>Preco</FormLabel>
                            <FormControl
                                type={"text"}/>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <FormLabel>Quantidade</FormLabel>
                            <FormControl
                                type={"text"}/>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <FormLabel>Valor Total</FormLabel>
                            <FormControl
                                type={"text"}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Descricao</th>
                                <th>Preco</th>
                                <th>Quantidade</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Stand up 17x23.5 +4</td>
                                <td>1200</td>
                                <td>1000</td>
                                <td>1200</td>
                            </tr>
                        </tbody>

                    </Table>
                    <Col md={6}>

                    </Col>
                    <Col md={4}>

                    </Col>
                    <Col md={1}>
                        <label>Total Geral</label>
                    </Col>
                    <Col md={1}>
                        <label>1200</label>
                    </Col>
                </Row>

            </Form>

        </div>
    )

}
export default EmissaoPedidos;