import styles from "../Estilos/CadastroValvulas.module.css";
import {Form} from "reactstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {Link, useNavigate} from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from "axios";
import NavBar from '../Modelos/NavBar';

function CadastroValvulas() {

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const [data, setData] = useState(hoje);
    const [colaborador, setColaborador] = useState("");
    const [valvula_normal, setValvulasNormais] = useState("");
    const [valvula_extra, setValvulasExtras] = useState("");
    const [user_name] = useState("Alan");
    const navigate = useNavigate();

    const opcoes = {
        a: 'Geisiane',
        b: 'Mailon',
        c: 'Leticia',
        d: 'Aquiles',
        e: 'Gabriela'
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // evita reload da página

        const token = localStorage.getItem("token");

        const dados = {
            data,                // cuidado: no banco pode esperar YYYY-MM-DD, talvez precise formatar
            colaborador,
            valvula_normal: Number(valvula_normal) || 0,
            valvula_extra: Number(valvula_extra) || 0,
            user_name
        };

        try {
            const response = await axios.post("https://fenix-api-gkyb.onrender.com/Valvulas", dados,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

            console.log("Salvo com sucesso!", response.data);
            alert("Valvula salva com sucesso!");
            setColaborador("");
            setValvulasNormais("");
            setValvulasExtras("");
            setData(new Date());

        } catch (error) {
            console.error("Erro ao salvar:", error);

            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                alert("Sessão expirada. Faça login novamente.");
                localStorage.removeItem("token");
                navigate("/Login");
            } else {
                alert("Erro ao salvar batida. Contate o administrador.");
            }
        }
    };

    const handleClear = () => {
        setColaborador("");
        setValvulasNormais("");
        setValvulasExtras("");
        setData(new Date());
    };

    return (
        <div>
            <NavBar/>

            <div className={styles.subtitulo}>
                <h3>Cadastro de Valvulas</h3>
            </div>
            <div>
                <Form onSubmit={handleSubmit}>
                    <div>
                        <Row className={styles.rowForm} style={{margin: 0}}>
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
                                <label className={styles.labelText}>Valvulas Normais</label>
                                <input
                                    required
                                    type={"text"}
                                    className={`form-control ${styles.formInput}`}
                                    value={valvula_normal}
                                    onChange={(e) => setValvulasNormais(e.target.value)}
                                />
                            </Col>
                            <Col md={2} className={styles.colForm}>
                                <label className={styles.labelText}>Valvulas Extras</label>
                                <input
                                    required
                                    type={"text"}
                                    value={valvula_extra}
                                    className={`form-control ${styles.formInput}`}
                                    onChange={(e) => setValvulasExtras(e.target.value)}
                                />
                            </Col>
                            <Col md={3}></Col>

                        </Row>
                        <Row className={styles.rowForm} style={{margin: 0}}>
                            <Col md={3}></Col>
                            <Col md={2}></Col>
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
                        <Row style={{margin: 0}}>
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

export default CadastroValvulas;