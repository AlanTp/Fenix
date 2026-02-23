import React from "react";
import styles from '../Estilos/Home.module.css';
import NavBar from '../Modelos/NavBar';


function Home() {


    return (
        <div className={styles.page}>

            < NavBar/>
            <div className={styles.content}/>

        </div>

    )

}

export default Home;