import { ListGroup, ListGroupItem, Navbar, Table} from "react-bootstrap";
import logo from "../imagens/logo.png";
import styles from "../Estilos/ReceitasTintas.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Form, Input, Label, Spinner} from "reactstrap";
import React, { useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import CalculaReceitaTintas from "../Calculos/CalculoReceitaTintas";
import Button from "react-bootstrap/Button";


function ReceitasTintas () {

    const [codigo, setCodigo] = useState(1);
    const [nome, setNome] = useState("");
    const [tons, setTons] = useState([]);
    const [receitas, setReceitas] = useState([]);
    const [produzir, setProduzir] = useState(100);
    const [quantidadeInput, setQuantidadeInput] = useState(100);
    const [loading, setLoading]= useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const tons = async () => {
            try {
                setLoading(true);
                const token = localStorage.getItem("token");

                if (!token) {
                    navigate("/Login");
                }
                const params = {nome};

                const res = await axios.get("https://fenix-api-gkyb.onrender.com/Tons", {
                    params,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const tonsFormatados = res.data.map(a => ({
                    ...a
                }));

                setTons(tonsFormatados);

            } catch (err) {
                console.error("Erro ao buscar Tons:", err)

                if (err.response && (err.response.status === 401 || err.response.status === 403)) {
                    alert("Sessão expirada! Faça login novamente.");
                    localStorage.removeItem("token");
                    navigate("/Login");
                }
            }finally {
                setLoading(false);
            }
        }
        const fecthReceitas = async () => {
            try {
                const token = localStorage.getItem("token");

                if (!token) {
                    navigate("/Login");
                }

                const params = {codigo};

                const res = await axios.get("https://fenix-api-gkyb.onrender.com/Receitas", {
                    params,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const receitasFormatadas = res.data.map( b => ({
                    ...b
                }));

                setReceitas(receitasFormatadas);
            } catch (err) {
                console.error("Erro ao buscar batidas:", err)

                if (err.response && (err.response.status === 401 || err.response.status === 403)) {
                    alert("Sessão expirada! Faça login novamente.");
                    localStorage.removeItem("token");
                    navigate("/Login");
                }
            }finally {
                setLoading(false);
            }
        }
        tons();
        fecthReceitas();
    }, [nome,codigo,navigate,produzir]);



    return(
        <Container>
            <Navbar className='justify-content-center'>
                <Navbar.Brand>
                    <img src={logo} alt='logotipo fenix' height={100} width={100} />
                </Navbar.Brand>
                <Navbar.Brand>
                    <b className={styles.titulo}>Fênix Soluções em Embalagens</b>
                </Navbar.Brand>
            </Navbar>

            <Container>
                <div className={styles.subtitulo}>
                    <h3>Listagem de Composicao de Tintas</h3>
                </div>
            </Container>
            <Container>
                <Row>
                    <Col md={3} className={styles.Labels}>
                        <Label>Localizar</Label>
                    </Col>
                    <Col md={9}></Col>
                </Row>

                <Row>
                    <Col md={3}>
                        <Input
                            type="text"
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </Col>
                    <Col md={9} className={styles.Labels}>
                        <Label>Detalhes da Receita</Label>
                    </Col>
                </Row>

                <Row>
                    <Col md={3}>
                        <ListGroup className={styles.listGroup}>
                            {tons.map((a) => (
                                <ListGroupItem
                                    key={a.id}
                                    action
                                    onClick={() => {setCodigo(a.codigo);
                                            setProduzir(100);
                                            setQuantidadeInput(100)}}
                                    style={{ cursor: "pointer" }}
                                    className={styles.listItens}
                                >
                                    {a.nome}
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col md={9}>
                        <Form>
                            <Table  bordered striped responsive>
                                <thead>
                                <tr className={styles.listItens}>
                                    <th>Tintas/Solvente</th>
                                    <th>Unidade</th>
                                    <th>Quantidade</th>
                                </tr>
                                </thead>

                                <tbody>
                                {receitas.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.nome}</td>
                                        <td>{item.unidade}</td>
                                        <td>{CalculaReceitaTintas(item.quantidade, produzir)}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Form>

                        <div className="d-flex justify-content-center mt-3">
                            <Label className={styles.labelCalcular}>Quantidade a produzir</Label>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <Input
                                className={styles.entradaDados}
                                value={quantidadeInput}
                                onChange={(e) => setQuantidadeInput(e.target.value)}
                            />
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <Button onClick={() => setProduzir(Number(quantidadeInput))} className={styles.botoes}>
                                {loading ? (
                                    <Spinner animation="border" size="sm" />
                                ) : (
                                    "Calcular"
                                )}
                            </Button>
                            <Button className={styles.botoes} as={Link} to='/Home'>
                                {loading ? (
                                    <Spinner animation="border" size="sm" />
                                ) : (
                                    "Voltar"
                                )}
                            </Button>
                        </div>
                    </Col>
                </Row>

            </Container>
        </Container>




    )

}

export default ReceitasTintas;