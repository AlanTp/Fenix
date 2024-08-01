import { useEffect, useState } from 'react';
import { Button, Navbar } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Calculo from '../Calculos/Calculo.jsx';
import CalculoM from '../Calculos/CalculoM.jsx';
import '../Estilos/App.css';
import Linhas from '../Modelos/Linhas.jsx';
import Linhas1500a10000 from '../Modelos/Linhas1500a10000.jsx';
import Quantidade100a1000 from '../Modelos/Quantidade100a1000.jsx';
import Quantidade1500a10000 from '../Modelos/Quantidade1500a10000.jsx';
import logo from '../imagens/logo.png';

function App() {
  let linhas1 = Linhas();
  let linhas2 = Linhas1500a10000();
  let qtd = Quantidade100a1000();
  let qtd2 = Quantidade1500a10000();
  const [valorMilheiro, setValorMilheiro] = useState(0);
  const [valvula, setValvula] = useState(0);
  const [margem, setMargem] = useState(1);
  const [arte, setArte] = useState(0);
  const [margemSilk, setMargemSilk] = useState(0.6)
  
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
        <Col className='opcoes'>
        <label className='label' >Valvula</label>
        <input type='radio'
        name='val'
        value={0.465}
        onChange={(e)=>setValvula(e.target.value)}
        />
        <span className='span'>Sim</span>
        <input type='radio'
        name='val'
        value={0}
        onChange={(e)=>setValvula(e.target.value)}/>
        <span className='span'>Não</span>
        </Col>

        <Col className='opcoes_input'>
        <label className='preco_emb'>Preço Embalagem</label>
        <input type='text' className='entradaDados'
        name='valorMilheiro'
        value={valorMilheiro}
        onChange={(e) => setValorMilheiro(e.target.value)}
        
        />
        </Col>

        <Col className='opcoes'>
        <label className='label'>Margem</label>
        <input type='radio'
        name='margem'
        value={1}
        onChange={(e)=>setMargem(e.target.value)}/>
        <span className='span'>0</span>
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
      <Row>
      <Col className='opcoes'>
        <label className='label' >Arte</label>
        <input type='radio'
        name='arte'
        value={20}
        onChange={(e)=>setArte(e.target.value)}
        />
        <span className='span'>Sim</span>
        <input type='radio'
        name='arte'
        value={0}
        onChange={(e)=>setArte(e.target.value)}/>
        <span className='span'>Não</span>
        </Col>
        <Col className='opcoes'>
        <label className='label'>Margem Silk</label>
        <input type='radio'
        name='margemS'
        value={0.60}
        onChange={(e)=>setMargemSilk(e.target.value)}/>
        <span className='span'>1</span>
        <input type='radio'
        name='margemS'
        value={0.70}
        onChange={(e)=>setMargemSilk(e.target.value)}/>
        <span className='span'>2</span>
        <input type='radio'
        name='margemS'
        value={0.85}
        onChange={(e)=>setMargemSilk(e.target.value)}/>
        <span className='span'>3</span>
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
          <Col>Emb Personalizado</Col>
          <Col>{qtd[linha]}</Col>
          <Col>R$ {Calculo(1,qtd[linha],CalculoM(1,qtd[linha]),margem,valvula,valorMilheiro,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(2,qtd[linha],CalculoM(2,qtd[linha]),margem,valvula,valorMilheiro,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(3,qtd[linha],CalculoM(3,qtd[linha]),margem,valvula,valorMilheiro,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(4,qtd[linha],CalculoM(4,qtd[linha]),margem,valvula,valorMilheiro,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(5,qtd[linha],CalculoM(5,qtd[linha]),margem,valvula,valorMilheiro,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(6,qtd[linha],CalculoM(6,qtd[linha]),margem,valvula,valorMilheiro,arte,margemSilk)}</Col>
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
          <Col>Emb Personalizado</Col>
          <Col>{qtd2[linha]}</Col>
          <Col>R$ {Calculo(1,qtd2[linha],CalculoM(1,qtd2[linha]),margem,valvula,valorMilheiro,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(2,qtd2[linha],CalculoM(2,qtd2[linha]),margem,valvula,valorMilheiro,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(3,qtd2[linha],CalculoM(3,qtd2[linha]),margem,valvula,valorMilheiro,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(4,qtd2[linha],CalculoM(4,qtd2[linha]),margem,valvula,valorMilheiro,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(5,qtd2[linha],CalculoM(5,qtd2[linha]),margem,valvula,valorMilheiro,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(6,qtd2[linha],CalculoM(6,qtd2[linha]),margem,valvula,valorMilheiro,arte,margemSilk)}</Col>
          </Row>
      ))}
    </Container>
      <div className='Botao_Voltar'>
        <Button variant="outline-primary"><Link to ='/' className='link_voltar'>Home</Link></Button>
      </div>

    </div>
  )
}

export default App;