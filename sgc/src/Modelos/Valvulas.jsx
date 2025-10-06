import { useEffect, useState } from 'react';
import { Button, Navbar } from 'react-bootstrap';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import logo from '../imagens/logo.png';
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../Estilos/Batidas.module.css";
import {ValorBatidas, ValorBatidasExtras} from "../Calculos/ValorBatidas";


function Valvulas () {

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const [valvulas, setValvulas] = useState([]);
    const [colaborador, setColaborador] = useState("");
    const [inicio, setInicio] = useState(hoje);
    const [fim, setFim] = useState(hoje);
    const [loading, setLoading] = useState(false);



    return (
        <div>
            <Navbar className='justify-content-center'>
                <Navbar.Brand>
                    <img src={logo} alt='logotipo fenix' height={100} width={100} />
                </Navbar.Brand>
                <Navbar.Brand>
                    <b className={styles.titulo}>Fênix Soluções em Embalagens</b>
                </Navbar.Brand>
            </Navbar>


            <Container fluid className={styles.containerFluid}>
                <div className={styles.subtitulo}>
                    <h3>Listagem de Valvulas</h3>
                </div>

                <div>
                    <Col className="d-flex justify-content-between align-items-center">
                        <label className={styles.filtro}>Filtros</label>


                    </Col>


                    <Row>
                        <Col md={3}  xl={3}>
                            <label className={styles.labelFiltro}>Colaborador</label>
                            <input
                                type='text'
                                onChange={(e) => setColaborador(e.target.value)}
                                className={styles.entradaDados}
                            />
                        </Col>
                        <Col md={3}  xl={3} >
                            <label className={styles.labelFiltro}>Data Inicial</label>
                            <DatePicker
                                selected={inicio}
                                onChange={(date) => setInicio(date)}
                                dateFormat="dd/MM/yyyy"
                                className={styles.entradaDados}
                                maxDate={fim}
                            />
                        </Col>
                        <Col md={3}  xl={3}>
                            <label className={styles.labelFiltro}>Data Final</label>
                            <DatePicker
                                selected={fim}
                                onChange={(date) => setFim(date)}
                                dateFormat="dd/MM/yyyy"
                                className={styles.entradaDados}
                                minDate={inicio}
                            />
                        </Col>

                    </Row>
                </div>
                <div>
                    <table className={`table table-striped table-bordered ${styles.tableEqual}`}>
                        <thead>
                        <tr>
                            <th>Colaborador</th>
                            <th>Valvulas Normais</th>
                            <th>Valvulas Extras</th>
                            <th>Data</th>
                        </tr>
                        </thead>
                        <tbody>

                            <tr >
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                            </tr>

                        </tbody>

                    </table>
                </div>
                <div className={styles.rodapeBotao}>
                    <Button variant="outline-primary" className={styles.link_voltar} as={Link} to='/'> Home </Button>
                </div>
                <Col className="d-flex justify-content-between align-items-center">
                    <label className={styles.filtro}>Totais</label>


                </Col>


                <div>
                    <table className="table table-striped mb-0 w-100">
                        <thead className="table table-dark">
                        <tr>
                            <th>Colaborador</th>
                            <th>Total V. Normais</th>
                            <th>Total V. Extras</th>
                            <th>Valor Total Normais</th>
                            <th>Valor Total extras</th>
                            <th>Total a Pagar</th>

                        </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>

                            </tr>

                        </tbody>
                    </table>
                </div>

            </Container>
        </div>
    );
}

export default Valvulas;