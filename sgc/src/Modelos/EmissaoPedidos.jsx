import styles from "../Estilos/EmissaoPedido.module.css";
import {
    Button,
    Form,
    FormControl,
    FormGroup,
    FormLabel,
    FormSelect,
    InputGroup,
    Nav,
    Navbar,
    NavDropdown,
    Table
} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import React, {useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Vendedores from "../Enum/Vendedores";
import vendedores from "../Enum/Vendedores";
import StatusPedido from "../Enum/StatusPedido";
import TipoUnidade from "../Enum/TipoUnidade";
import axios from "axios";

function EmissaoPedidos() {
    const hoje = new Date().toISOString().split("T")[0];
    const [dataEmissao, setDataEmissao] = useState(hoje);
    const [dataEntrega, setDataEntrega] = useState(hoje);
    const [qtd, setQtd] = useState(0);
    const [qtdComissao, setQtdComissao] = useState(0);
    const [tipoPedido, setTipoPedido] = useState("novo");
    const [valvula, setValula] = useState("sim");
    const [promotor, setPromotor] = useState("nao");
    const [frente, setFrente] = useState("");
    const [verso, setVerso] = useState("");
    const [estoque, setEstoque] = useState("fenix");
    const [arte, setArte] = useState("");
    const [vendedor, setVendedor] = useState("");
    const [status, setStatus] = useState("");
    const [tipoUnidade, setTipoUnidae] = useState("");
    const [itens, setItens] = useState([]);
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [cliente, setCliente] = useState("");
    const [erros, setErros] = useState({});
    const [tentouEnviar, setTentouEnviar] = useState(false);
    const [indiceEditando, setIndiceEditando] = useState(null);
    const [tipoPagamento, setTipoPagamento] = useState("");
    const [tipoFrete, setTipoFrete] = useState("");
    const [cidade, setCidade] = useState("");
    const [cep, setCep] = useState("");
    const [loading, setLoading] = useState(true);


    const handleAdicionar = () => {
        if (!descricao || !preco || !quantidade || !tipoUnidade) {
            return alert("Preencha todos os campos do item");
        }

        const item = {
            descricao,
            preco: Number(preco),
            quantidade: Number(quantidade),
            tipoUnidade
        };

        if (indiceEditando !== null) {
            // EDITAR
            setItens(prev =>
                prev.map((i, idx) => (idx === indiceEditando ? item : i))
            );
            setIndiceEditando(null);
        } else {
            // ADICIONAR
            setItens(prev => [...prev, item]);
        }

        // limpa campos
        setDescricao("");
        setPreco("");
        setQuantidade("");
        setTipoUnidae("");
    };

    const calcularTotalItem = (item) => {
        if (item.tipoUnidade === "1") {
            return item.quantidade * item.preco;
        }
        if (item.tipoUnidade === "2") {
            return (item.quantidade / 1000) * item.preco;
        }
        return 0;
    };
    const totalGeral = itens.reduce((total, item) => total + calcularTotalItem(item), 0);
    const formatarMoeda = (valor) => {
        const numero = Number(valor) || 0;

        return numero.toLocaleString("pt-BR", {
            style: "currency", currency: "BRL"
        });
    };
    const calcularTotalItemAtual = () => {
        const p = Number(preco);
        const q = Number(quantidade);

        if (!p || !q || !tipoUnidade) return 0;

        // 1 = Unidade
        if (tipoUnidade === "1") {
            return q * p;
        }

        // 2 = Milheiro
        if (tipoUnidade === "2") {
            return(q / 1000) * p;
        }

        return 0;
    };

    const validaEnvio = () => {
        const erros = {};

        if (!cliente) erros.cliente = "Cliente  obrigatório";
        if (!frente && !verso) {
            erros.silk = "Obrigatório marcar Frente ou Verso";
        }
        if (!qtd) erros.qtdBatidas = "Inserir quantidade de batidas!";
        if (!arte) erros.arte = "Insira os dados da arte!";
        if (!vendedor) erros.vendedor = "Selecione um Vendedor!";
        if (!status) erros.status = "Selecione um status!";
        if (!qtdComissao) erros.qtdComissao = "Inserir Comissão";
        if (itens.length === 0) erros.itens = "Insira um iten no pedido!";
        if (!tipoPagamento) erros.tipoPagamento = "Insira um tipo de Pagamento.";
        if (!tipoFrete) erros.tipoFrete = "Insira o Frete!";
        if (!cidade) erros.cidade = "Insira a cidade de destino!";
        if (!cep) erros.cep = "Insira o cep da cidade";

        setErros(erros);

        return Object.keys(erros).length === 0;

    }


    const Enviar = async (e) => {
        e.preventDefault();

        setTentouEnviar(true);
        setLoading(false);

        if (!validaEnvio()) {
            return;
        }
        const vendendorSelecionado = vendedores.find((v) =>
            v.value === vendedor);
        const vendedorName = vendendorSelecionado.label;

        let silk = "";
        if (frente === "frente" && verso === "verso") {
            silk = "Frente e Verso";
        }
        if (verso === "verso") {
            silk = "Verso";
        }
        if (frente === "frente") {
            silk = "Frente";
        }
        const statusSelecionado = StatusPedido.find((v) =>
            v.value === status);
        const statusLabel = statusSelecionado.label;

        const usuario = localStorage.getItem("usuario");

        const pedido = {
            cliente,
            dataEmissao,
            dataEntrega,
            tipoPedido,
            valvula,
            promotor,
            silk: silk,
            quantidadeBatidas: qtd,
            estoque,
            arte,
            vendedor: vendedorName,
            status: statusLabel,
            comissao: qtdComissao,
            tipoPagamento:tipoPagamento,
            tipoFrete,
            cidade: "Tres Pontas",
            cep: "37190000",
            totalGeral,
            usuario,
            ulimaAlteracao: dataEmissao,
            itens: itens.map(item => ({
                descricao: item.descricao,
                preco: item.preco,
                quantidade: item.quantidade,
                tipoUnidade: item.tipoUnidade,
                total: calcularTotalItem(item)
            }))
        };
        try{
            const token =localStorage.getItem("token");

            await axios.post(
                "https://fenix-api-gkyb.onrender.com/Pedidos",
                pedido,
                {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            alert("Pedido enviado com sucesso!");

            setCliente("");
            setTipoPedido("novo");
            setValula("sim");
            setPromotor("nao");
            setFrente("");
            setVerso("");
            setQtd(0);
            setEstoque("fenix");
            setArte("");
            setVendedor("");
            setQtdComissao(0);
            setStatus("");
            setTipoPagamento("");
            setTipoFrete("");
            setCidade("");
            setCep("");
            setItens([]);
            setLoading(true);


        }catch (e) {
            console.error("Erro ao enviar pedido:", e);
        }
    };

    const removerItem = (index) => {
        setItens(prev => prev.filter((_, i) => i !== index));
    };

    const editarItem = (index) => {
        const item = itens[index];

        setDescricao(item.descricao);
        setPreco(item.preco);
        setQuantidade(item.quantidade);
        setTipoUnidae(item.tipoUnidade);

        setIndiceEditando(index);
    };

    return (<div className={styles.page}>
        <Navbar className={`${styles.navbar} justify-content-left`}>

            <Navbar.Brand><b className={styles.titulo}>Fênix Soluções em Embalagens</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="menu-principal"/>

            <Navbar.Collapse id="menu-principal">
                <Nav>
                    <LinkContainer to="/Home" className="me-3">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>


                    <NavDropdown title='Vendas' id='vendas' className="me-3">
                        <LinkContainer to='/VendaComPromotor'>
                            <NavDropdown.Item>Vendas com promotor</NavDropdown.Item>
                        </LinkContainer>

                        <LinkContainer to='/VendaSemPromotor'>
                            <NavDropdown.Item>Vendas sem promotor</NavDropdown.Item>
                        </LinkContainer>


                    </NavDropdown>
                    <NavDropdown title='Batidas' id='batidas' className="me-3">
                        <LinkContainer to='/CadastroBatidas'>
                            <NavDropdown.Item>Cadastrar Batidas</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/Batidas'>
                            <NavDropdown.Item>Relatorio Batidas</NavDropdown.Item>
                        </LinkContainer>


                    </NavDropdown>
                    <NavDropdown title='Valvulas' id='valvulas' className="me-3">
                        <LinkContainer to='/CadastroValvulas'>
                            <NavDropdown.Item>Cadastro Batidas Valvulas</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/Valvulas'>
                            <NavDropdown.Item>Relatorio Batidas Valvulas</NavDropdown.Item>
                        </LinkContainer>

                    </NavDropdown>
                    <NavDropdown title='Pedidos' id='pedidos' className="me-3">
                        <LinkContainer to='/EmissaoPedidos'>
                            <NavDropdown.Item>Pedidos</NavDropdown.Item>
                        </LinkContainer>

                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>

        </Navbar>


        <Container fluid className="mt-3">

            <div className={styles.divSub}>
                <h3>Emissão de Pedidos</h3>
            </div>
            <Form onSubmit={Enviar}>
                <Row>
                    <Col md={8}>
                        <FormGroup>
                            <FormLabel>Cliente:</FormLabel>
                            <FormControl
                                type="text"
                                placeholder="Nome do cliente"
                                value={cliente}
                                className={styles.formControl}
                                isInvalid={tentouEnviar && !!erros.cliente}
                                onChange={(e) => setCliente(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {erros.cliente}
                            </Form.Control.Feedback>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <FormLabel>Data Emissão Pedido:</FormLabel>
                            <FormControl
                                type="date"
                                required
                                className={styles.dataEmissao}
                                value={dataEmissao}
                                onChange={(e) => setDataEmissao(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <FormLabel>Data Entrega Pedido:</FormLabel>
                            <FormControl
                                type="date"
                                required
                                className={styles.dataEmissao}
                                value={dataEntrega}
                                onChange={(e) => setDataEntrega(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <FormLabel className={styles.tipoPedido}>Tipo do Pedido:</FormLabel>

                            <Form.Check
                                type="radio"
                                label="Repetição sem alteração"
                                name="tipoPedido"
                                value={"semAlteracao"}
                                checked={tipoPedido === "semAlteracao"}
                                onChange={(e) => setTipoPedido(e.target.value)}
                            />
                            <Form.Check
                                type="radio"
                                label="Repetição com alteração"
                                name="tipoPedido"
                                value={"comAlteracao"}
                                checked={tipoPedido === "comAlteracao"}
                                onChange={(e) => setTipoPedido(e.target.value)}
                            />
                            <Form.Check
                                type="radio"
                                label="Pedido Novo"
                                name="tipoPedido"
                                value={"novo"}
                                checked={tipoPedido === "novo"}
                                onChange={(e) => setTipoPedido(e.target.value)}
                            />
                        </FormGroup>
                    </Col>

                    <Col md={2}>
                        <FormGroup>
                            <FormLabel className={styles.formControl}>Valvula</FormLabel>
                        </FormGroup>
                        <Form.Check
                            inline
                            type={"radio"}
                            label={"Não"}
                            name="valvula"
                            value={"sim"}
                            checked={valvula === "sim"}
                            onChange={(e) => setValula(e.target.value)}
                        />
                        <Form.Check
                            inline
                            type={"radio"}
                            label={"Sim"}
                            name="valvula"
                            value={"nao"}
                            checked={valvula === "nao"}
                            onChange={(e) => setValula(e.target.value)}

                        />
                    </Col>

                    <Col md={2}>
                        <FormGroup>
                            <FormLabel className={styles.formControl}>Promotor</FormLabel>
                        </FormGroup>
                        <Form.Check
                            inline
                            type={"radio"}
                            label={"Não"}
                            name={"promotor"}
                            value={"nao"}
                            checked={promotor === "nao"}
                            onChange={(e) => setPromotor(e.target.value)}
                        />
                        <Form.Check
                            inline
                            type={"radio"}
                            label={"Sim"}
                            name={"promotor"}
                            value={"sim"}
                            checked={promotor === "sim"}
                            onChange={(e) => setPromotor(e.target.value)}
                        />
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <FormLabel className={styles.formControl}> Silk</FormLabel>
                        </FormGroup>
                        <FormGroup>
                            <Form.Check
                                inline
                                type="checkbox"
                                label="Frente"
                                isInvalid={tentouEnviar && !!erros.silk}
                                checked={frente === "frente"}
                                onChange={(e) => setFrente(e.target.checked ? "frente" : "")}
                            />

                            <Form.Check
                                inline
                                type="checkbox"
                                label="Verso"
                                isInvalid={tentouEnviar && !!erros.silk}
                                checked={verso === "verso"}
                                onChange={(e) => setVerso(e.target.checked ? "verso" : "")}
                            />
                            <Form.Control.Feedback type="invalid" className="d-block">
                                {erros.silk}
                            </Form.Control.Feedback>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <FormLabel className={styles.formControl}>
                                Quantidade Batidas
                            </FormLabel>

                            <InputGroup className={styles.QTDbatidas}>
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => setQtd(prev => Math.max(0, prev - 1))}
                                >
                                    −
                                </Button>

                                <FormControl
                                    value={qtd}
                                    readOnly
                                    className={"text-center"}
                                    isInvalid={tentouEnviar && !!erros.qtdBatidas}

                                />

                                <Button
                                    variant="outline-secondary"
                                    onClick={() => setQtd(prev => prev + 1)}
                                >
                                    +
                                </Button>
                            </InputGroup>
                            <Form.Control.Feedback type={"invalid"} className="d-block">
                                {erros.qtdBatidas}
                            </Form.Control.Feedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <FormGroup>
                            <FormLabel className={styles.formControl}>Estoque</FormLabel>
                        </FormGroup>
                        <Form.Check
                            inline
                            type="radio"
                            label="Fenix"
                            value={"fenix"}
                            checked={estoque === "fenix"}
                            onChange={(e) => setEstoque(e.target.value)}
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="MakPlast"
                            value={"makplast"}
                            checked={estoque === "makplast"}
                            onChange={(e) => setEstoque(e.target.value)}
                        />

                        <Form.Check
                            inline
                            type="radio"
                            label="MP"
                            value={"mp"}
                            checked={estoque === "mp"}
                            onChange={(e) => setEstoque(e.target.value)}
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="ArtVac"
                            value={"artvac"}
                            checked={estoque === "artvac"}
                            onChange={(e) => setEstoque(e.target.value)}
                        />
                    </Col>

                    <Col md={3}>
                        <FormGroup>
                            <FormLabel className={styles.formControl}>Arte</FormLabel>
                            <FormControl
                                type={"text"}
                                value={arte}
                                onChange={(e) => setArte(e.target.value)}
                                isInvalid={tentouEnviar && !!erros.arte}
                            />
                            <Form.Control.Feedback type={"invalid"} className={"d-block"}>
                                {erros.arte}
                            </Form.Control.Feedback>
                        </FormGroup>
                    </Col>


                    <Col md={2}>
                        <FormGroup>
                            <FormLabel className={styles.formControl}>Vendedor</FormLabel>
                            <Form.Select value={vendedor}
                                         onChange={(e) => setVendedor(e.target.value)}
                                         isInvalid={tentouEnviar && !!erros.vendedor}>
                                <option value="">Selecione</option>
                                {Vendedores.map((v) => (<option key={v.value} value={v.value}>
                                    {v.label}
                                </option>))}

                            </Form.Select>
                            <Form.Control.Feedback type={"invalid"} className={"d-bloc"}>
                                {erros.vendedor}
                            </Form.Control.Feedback>
                        </FormGroup>

                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <FormLabel className={styles.formControl}>Status do Pedido</FormLabel>
                            <Form.Select value={status}
                                         onChange={(e) => setStatus(e.target.value)}
                                         isInvalid={tentouEnviar && !!erros.status}>
                                <option value="">Selecione</option>
                                {StatusPedido.map((v) => (<option key={v.value} value={v.value}>
                                    {v.label}
                                </option>))}
                            </Form.Select>
                            <Form.Control.Feedback type={"invalid"} className={"d-block"}>
                                {erros.status}
                            </Form.Control.Feedback>
                        </FormGroup>
                    </Col>

                    <Col md={2}>
                        <FormGroup>
                            <FormLabel className={styles.formControl}>
                                Comissão %
                            </FormLabel>

                            <InputGroup className={styles.QTDbatidas}>
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => setQtdComissao(prev => Math.max(0, prev - 1))}
                                >
                                    −
                                </Button>

                                <FormControl
                                    value={qtdComissao}
                                    readOnly
                                    className="text-center"
                                    isInvalid={tentouEnviar && !!erros.qtdComissao}

                                />

                                <Button
                                    variant="outline-secondary"
                                    onClick={() => setQtdComissao(prev => prev + 1)}
                                >
                                    +
                                </Button>
                                <Form.Control.Feedback type={"invalid"} className={"d-block"}>
                                    {erros.qtdComissao}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </FormGroup>

                    </Col>

                </Row>
                <Row>
                    <Col md={2}>
                        <FormGroup>
                            <FormLabel className={styles.formControl}>
                                Tipo Pagamento:
                            </FormLabel>
                            <FormControl
                                type={"text"}
                                value={tipoPagamento}
                                onChange={(e) => setTipoPagamento(e.target.value)}
                                isInvalid={tentouEnviar && !!erros.tipoPagamento}
                            />
                            <Form.Control.Feedback type={"invalid"} className={"d-block"}>
                                {erros.tipoPagamento}
                            </Form.Control.Feedback>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <FormLabel className={styles.formControl}>
                                Tipo Frete:
                            </FormLabel>
                            <FormControl
                                type={"text"}
                                value={tipoFrete}
                                onChange={(e) => setTipoFrete(e.target.value)}
                                isInvalid={tentouEnviar && !!erros.tipoFrete}
                            />
                            <Form.Control.Feedback type={"invalid"} className={"d-block"}>
                                {erros.tipoPagamento}
                            </Form.Control.Feedback>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <FormLabel className={styles.formControl}>
                                Cidade:
                            </FormLabel>
                            <FormControl
                                type={"text"}
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}
                                isInvalid={tentouEnviar && !!erros.cidade}
                            />
                            <Form.Control.Feedback type={"invalid"} className={"d-block"}>
                                {erros.cidade}
                            </Form.Control.Feedback>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <FormLabel className={styles.formControl}>
                                Cep:
                            </FormLabel>
                            <FormControl
                                type={"text"}
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                                isInvalid={tentouEnviar && !!erros.cep}
                            />
                            <Form.Control.Feedback type={"invalid"} className={"d-block"}>
                                {erros.cep}
                            </Form.Control.Feedback>
                        </FormGroup>
                    </Col>
                </Row>

                <div className={styles.divSub}>
                    <h4 className={styles.itensPedido}>Itens do Pedido</h4>
                </div>
                <Row>
                    <Col md={7}>
                        <FormGroup>
                            <FormLabel className={styles.formControl}>Descrição</FormLabel>
                            <FormControl
                                type={"text"}
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                className="w-250"
                            />
                        </FormGroup>
                    </Col>
                    <Col md={1}>
                        <FormGroup>
                            <FormLabel className={styles.formControl}>Preço</FormLabel>
                            <FormControl
                                type={"Number"}
                                value={preco}
                                onChange={(e) => setPreco(e.target.value)}
                                className="w-100"
                            />
                        </FormGroup>
                    </Col>
                    <Col md={1}>
                        <FormGroup>
                            <FormLabel className={styles.formControl}>Tipo Unidade</FormLabel>
                            <FormSelect value={tipoUnidade} onChange={(e) => setTipoUnidae(e.target.value)}
                                        className="w-100">
                                <option value="">Selecione</option>
                                {TipoUnidade.map((v) => (<option key={v.value} value={v.value}>
                                    {v.label}
                                </option>))}
                            </FormSelect>
                        </FormGroup>
                    </Col>
                    <Col md={1}>
                        <FormGroup>
                            <FormLabel className={styles.formControl}>Quantidade</FormLabel>
                            <FormControl
                                type={"Number"}
                                value={quantidade}
                                onChange={(e) => setQuantidade(e.target.value)}
                                className="w-100"
                            />
                        </FormGroup>
                    </Col>
                    <Col md={1}>
                        <FormGroup>
                            <FormLabel className={styles.formControl}>Valor Total</FormLabel>
                            <FormControl
                                type={"text"}
                                readOnly
                                value={formatarMoeda(calcularTotalItemAtual())}
                                className="w-100"
                            />
                        </FormGroup>
                    </Col>
                    <Col md={1} className="d-flex align-items-end">
                        <FormGroup className="w-100">
                            <FormLabel className={styles.formControl}>
                                &nbsp;
                            </FormLabel>

                            <Button
                                variant={indiceEditando !== null ? "warning" : "primary"}
                                className="w-100"
                                type="button"
                                onClick={handleAdicionar}
                            >
                                {indiceEditando !== null ? "Salvar" : "Adicionar"}
                            </Button>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <div className={styles.tableStyle}>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Descrição</th>
                                <th>Preço</th>
                                <th>Quantidade</th>
                                <th>Total</th>
                                <th>Ações</th>
                            </tr>
                            </thead>
                            <tbody>
                            {itens.length === 0 && (<tr>
                                <td colSpan={5} className="text-center">
                                    Nenhum item adicionado
                                </td>
                            </tr>)}
                            {itens.map((item, index) => (<tr key={index}>
                                <td>{item.descricao}</td>
                                <td>{item.preco}</td>
                                <td>{item.quantidade}</td>
                                <td>{formatarMoeda(calcularTotalItem(item))}</td>
                                <td>
                                    <Button
                                        size="sm"
                                        variant="info"
                                        className="me-2"
                                        onClick={() => editarItem(index)}
                                    >
                                        Editar
                                    </Button>

                                    <Button
                                        size="sm"
                                        variant="danger"
                                        onClick={() => removerItem(index)}
                                    >
                                        Excluir
                                    </Button>
                                </td>
                            </tr>))}
                            </tbody>

                        </Table>
                    </div>
                    <Col md={6}>

                    </Col>
                    <Col md={4}>

                    </Col>
                    <Col md={1}>
                        <label>Total Geral</label>
                    </Col>
                    <Col md={1}>
                        <label>{formatarMoeda(totalGeral)}</label>
                    </Col>
                </Row>

                <Button type={"submit"}
                disabled={!loading}>
                    {loading ? "Enviar" : "Carregando..."}
                </Button>

            </Form>
        </Container>
    </div>)

}

export default EmissaoPedidos;