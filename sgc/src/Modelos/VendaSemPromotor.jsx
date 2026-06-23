import React, {useEffect, useState} from 'react';
import {Button, Table} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link, useNavigate} from 'react-router-dom';
import Calculo from '../Calculos/Calculo.jsx';
import CalculoSemPromotor from '../Calculos/CalculoSemPromotor.jsx';
import styles from '../Estilos/App.module.css';
import Linhas from '../Modelos/Linhas.jsx';
import Quantidade100a1000 from '../Modelos/Quantidade100a1000.jsx';
import NavBar from '../Modelos/NavBar';

function VendaSemPromotor() {
    let linhas1 = Linhas();
    let qtd = Quantidade100a1000();
    const [PrcEmb, setPrcEmb] = useState();
    const [valvula, setValvula] = useState(0);
    const [margem, setMargem] = useState(1);
    const [arte, setArte] = useState(0);
    const [margemSilk, setMargemSilk] = useState(1)
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/Login");
        }
    }, [navigate]);
    return (
        <div>
            <NavBar/>

            <Container>
                <div className={styles.subtitulo}>
                    <h3 className={styles.imprimir}>Vendas Sem Promotor</h3>
                </div>
                <Row className={`${styles.noPrint} ${styles.rowtitulo}`}>
                    {/* Valvula */}
                    <Col className={styles.colForm}>
                        <div className={styles.input_group}>
                            <label>Valvula</label>
                            <select
                                className={styles.entradaDados}
                                value={valvula}
                                onChange={(e) => setValvula(Number(e.target.value))}
                            >
                                <option value={0.580}>Sim</option>
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


                <Row>
                    <Table striped bordered hover style={{textAlign: "center", fontWeight: "bold"}}>
                        <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Quantidade</th>
                            <th>1 Cor</th>
                            <th>2 Cores</th>
                            <th>3 Cores</th>
                            <th>4 Cores</th>
                            <th>5 Cores</th>
                            <th>6 Cores</th>
                        </tr>
                        </thead>

                        <tbody>
                        {linhas1.map((linha) => (
                            <tr key={linha}>
                                <td>Emb Personalizada</td>
                                <td>{qtd[linha]}</td>
                                <td>R$ {Calculo(qtd[linha], CalculoSemPromotor(1, qtd[linha]), margem, valvula, PrcEmb, arte, margemSilk)}</td>
                                <td>R$ {Calculo(qtd[linha], CalculoSemPromotor(2, qtd[linha]), margem, valvula, PrcEmb, arte, margemSilk)}</td>
                                <td>R$ {Calculo(qtd[linha], CalculoSemPromotor(3, qtd[linha]), margem, valvula, PrcEmb, arte, margemSilk)}</td>
                                <td>R$ {Calculo(qtd[linha], CalculoSemPromotor(4, qtd[linha]), margem, valvula, PrcEmb, arte, margemSilk)}</td>
                                <td>R$ {Calculo(qtd[linha], CalculoSemPromotor(5, qtd[linha]), margem, valvula, PrcEmb, arte, margemSilk)}</td>
                                <td>R$ {Calculo(qtd[linha], CalculoSemPromotor(6, qtd[linha]), margem, valvula, PrcEmb, arte, margemSilk)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>

                </Row>

            </Container>
            <div className={styles.Botao_Voltar}>
                <Button variant="outline-primary"
                        className={`${styles.Botao_Voltar} ${styles.noPrint}`}
                        as={Link}
                        to='/Home'>
                    Home
                </Button>
            </div>

        </div>
    )
}

export default VendaSemPromotor;