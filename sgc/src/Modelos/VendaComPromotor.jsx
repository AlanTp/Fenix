import { useEffect, useState } from 'react';
import { Button, Navbar } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Calculo from '../Calculos/Calculo.jsx';
import CalculoComPromotor from '../Calculos/CalculoComPromotor.jsx';
import '../Estilos/App.css';
import Linhas from '../Modelos/Linhas.jsx';
import Linhas1500a10000 from '../Modelos/Linhas1500a10000.jsx';
import Quantidade100a1000 from '../Modelos/Quantidade100a1000.jsx';
import Quantidade1500a10000 from '../Modelos/Quantidade1500a10000.jsx';
import logo from '../imagens/logo.png';

function VendaComPromotor() {
  let linhas1 = Linhas();
  let linhas2 = Linhas1500a10000();
  let qtd = Quantidade100a1000();
  let qtd2 = Quantidade1500a10000();
  const [PrcEmb, setPrcEmb] = useState(0);
  const [valvula, setValvula] = useState(0);
  const [margem, setMargem] = useState(1);
  const [arte, setArte] = useState(0);
  const [margemSilk, setMargemSilk] = useState(1)
  
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
            {/* Valvula */}
            <Col>
                <div className="input_group">
                    <label>Valvula</label>
                    <select
                        className="entradaDados"
                        value={valvula}
                        onChange={(e) => setValvula(Number(e.target.value))}
                    >
                        <option value={0.495}>Sim</option>
                        <option value={0}>Não</option>
                    </select>
                </div>
            </Col>

            {/* Arte */}
            <Col>
                <div className="input_group">
                    <label>Arte</label>
                    <select
                        className="entradaDados"
                        value={arte}
                        onChange={(e) => setArte(Number(e.target.value))}
                    >
                        <option value={50}>Sim</option>
                        <option value={0}>Não</option>
                    </select>
                </div>
            </Col>

            {/* Preço Embalagem */}
            <Col>
                <div className="input_group">
                    <label>Preço Emb.</label>
                    <input
                        type="number"
                        className="opcoes_input"
                        value={PrcEmb}
                        onChange={(e) => setPrcEmb(Number(e.target.value))}
                    />
                </div>
            </Col>

            {/* Margem Embalagem */}
            <Col>
                <div className="input_group">
                    <label>Margem Emb.</label>
                    <select
                        className="entradaDados"
                        value={margem}
                        onChange={(e) => setMargem(Number(e.target.value))}
                    >
                        <option value={1}>0%</option>
                        <option value={0.50}>50%</option>
                        <option value={0.60}>40%</option>
                        <option value={0.70}>30%</option>
                    </select>
                </div>
            </Col>

            {/* Margem Silk */}
            <Col>
                <div className="input_group">
                    <label>Margem Silk</label>
                    <select
                        className="entradaDados"
                        value={margemSilk}
                        onChange={(e) => setMargemSilk(Number(e.target.value))}
                    >
                        <option value={1}>0%</option>
                        <option value={0.50}>50%</option>
                        <option value={0.60}>40%</option>
                        <option value={0.70}>30%</option>
                    </select>
                </div>
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
          <Col>R$ {Calculo(qtd[linha],CalculoComPromotor(1,qtd[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(qtd[linha],CalculoComPromotor(2,qtd[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(qtd[linha],CalculoComPromotor(3,qtd[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(qtd[linha],CalculoComPromotor(4,qtd[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(qtd[linha],CalculoComPromotor(5,qtd[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(qtd[linha],CalculoComPromotor(6,qtd[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
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
          <Col>R$ {Calculo(qtd2[linha],CalculoComPromotor(1,qtd2[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(qtd2[linha],CalculoComPromotor(2,qtd2[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(qtd2[linha],CalculoComPromotor(3,qtd2[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(qtd2[linha],CalculoComPromotor(4,qtd2[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(qtd2[linha],CalculoComPromotor(5,qtd2[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
          <Col>R$ {Calculo(qtd2[linha],CalculoComPromotor(6,qtd2[linha]),margem,valvula,PrcEmb,arte,margemSilk)}</Col>
          </Row>
      ))}
    </Container>
      <div className='Botao_Voltar'>
        <Button variant="outline-primary"
            className='link_voltar'
            as={Link}
            to ='/'>
            Home
        </Button>
      </div>

    </div>
  )
}

export default VendaComPromotor;