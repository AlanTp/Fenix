import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';
import Calculo from '../Calculos/Calculo.jsx';
import CalculoSemPromotor from '../Calculos/CalculoSemPromotor.jsx';
import styles from '../Estilos/App.module.css';
import Linhas from '../Modelos/Linhas.jsx';
import Linhas1500a10000 from '../Modelos/Linhas1500a10000.jsx';
import Quantidade100a1000 from '../Modelos/Quantidade100a1000.jsx';
import Quantidade1500a10000 from '../Modelos/Quantidade1500a10000.jsx';
import NavBar from '../Modelos/NavBar';

function VendaSemPromotor() {
    let linhas1 = Linhas();
    let linhas2 = Linhas1500a10000();
    let qtd = Quantidade100a1000();
    let qtd2 = Quantidade1500a10000();
    const [PrcEmb, setPrcEmb] = useState();
    const [valvula, setValvula] = useState(0);
    const [margem, setMargem] = useState(1);
    const [arte, setArte] = useState(0);
    const [margemSilk, setMargemSilk] = useState(1)

    useEffect(() => {

    }, []);


    return (
        <div>
            <NavBar/>

            <Container>
                <div className={styles.subtitulo}>
                    <h3>Vendas Sem Promotor</h3>
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
                        <Col>R$ {Calculo(qtd[linha], CalculoSemPromotor(1, qtd[linha]), margem, valvula, PrcEmb, arte, margemSilk)}</Col>
                        <Col>R$ {Calculo(qtd[linha], CalculoSemPromotor(2, qtd[linha]), margem, valvula, PrcEmb, arte, margemSilk)}</Col>
                        <Col>R$ {Calculo(qtd[linha], CalculoSemPromotor(3, qtd[linha]), margem, valvula, PrcEmb, arte, margemSilk)}</Col>
                        <Col>R$ {Calculo(qtd[linha], CalculoSemPromotor(4, qtd[linha]), margem, valvula, PrcEmb, arte, margemSilk)}</Col>
                        <Col>R$ {Calculo(qtd[linha], CalculoSemPromotor(5, qtd[linha]), margem, valvula, PrcEmb, arte, margemSilk)}</Col>
                        <Col>R$ {Calculo(qtd[linha], CalculoSemPromotor(6, qtd[linha]), margem, valvula, PrcEmb, arte, margemSilk)}</Col>
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
                        <Col>R$ {Calculo(qtd2[linha], CalculoSemPromotor(1, qtd2[linha]), margem, valvula, PrcEmb, arte, margemSilk)}</Col>
                        <Col>R$ {Calculo(qtd2[linha], CalculoSemPromotor(2, qtd2[linha]), margem, valvula, PrcEmb, arte, margemSilk)}</Col>
                        <Col>R$ {Calculo(qtd2[linha], CalculoSemPromotor(3, qtd2[linha]), margem, valvula, PrcEmb, arte, margemSilk)}</Col>
                        <Col>R$ {Calculo(qtd2[linha], CalculoSemPromotor(4, qtd2[linha]), margem, valvula, PrcEmb, arte, margemSilk)}</Col>
                        <Col>R$ {Calculo(qtd2[linha], CalculoSemPromotor(5, qtd2[linha]), margem, valvula, PrcEmb, arte, margemSilk)}</Col>
                        <Col>R$ {Calculo(qtd2[linha], CalculoSemPromotor(6, qtd2[linha]), margem, valvula, PrcEmb, arte, margemSilk)}</Col>
                    </Row>
                ))}
            </Container>
            <div className={styles.Botao_Voltar}>
                <Button variant="outline-primary"
                        className={styles.link_voltar}
                        as={Link}
                        to='/Home'>
                    Home
                </Button>
            </div>

        </div>
    )
}

export default VendaSemPromotor;