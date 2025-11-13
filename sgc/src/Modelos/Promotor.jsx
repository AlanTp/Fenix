import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Navbar} from "react-bootstrap";
import logo from "../imagens/logo.png";
import styles from "../Estilos/Promotor.module.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DatePicker from "react-datepicker";
import {Link, useNavigate} from "react-router-dom";

function Promotor () {

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const [promotor, setPromotor] = useState([]);
    const [colaborador, setColaborador] = useState("");
    const [inicio, setInicio] = useState(hoje);
    const [fim, setFim] = useState(hoje);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const opcoes = {
        a: 'Gabriela'
    };

    useEffect(() => {
        const fetchPromotor = async () => {
            try {
                const token = localStorage.getItem("token");

                if(!token){
                    navigate("/Login");
                }

                const params = {
                    colaborador,
                    inicio: inicio ? inicio : undefined,
                    fim: fim ? fim : undefined
                };

                const res = await axios.get("https://fenix-api-gkyb.onrender.com/Promotor", { params,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                // Formata cada data antes de salvar no estado
                const promotorFormatado = res.data.map(b => ({
                    ...b,
                    // Converte "2025-09-30" -> "30/09/2025"
                    data: b.data ? b.data.split('-').reverse().join('/') : ''
                }));

                setPromotor(promotorFormatado);
                setLoading(false);
            } catch (err) {
                console.error("Erro ao buscar Promotor:", err);
                if (err.response && (err.response.status === 401 || err.response.status === 403)) {
                    alert("Sessão expirada! Faça login novamente.");
                    localStorage.removeItem("token");
                    navigate("/Login");
                }
            }
        };

        fetchPromotor();
    }, [colaborador, inicio, fim, navigate]);

    const totaisPorColaborador = promotor.reduce((acc, b) => {
        if (!acc[b.colaborador]) {
            acc[b.colaborador] = {
                colaborador: b.colaborador,
                promotor_normal: 0,
                promotor_extra: 0
            };
        }
        acc[b.colaborador].promotor_normal += b.promotor_normal || 0;
        acc[b.colaborador].promotor_extra += b.promotor_extra || 0;

        return acc;
    }, {});

    const totaisArray = Object.values(totaisPorColaborador);

    if (loading) return <h2>Carregando...</h2>;

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
                    <h3>Listagem de Batidas Promotor</h3>
                </div>

                <div>
                    <Col className="d-flex justify-content-between align-items-center">
                        <label className={styles.filtro}>Filtros</label>

                    </Col>

                    <Row>
                        <Col md={3}  xl={3}>
                            <label className={styles.labelFiltro}>Colaborador</label>
                            <select
                                className={styles.entradaDados}
                                value={colaborador}
                                onChange={(e) => setColaborador(e.target.value)}
                            >
                                <option value="">Selecione...</option>
                                {Object.entries(opcoes).map(([valor, texto]) => (
                                    <option key={valor} value={texto}>
                                        {texto}
                                    </option>
                                ))}
                            </select>
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
                            <th>Promotor B. Normais</th>
                            <th>Promotor B. Extras</th>
                            <th>Data</th>
                        </tr>
                        </thead>
                        <tbody>
                        {promotor.map((P, index) => (
                            <tr key ={P.promotor_id ?? index}>

                                <td>{P.colaborador}</td>
                                <td>{new Intl.NumberFormat("pt-BR").format(P.promotor_normal)}</td>
                                <td>{new Intl.NumberFormat("pt-BR").format(P.promotor_extra)}</td>
                                <td>{P.data}</td>
                            </tr>
                        ))}
                        </tbody>

                    </table>
                </div>
                <div className={styles.rodapeBotao}>
                    <Button variant="outline-primary" className={styles.link_voltar} as={Link} to='/Home'> Home </Button>
                </div>
                <Col className="d-flex justify-content-between align-items-center">
                    <label className={styles.filtro}>Totais</label>


                </Col>


                <div>
                    <table className="table table-striped mb-0 w-100">
                        <thead className="table table-dark">
                        <tr>
                            <th>Colaborador</th>
                            <th>Total B. Normais</th>
                            <th>Total B Extra</th>
                            <th>Valor B. Normais</th>
                            <th>Valor B. Extras</th>
                            <th>Total a Pagar</th>

                        </tr>
                        </thead>
                        <tbody>
                        {totaisArray.map((v, i)=>(
                            <tr key={i}>
                                <td>{v.colaborador}</td>
                                <td>{new Intl.NumberFormat("pt-BR").format(v.promotor_normal)}</td>
                                <td>{new Intl.NumberFormat("pt-BR").format(v.promotor_extra)}</td>
                                <td>XXXX</td>
                                <td>XXXX</td>
                                <td>XXXX</td>
                            </tr>
                        ))}

                        </tbody>
                    </table>
                </div>

            </Container>
        </div>
    );

}

export default Promotor;