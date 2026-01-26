import {Navbar} from "react-bootstrap";
import logo from "../imagens/logo.png";
import Container from "react-bootstrap/Container";
import styles from "../Estilos/Login.module.css";
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import {Spinner} from "reactstrap";

function Login() {
        const [login, setLogin] = useState("");
        const [senha, setSenha] = useState("");
        const [erro, setErro] = useState("");
        const navigate = useNavigate();
        const [loading, setLoading] = useState(false);

        const handleLogin = async (e) => {
            e.preventDefault();
            setErro("");

            try {
                setLoading(true);

                const response = await fetch("https://fenix-api-gkyb.onrender.com/Login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({login, senha}),
                });

                const data = await response.json();

                if (!response.ok) {
                    setErro(data.erro || "Falha ao fazer login");
                    return;
                }

                // Armazena token e nome
                localStorage.setItem("token", data.token);
                localStorage.setItem("usuario", data.nome);

                // Redireciona pra home ou dashboard
                navigate("/home");
            } catch (error) {
                console.error("Erro na requisição:", error);
                setErro("Erro de conexão com o servidor");
            }finally {
                setLoading(false);
            }
        }

    return(
        <div >
            <Navbar md={3} className='justify-content-center' >
                <Navbar.Brand><img src={logo} alt='logotipo fenix' height={100} width={100}/></Navbar.Brand>
                <Navbar.Brand><b className={styles.titulo}>Fênix Soluções em Embalagens</b></Navbar.Brand>
            </Navbar>

            <Container className={styles.loginBox}>
                <form onSubmit={handleLogin}>
                    <div className={styles.cardLogin}>
                        <Row className="mb-3">
                            <Col md={12}>
                                <label className={styles.labelLogin}>Login</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={login}
                                    onChange={(e) => setLogin(e.target.value)}
                                    required/>
                            </Col>

                        </Row>
                        <Row className="mb-3">
                            <Col md={12}>
                                <label className={styles.labelLogin}>Senha</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    required/>
                            </Col>

                        </Row>
                        <Row >
                            <Col md={12} className={styles.buttonSalva}>
                                <button type="submit" className="btn btn-primary"
                                        disabled={loading}>
                                    {loading ? (
                                        <Spinner animation="border" size="sm" />
                                    ) : (
                                        "Entrar"
                                    )}
                                </button>
                            </Col>
                        </Row>
                        {erro && (
                            <Row className="mt-3">
                                <Col>
                                    <div className="text-danger text-center">{erro}</div>
                                </Col>
                            </Row>
                        )}
                    </div>
                </form>
            </Container>
        </div>
    )
}

export default Login;