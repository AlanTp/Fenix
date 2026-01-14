import {Navbar} from "react-bootstrap";
import logo from "../imagens/logo.png";
import styles from "../Estilos/Batidas.module.css";

function CadastroReceitas() {


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
            </div>
        )
}

export default CadastroReceitas;