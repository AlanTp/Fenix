import NavBar from '../Modelos/NavBar';
import styles from '../Estilos/ListagemPedidos.module.css';
import React, {useEffect} from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {FaCheck, FaClipboardList, FaTruck} from "react-icons/fa";
import {GiNotebook} from "react-icons/gi";
import {BsClipboard2DataFill} from "react-icons/bs";
import {Button, Form, FormControl, FormGroup, FormLabel, Table} from "react-bootstrap";

const pedidosApiMock = [
    {
        id: 1,
        numeroPedido: "PED-1001",
        cliente: "Loja Alpha",
        status: "FINALIZADO",
        cidade: "São Paulo",
        dataCriacao: "2026-03-01"
    },
    {
        id: 2,
        numeroPedido: "PED-1002",
        cliente: "Mercado Beta",
        status: "AGUARDANDO_FRETE",
        cidade: "São Paulo",
        dataCriacao: "2026-03-02"
    },
    {
        id: 3,
        numeroPedido: "PED-1003",
        cliente: "Distribuidora Gama",
        status: "AGUARDANDO_FATURAMENTO",
        cidade: "Rio de Janeiro",
        dataCriacao: "2026-03-02"
    },
    {
        id: 4,
        numeroPedido: "PED-1004",
        cliente: "Atacadão Delta",
        status: "FATURADO",
        cidade: "Belo Horizonte",
        dataCriacao: "2026-03-03"
    },
    {
        id: 5,
        numeroPedido: "PED-1005",
        cliente: "Loja Ômega",
        status: "FINALIZADO",
        cidade: "São Paulo",
        dataCriacao: "2026-03-03"
    }
];

function ListagemPedidos() {


    const [totais, setTotais] = React.useState({
        totalFinalizados: 0,
        totalFretPag: 0,
        totalFaturados: 0
    });


    const calcularTotais = (ob) => {
        let novosTotais = {
            totalFinalizados: 0,
            totalFretPag: 0,
            totalFaturados: 0
        };
        for (let i = 0; i < ob.length; i++) {
            if (ob[i].status === "FINALIZADO") {
                novosTotais.totalFinalizados++;
            }
            if (ob[i].status === "AGUARDANDO_FRETE") {
                novosTotais.totalFretPag++;
            }
            if (ob[i].status === "FATURADO") {
                novosTotais.totalFaturados++;
            }
        }
        setTotais(novosTotais);
    }


    const pedidosList = [
        {
            numeroPedido: 10231,
            status: "FINALIZADO",
            cliente: "Mercado Central LTDA",
            arte: "Arte Aprovada",
            cidade: "São Paulo - SP",
            valor: 1250.50,
            dataFechamento: "2026-03-01"
        },
        {
            numeroPedido: 10232,
            status: "AGUARDANDO_FRETE",
            cliente: "Padaria Pão Quente",
            arte: "Aguardando Arte",
            cidade: "Campinas - SP",
            valor: 890.00,
            dataFechamento: "2026-03-02"
        },
        {
            numeroPedido: 10233,
            status: "AGUARDANDO_FATURAMENTO",
            cliente: "Distribuidora Alfa",
            arte: "Arte em Produção",
            cidade: "Sorocaba - SP",
            valor: 2140.75,
            dataFechamento: "2026-03-04"
        },
        {
            numeroPedido: 10234,
            status: "FINALIZADO",
            cliente: "Supermercado Bom Preço",
            arte: "Arte Aprovada",
            cidade: "Santos - SP",
            valor: 560.30,
            dataFechamento: "2026-03-05"
        }
    ];
    useEffect(() => {
        calcularTotais(pedidosApiMock);
    }, []);

    return (
        <div>
            <NavBar/>

            <div className={styles.titulo}>
                <h3>Gestão de Pedidos</h3>
            </div>

            <Container fluid>
                <Row className={styles.rowBoard}>
                    <Col md={2} className={styles.boardResumeColuna}>
                        <Col className={styles.tituloColunaResume}>

                            <span className={styles.itensBoard}> <FaCheck/>  Finalizados</span>
                            <span className={styles.valorColuna}>{totais.totalFinalizados}</span>
                        </Col>

                    </Col>
                    <Col md={2} className={styles.boardResumeColuna}>
                        <Col className={styles.tituloColunaResume}>

                            <span className={styles.itensBoard}><FaTruck/>  Aguardando Frete</span>
                            <span className={styles.valorColuna}>{totais.totalFretPag}</span>
                        </Col>
                    </Col>
                    <Col md={2} className={styles.boardResumeColuna}>
                        <Col className={styles.tituloColunaResume}>

                            <span className={styles.itensBoard}> <GiNotebook/>  Faturados</span>
                            <span className={styles.valorColuna}>{totais.totalFaturados}</span>
                        </Col>
                    </Col>

                </Row>
            </Container>

            <div className={styles.subtitulo}>
                <h5><BsClipboard2DataFill/> Painel de Cidades: Rotas para Entregas.</h5>
            </div>


            <Container fluid className="px-4">
                <Row className={styles.rowBoard}>
                    <Col md={3} className={styles.containerBoard}>
                        <div className={styles.tituloColuna}>
                            <h5 className="text-center">Pedidos Finalizados</h5>
                        </div>
                        <ul className="list-unstyled">
                            {pedidosApiMock.filter(p => p.status === "FINALIZADO").map((b) => (
                                <li key={b.id}
                                    className={styles.formatLi}>{b.numeroPedido} -{b.cliente} - {b.cidade}</li>

                            ))}
                        </ul>
                    </Col>
                    <Col md={3} className={styles.containerBoard}>
                        <div className={styles.tituloColuna}>
                            <h5 className="text-center">Aguardando Frete/Pagamento</h5>
                        </div>
                        <ul className="list-unstyled">
                            {pedidosApiMock.filter(p => p.status === "AGUARDANDO_FRETE").map((b) => (
                                <li key={b.id}
                                    className={styles.formatLi}>{b.numeroPedido} -{b.cliente} - {b.cidade}</li>

                            ))}
                        </ul>
                    </Col>
                    <Col md={3} className={styles.containerBoard}>
                        <div className={styles.tituloColuna}>
                            <h5 className="text-center">Faturados</h5>
                        </div>
                        <ul className="list-unstyled">
                            {pedidosApiMock.filter(p => p.status === "FATURADO").map((b) => (
                                <li key={b.id}
                                    className={styles.formatLi}>{b.numeroPedido} -{b.cliente} - {b.cidade}</li>

                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>


            <Container fluid className="px-4">
                <div>
                    <Row className={styles.rowBoard}>
                        <Col className={styles.tituloColuna}>
                            <h4>Filtro</h4>
                        </Col>
                    </Row>
                </div>
                <Form className={styles.formulario}>
                    <Row className={styles.rowBoard}>
                        <Col md={1} className={styles.tituloColuna}>
                            <FormGroup>
                                <FormLabel>Data Inicial</FormLabel>
                                <FormControl
                                    type="date"
                                    format="dd/MM/yyyy"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={1} className={styles.tituloColuna}>
                            <FormGroup>
                                <FormLabel>Data Final</FormLabel>
                                <FormControl
                                    type="date"
                                    format="dd/MM/yyyy"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={1} className={styles.tituloColuna}>
                            <FormGroup>
                                <FormLabel>Data Entrega</FormLabel>
                                <FormControl
                                    type="date"
                                    format="dd/MM/yyyy"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={2} className={styles.tituloColuna}>
                            <FormGroup>
                                <FormLabel>Cidade</FormLabel>
                                <FormControl
                                    type="text"
                                    placeholder={"Cidade"}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={2} className={styles.tituloColuna}>
                            <FormGroup>
                                <FormLabel>Cliente</FormLabel>
                                <FormControl
                                    type="text"
                                    placeholder={"cliente"}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={1} className={styles.tituloColuna}>
                            <FormGroup className="d-flex align-items-end h-100">
                                <Button>Filtrar</Button>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Container>
            <div className={styles.subtitulo}>
                <h5><FaClipboardList/> Lisa de Pedidos: Localizar Pedido.</h5>
            </div>
            <Container fluid className="px-4">
                <Row>
                    <Table striped bordered hover responsive>
                        <thead className={styles.centralizarColuna}>
                        <tr>
                            <th>Nº Pedido</th>
                            <th>Status</th>
                            <th>Cliente</th>
                            <th>Arte</th>
                            <th>Cidade</th>
                            <th>Valor</th>
                            <th>Data Fechamento</th>
                            <th>Ações</th>
                        </tr>
                        </thead>

                        <tbody className={styles.centralizarColuna}>
                        {pedidosList.map((pedidos, index) => (
                            <tr key={index}>
                                <td>{pedidos.numeroPedido}</td>
                                <td>{pedidos.status}</td>
                                <td>{pedidos.cliente}</td>
                                <td>{pedidos.arte}</td>
                                <td>{pedidos.cidade}</td>
                                <td>{pedidos.valor}</td>
                                <td>{pedidos.dataFechamento}</td>
                                <td>
                                    <Button variant="success" size="sm" className={styles.botaoAcoes}> Detalhes</Button>
                                    <Button variant="info" size="sm" className={styles.botaoAcoes}> Editar</Button>
                                    <Button variant="danger" size="sm" className={styles.botaoAcoes}> Excluir</Button>
                                </td>
                            </tr>
                        ))};

                        </tbody>
                    </Table>
                </Row>
            </Container>

        </div>
    )
}

export default ListagemPedidos;