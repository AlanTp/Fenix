import styles from "../Estilos/CadastroBatidas.module.css";
import Row from "react-bootstrap/Row";
import {Form} from "reactstrap";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import NavBar from '../Modelos/NavBar';

function CadastroBatidas() {

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const [data, setData] = useState(hoje);
    const [colaborador, setColaborador] = useState("");
    const [batida_normal, setBatidasNormais] = useState("");
    const [batida_extra, setBatidasExtras] = useState("");
    const [meta, setMeta] = useState(3000);
    const [amostra, setamostra] = useState("");
    const [perdas, setPercas] = useState("");
    const [user_name] = useState("Alan");
    const navigate = useNavigate();
    const [nPedido, setNPedido] = useState(0);

    const opcoes = {
        a: 'Aquiles',
        b: 'Rodrigo',
        c: 'Tunico',
        d: 'Dyogo'
    };


    const handleSubmit = async (e) => {
        e.preventDefault(); // evita reload da página

        const token = localStorage.getItem("token");

        const dados = {
            data,
            colaborador,
            batida_normal: Number(batida_normal) - Number(perdas) || 0,
            batida_extra: Number(batida_extra) || 0,
            meta: Number(meta) || 0,
            amostra: Number(amostra) || 0,
            perdas: Number(perdas) || 0,
            user_name,
            nPedido: Number(nPedido) || 0
        };

        try {
            const response = await axios.post("https://fenix-api-gkyb.onrender.com/Batidas", dados, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log("Salvo com sucesso!", response.data);
            alert("Batida salva com sucesso!");
            setColaborador("");
            setBatidasNormais("");
            setBatidasExtras("");
            setMeta(3000);
            setamostra('');
            setPercas("");
            setData(new Date());
            setNPedido(0);

        } catch (error) {
            console.error("Erro ao salvar:", error);

            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                alert("Sessão expirada. Faça login novamente.");
                localStorage.removeItem("token");
                navigate("/");
            } else {
                alert("Erro ao salvar batida. Contate o administrador.");
            }
        }
    };

    const handleClear = () => {
        setColaborador("");
        setBatidasNormais("");
        setBatidasExtras("");
        setMeta("");
        setamostra("");
        setPercas("");
        setData(new Date());
        setNPedido(0);
    };

    return (
        <div>
            <NavBar/>

            <div className={styles.subtitulo}>
                <h3>Cadastro de Batidas</h3>
            </div>
            <div>
                <Form onSubmit={handleSubmit}>
                    <div>
                        <Row className={styles.rowForm}>
                            <Col md={3}></Col>
                            <Col md={2} className={styles.colForm}>
                                <label className={styles.labelText}>Colaborador</label>
                                <select
                                    required
                                    className={``}
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
                            <Col md={2} className={styles.colForm}>
                                <label className={styles.labelText}>Batidas Normais</label>
                                <input
                                    required
                                    type={"text"}
                                    className={`form-control ${styles.formInput}`}
                                    value={batida_normal}
                                    onChange={(e) => setBatidasNormais(e.target.value)}
                                />
                            </Col>
                            <Col md={2} className={styles.colForm}>
                                <label className={styles.labelText}>Batidas Extras</label>
                                <input
                                    required
                                    type={"text"}
                                    value={batida_extra}
                                    className={`form-control ${styles.formInput}`}
                                    onChange={(e) => setBatidasExtras(e.target.value)}
                                />
                            </Col>
                            <Col md={3}></Col>

                        </Row>
                        <Row className={styles.rowForm}>
                            <Col md={3}></Col>
                            <Col md={2} className={styles.colForm}>
                                <label className={styles.labelText}>amostra</label>
                                <input
                                    required
                                    type={"text"}
                                    value={amostra}
                                    className={`form-control ${styles.formInput}`}
                                    onChange={(e) => setamostra(e.target.value)}
                                />
                            </Col>

                            <Col md={2} className={styles.colForm}>
                                <label className={styles.labelText}>Percas</label>
                                <input
                                    required
                                    type={"text"}
                                    value={perdas}
                                    className={`form-control ${styles.formInput}`}
                                    onChange={(e) => setPercas(e.target.value)}

                                />
                            </Col>
                            <Col md={2} className={styles.colForm}>
                                <label className={styles.labelText}>Meta</label>
                                <input
                                    type={"text"}
                                    value={meta}
                                    className={`form-control ${styles.formInput}`}
                                    onChange={(e) => setMeta(e.target.value)}

                                />
                            </Col>
                            <Col md={3}></Col>
                        </Row>
                        <Row className={styles.rowForm}>
                            <Col md={3}></Col>
                            <Col md={2} className={styles.colForm}>
                                <label className={styles.labelText}>Numero Pedido </label>
                                <input
                                    type={"Number"}
                                    value={nPedido}
                                    className={`form-control ${styles.formInput}`}
                                    onChange={(e) => setNPedido(e.target.value)}

                                />
                            </Col>
                            <Col md={2} className={styles.colForm}>
                                <label className={styles.labelText}>Data</label>
                                <div>
                                    <DatePicker showMonthYearDropdown={""}
                                                selected={data}
                                                className={`form-control ${styles.formInput}`}
                                                onChange={(data) => setData(data)}
                                                dateFormat="dd/MM/yyyy"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row className={styles.rowForm}>
                            <Container className={styles.containerBotoes}>
                                <Button variant="outline-primary" className={styles.buttonForm}
                                        onClick={handleClear}> Limpar </Button>
                                <Button variant="outline-primary" type="submit"
                                        className={styles.buttonForm}> Salvar </Button>
                                <Button variant="outline-primary" className={styles.buttonForm} as={Link}
                                        to='/Home'> Voltar </Button>
                            </Container>

                        </Row>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default CadastroBatidas;