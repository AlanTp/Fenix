import { useEffect, useState } from 'react';
import { Container, Navbar,Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import VendaDireta from '../Calculos/CalculoVendaDireta.jsx';
import '../Estilos/App.css';
import Linhas from '../Modelos/Linhas.jsx';
import Linhas1500a10000 from '../Modelos/Linhas1500a10000.jsx';
import Quantidade100a1000 from '../Modelos/Quantidade100a1000.jsx';
import Quantidade1500a10000 from '../Modelos/Quantidade1500a10000.jsx';
import logo from '../imagens/logo.png';
import { Link } from 'react-router-dom';


function Vendas (){
    let linhas1 = Linhas();
    let linhas2 = Linhas1500a10000();
    let qtd = Quantidade100a1000();
    let qtd2 = Quantidade1500a10000();
    const [Valvula, setValvula] = useState(0);
    const [Promotor, setPromotor] = useState(0);
    const [Tela, setTela] = useState(0);
    useEffect(()=> {

    }, []);

    return (
        <div>
        <Navbar className='justify-content-center' >
        <Navbar.Brand><img src={logo} alt='logotipo fenix' height={100} width={100}/></Navbar.Brand>
        <Navbar.Brand><b className='titulo'>Fênix Soluções em Embalagens</b></Navbar.Brand>
        </Navbar>

        <Container>
            <Row>
                <Col className='custoM'>
                <label> Preço de embalagens por cor ate 1.000 unidades</label>
                </Col>
            </Row>
            
            <Row>
                <Col className='opcoes'>
                <label className='label'>Tela:</label>
                <input type='radio'
                    name='tela'
                    value={70}
                    onChange={(e)=>setTela(e.target.value)}/>
                    <span className='span' >1</span>
                <input type='radio'
                    name='tela'
                    value={140}
                    onChange={(e)=>setTela(e.target.value)}/>
                    <span className='span' >2</span>
                <input type='radio'
                    name='tela'
                    value={210}
                    onChange={(e)=>setTela(e.target.value)}/>
                    <span className='span'  >3</span>
                <input type='radio'
                    name='tela'
                    value={280}
                    onChange={(e)=>setTela(e.target.value)}/>
                    <span className='span' >4</span>
                <input type='radio'
                    name='tela'
                    value={350}
                    onChange={(e)=>setTela(e.target.value)}/>
                    <span className='span' >5</span>
                <input type='radio'
                    name='tela'
                    value={420}
                    onChange={(e)=>setTela(e.target.value)}/>
                    <span className='span' >6</span>
                <input type='radio'
                    name='tela'
                    value={0}
                    onChange={(e)=>setTela(e.target.value)}/>
                    <span className='span' >Sem</span>
                </Col>
                <Col className='opcoes'>
                <label className='label' >Promotor:</label>
                <input type='radio'
                    name='promotor'
                    value={0.25}
                    onChange={(e)=>setPromotor(e.target.value)}/>
                    <span className='span' >Frente</span>
                <input type='radio'
                    name='promotor'
                    value={0.37}
                    onChange={(e)=>setPromotor(e.target.value)}/>
                    <span className='span' >Verso</span>
                <input type='radio'
                    name='promotor'
                    value={0}
                    onChange={(e)=>setPromotor(e.target.value)}/>
                    <span className='span' >Sem</span>
                </Col>
                <Col className='opcoes'>
                <label className='label' >Valvula:</label>
                <input type='radio'
                    name='Valvula'
                    value={0.35}
                    onChange={(e)=>setValvula(e.target.value)}/>
                    <span className='span' >Sim</span>
                <input type='radio'
                    name='Valvula'
                    value={0}
                    onChange={(e)=>setValvula(e.target.value)}/>
                    <span className='span' > Não</span>
                </Col>
            </Row>
            
            <Row className='cabecalho'>
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
                <Row key={linha} className='linhas'>
                <Col>Emb Personalizada</Col>
                <Col>{qtd[linha]}</Col>
                <Col>R$ {VendaDireta(1,qtd[linha],Tela,Promotor,Valvula)}</Col>
                <Col>R$ {VendaDireta(2,qtd[linha],Tela,Promotor,Valvula)}</Col>
                <Col>R$ {VendaDireta(3,qtd[linha],Tela,Promotor,Valvula)}</Col>
                <Col>R$ {VendaDireta(4,qtd[linha],Tela,Promotor,Valvula)}</Col>
                <Col>R$ {VendaDireta(5,qtd[linha],Tela,Promotor,Valvula)}</Col>
                <Col>R$ {VendaDireta(6,qtd[linha],Tela,Promotor,Valvula)}</Col>
                </Row>
            ))}
            <Row className='custoM'>
            <label> Preço de embalagens por cor de 1.500 ate 10.000 unidades</label>
            </Row>
                <Row className='cabecalho'>
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
                    <Row key={linha} className='linhas'>
                    <Col>Emb Personalizada</Col>
                    <Col>{qtd2[linha]}</Col>
                    <Col>R$ {VendaDireta(1,qtd2[linha],Tela,Promotor,Valvula)}</Col>
                    <Col>R$ {VendaDireta(2,qtd2[linha],Tela,Promotor,Valvula)}</Col>
                    <Col>R$ {VendaDireta(3,qtd2[linha],Tela,Promotor,Valvula)}</Col>
                    <Col>R$ {VendaDireta(4,qtd2[linha],Tela,Promotor,Valvula)}</Col>
                    <Col>R$ {VendaDireta(5,qtd2[linha],Tela,Promotor,Valvula)}</Col>
                    <Col>R$ {VendaDireta(6,qtd2[linha],Tela,Promotor,Valvula)}</Col>
                    </Row>
                ))}
        </Container>
        <div className='Botao_Voltar'>
        <Button variant="outline-primary"><Link to ='/' className='link_voltar'>Home</Link></Button>
        </div>
        </div>
    )
}

export default Vendas;