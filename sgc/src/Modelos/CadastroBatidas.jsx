import {Navbar} from "react-bootstrap";
import logo from "../imagens/logo.png";
import styles from "../Estilos/CadastroBatidas.module.css";
import Row from "react-bootstrap/Row";
import {Form} from "reactstrap";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";

function CadastroBatidas () {

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const [data, setData] = useState(hoje);
    const [colaborador, setColaborador] = useState("");
    const [batida_normal, setBatidasNormais] = useState("");
    const [batida_extra, setBatidasExtras] = useState("");
    const [meta, setMeta] = useState(40000);
    const [amostra, setamostra] = useState("");
    const [perdas, setPercas] = useState("");
    const [user_name, setUserName] = useState("Alan");

    const opcoes = {
        a: 'Aquiles',
        b: 'Rodrigo',
        c: 'Tunico'
    };


    const handleSubmit = async (e) => {
        e.preventDefault(); // evita reload da página

        const dados = {
            data,                // cuidado: no banco pode esperar YYYY-MM-DD, talvez precise formatar
            colaborador,
            batida_normal: Number(batida_normal) - Number(perdas) || 0,
            batida_extra: Number(batida_extra) || 0,
            meta: Number(meta) || 0,
            amostra: Number(amostra) || 0,
            perdas: Number(perdas) || 0,
            user_name
        };

        try {
            const response = await axios.post("https://fenix-api-gkyb.onrender.com/Batidas", dados);
            console.log("Salvo com sucesso!", response.data);
            alert("Batida salva com sucesso!");
            setColaborador("");
            setBatidasNormais("");
            setBatidasExtras("");
            setMeta(40000);
            setamostra('');
            setPercas("");
            setData(new Date());

        } catch (error) {
            console.error("Erro ao salvar:", error);
            alert("Erro ao salvar batida, Contate o administrador.");
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
                                  className= {`form-control ${styles.formInput}`}
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
                                  className= {`form-control ${styles.formInput}`}
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
                                  className= {`form-control ${styles.formInput}`}
                                  onChange={(e) => setamostra(e.target.value)}
                              />
                          </Col>

                          <Col md={2} className={styles.colForm}>
                              <label className={styles.labelText}>Percas</label>
                              <input
                                  required
                                  type={"text"}
                                  value={perdas}
                                  className= {`form-control ${styles.formInput}`}
                                  onChange={(e) => setPercas(e.target.value)}

                              />
                          </Col>
                          <Col md={2} className={styles.colForm}>
                              <label className={styles.labelText}>Meta</label>
                              <input
                                  type={"text"}
                                  value={meta}
                                  className= {`form-control ${styles.formInput}`}
                                  onChange={(e) => setMeta(e.target.value)}

                              />
                          </Col>
                          <Col md={3}></Col>
                      </Row>
                      <Row className={styles.rowForm}>
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
                      <Row className={styles.rowForm}>
                          <Container className={styles.containerBotoes}>
                              <Button variant="outline-primary" className={styles.buttonForm} onClick={handleClear}> Limpar </Button>
                              <Button variant="outline-primary" type="submit" className={styles.buttonForm}> Salvar </Button>
                              <Button variant="outline-primary"  className={styles.buttonForm} as={Link} to='/'> Voltar </Button>
                          </Container>

                      </Row>
                  </div>
              </Form>
          </div>
        </div>
    )
}

export default CadastroBatidas;