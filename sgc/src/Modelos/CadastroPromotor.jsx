import {Navbar} from "react-bootstrap";
import logo from "../imagens/logo.png";
import styles from "../Estilos/CadastroPromotor.module.css";
import {Form} from "reactstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {useState} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from "axios";

function CadastroPromotor (){

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const [data, setData] = useState(hoje);
    const [colaborador, setColaborador] = useState("");
    const [promotor_normal, setPromotorNormais] = useState("");
    const [promotor_extra, setPromotorExtras] = useState("");
    const [user_name, setUserName] = useState("Alan");

    const opcoes = {
        a: 'Gabriela'
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // evita reload da página

        const dados = {
            data,
            colaborador,
            promotor_normal: Number(promotor_normal) || 0,
            promotor_extra: Number(promotor_extra) || 0,
            user_name
        };

        try {
            const response = await axios.post("https://fenix-api-gkyb.onrender.com/Promotor", dados);
            console.log("Salvo com sucesso!", response.data);
            alert("Batida Promotor salva com sucesso!");
            setColaborador("");
            setPromotorNormais("");
            setPromotorExtras("");
            setData(new Date());

        } catch (error) {
            console.error("Erro ao salvar:", error);
            alert("Erro ao salvar batidas do Promotor, Contate o administrador.");
        }
    };

    const handleClear = () => {
        setColaborador("");
        setPromotorNormais("");
        setPromotorExtras("");
        setData(new Date());
    };

    return(
        <div>
            <Navbar className='justify-content-center'>
                <Navbar.Brand>
                    <img src={logo} alt='logotipo fenix' height={100} width={100} />
                </Navbar.Brand>
                <Navbar.Brand>
                    <b className={styles.titulo}>Fênix Soluções em Embalagens</b>
                </Navbar.Brand>
            </Navbar>

            <div className={styles.subtitulo}>
                <h3>Cadastro de Batidas do Promotor</h3>
            </div>
            <div>
                <Form onSubmit={handleSubmit}>
                    <div>
                        <Row className={styles.rowForm} style={{ margin: 0 }}>
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
                                <label className={styles.labelText}>Promotor B. Normais</label>
                                <input
                                    required
                                    type={"text"}
                                    className= {`form-control ${styles.formInput}`}
                                    value={promotor_normal}
                                    onChange={(e) => setPromotorNormais(e.target.value)}
                                />
                            </Col>
                            <Col md={2} className={styles.colForm}>
                                <label className={styles.labelText}>Valvulas Extras</label>
                                <input
                                    required
                                    type={"text"}
                                    value={promotor_extra}
                                    className= {`form-control ${styles.formInput}`}
                                    onChange={(e) => setPromotorExtras(e.target.value)}
                                />
                            </Col>
                            <Col md={3}></Col>

                        </Row>
                        <Row className={styles.rowForm} style={{ margin: 0 }}>
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
                        <Row  style={{ margin: 0 }}>
                            <Container className={styles.containerBotoes}>
                                <Button variant="outline-primary" className={styles.buttonForm} onClick={handleClear}> Limpar </Button>
                                <Button variant="outline-primary" type="submit" className={styles.buttonForm}> Salvar </Button>
                                <Button variant="outline-primary"  className={styles.buttonForm} as={Link} to='/Home'> Voltar </Button>
                            </Container>

                        </Row>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default CadastroPromotor;