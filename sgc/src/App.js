import { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';
import Calculo from './Calculo';
import CalculoM from './CalculoM';
import Linhas from './Linhas';
import Linhas1500a10000 from './Linhas1500a10000';
import Quantidade100a1000 from './Quantidade100a1000';
import Quantidade1500a10000 from './Quantidade1500a10000';
import logo from './logo.png';

function App() {
  let linhas1 = Linhas();
  let linhas2 = Linhas1500a10000();
  let qtd = Quantidade100a1000();
  let qtd2 = Quantidade1500a10000();
  const [valorMilheiro, setValorMilheiro] = useState(0);
  const [valvula, setValvula] = useState(0);
  const [margem, setMargem] = useState(0.6);
  
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
          <label> Preco de embalagens por cor ate 1000 unidades</label>
        </Col>
        <Col className='custoM1'>
        <label className='labelM'>Preco Embalagem</label>
        <input type='text' className='entradaDados'
        name='valorMilheiro'
        value={valorMilheiro}
        onChange={(e) => setValorMilheiro(e.target.value)}
        width={20}
        height={20}
        ></input>
        </Col>
      </Row>
      <Row>
        <Col className='valvula'>
        <label className='radio' >Valvula</label>
        <input type='radio'
        name='val'
        value={0.46}
        onChange={(e)=>setValvula(e.target.value)}
        />
        <span className='span'>Sim</span>
        <input type='radio'
        name='val'
        value={0}
        onChange={(e)=>setValvula(e.target.value)}/>
        <span className='span'>Não</span>
        </Col>
        <Col className='margem'>
        <label className='radio'>Margem</label>
        <input type='radio'
        name='margem'
        value={0.60}
        onChange={(e)=>setMargem(e.target.value)}/>
        <span className='span'>1</span>
        <input type='radio'
        name='margem'
        value={0.70}
        onChange={(e)=>setMargem(e.target.value)}/>
        <span className='span'>2</span>
        <input type='radio'
        name='margem'
        value={0.85}
        onChange={(e)=>setMargem(e.target.value)}/>
        <span className='span'>3</span>
        </Col>
      </Row>
      
      <Row className='cabecalho'>
        <Col> Produto</Col>
        <Col>Quandidade</Col>
        <Col>1 Cor</Col>
        <Col>2 Cores</Col>
        <Col>3 Cores</Col>
        <Col>4 Cores</Col>
        <Col>5 Cores</Col>
        <Col>6 Cores</Col>
      </Row>
      {linhas1.map((linha) => (
        <Row key={linha} className='linhas'>
          <Col>Emb Personalizado</Col>
          <Col>{qtd[linha]}</Col>
          <Col>R$ {Calculo(1,qtd[linha],CalculoM(qtd[linha],parseInt(valorMilheiro)),margem,valvula)}</Col>
          <Col>R$ {Calculo(2,qtd[linha],CalculoM(qtd[linha],parseInt(valorMilheiro)),margem,valvula)}</Col>
          <Col>R$ {Calculo(3,qtd[linha],CalculoM(qtd[linha],parseInt(valorMilheiro)),margem,valvula)}</Col>
          <Col>R$ {Calculo(4,qtd[linha],CalculoM(qtd[linha],parseInt(valorMilheiro)),margem,valvula)}</Col>
          <Col>R$ {Calculo(5,qtd[linha],CalculoM(qtd[linha],parseInt(valorMilheiro)),margem,valvula)}</Col>
          <Col>R$ {Calculo(6,qtd[linha],CalculoM(qtd[linha],parseInt(valorMilheiro)),margem,valvula)}</Col>
          </Row>
      ))}
      <Row className='custoM'>
      <label> Preco de embalagens por cor de 1500 ate 10000 unidades</label>
      </Row>
      <Row className='cabecalho'>
        <Col> Produto</Col>
        <Col>Quandidade</Col>
        <Col>1 Cor</Col>
        <Col>2 Cores</Col>
        <Col>3 Cores</Col>
        <Col>4 Cores</Col>
        <Col>5 Cores</Col>
        <Col>6 Cores</Col>
      </Row>
      {linhas2.map((linha) => (
        <Row key={linha} className='linhas'>
          <Col>Emb Personalizado</Col>
          <Col>{qtd2[linha]}</Col>
          <Col>R$ {Calculo(1,qtd2[linha],CalculoM(qtd2[linha],valorMilheiro),margem,valvula)}</Col>
          <Col>R$ {Calculo(2,qtd2[linha],CalculoM(qtd2[linha],valorMilheiro),margem,valvula)}</Col>
          <Col>R$ {Calculo(3,qtd2[linha],CalculoM(qtd2[linha],valorMilheiro),margem,valvula)}</Col>
          <Col>R$ {Calculo(4,qtd2[linha],CalculoM(qtd2[linha],valorMilheiro),margem,valvula)}</Col>
          <Col>R$ {Calculo(5,qtd2[linha],CalculoM(qtd2[linha],valorMilheiro),margem,valvula)}</Col>
          <Col>R$ {Calculo(6,qtd2[linha],CalculoM(qtd2[linha],valorMilheiro),margem,valvula)}</Col>
          </Row>
      ))}
    </Container>
    </div>
  )
}

export default App;