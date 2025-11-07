import React from "react";
import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import styles from '../Estilos/Home.module.css';
import logo from '../imagens/logo.png';

function Home (){

    return(
        <div >
            <Navbar className='justify-content-center' >
            <Navbar.Brand><img src={logo} alt='logotipo fenix' height={100} width={100}/></Navbar.Brand>
            <Navbar.Brand><b className={styles.titulo}>Fênix Soluções em Embalagens</b></Navbar.Brand>
            </Navbar>

        <Container>
            <div className={styles.imagem_central}>
            <img src={logo} alt='Imagem inicial' height={300} width={300}/>
            </div>
        </Container>
            <Container className={styles.botoes_alinhamento}>
                <Row>
                    <Col><Button variant="outline-primary"
                     className={styles.Botao}
                     as={Link}
                     to ='/VendaComPromotor'>Venda Com Promotor</Button>
                    </Col>
                    <Col><Button variant="outline-primary"
                     className={styles.Botao}
                     as={Link}
                     to ='/VendaSemPromotor'>Venda Sem Promotor</Button>
                    </Col>
                    <Col><Button variant="outline-primary"
                                 className={styles.Botao}
                                 as={Link}
                                 to ='/Batidas'>Batidas</Button>
                    </Col>
                    <Col><Button variant="outline-primary"
                                 className={styles.Botao}
                                 as={Link}
                                 to ='/CadastroBatidas'>Cadastrar Batidas</Button>
                    </Col>

                    <Col><Button variant="outline-primary"
                                 className={styles.Botao}
                                 as={Link}
                                 to ='/Valvulas'>Valvulas</Button>
                    </Col>


                </Row>

                
            </Container>
            <Container className={styles.botoes_alinhamento}>
                <Row>
                    <Col><Button variant="outline-primary"
                                 className={styles.Botao}
                                 as={Link}
                                 to ='/CadastroValvulas'>Cadastro de Valvulas</Button>
                    </Col>
                    <Col><Button variant="outline-primary"
                                 className={styles.Botao}
                                 as={Link}
                                 to ='/Promotor'>Batidas Promotor</Button>
                    </Col>

                    <Col><Button variant="outline-primary"
                                 className={styles.Botao}
                                 as={Link}
                                 to ='/CadastroPromotor'>Cadastro B. Promotor</Button>
                    </Col>
                </Row>
            </Container>

        </div>
        
    )

}

export default Home;