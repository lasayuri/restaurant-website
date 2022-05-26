import styles from './Cardapio.module.scss';
import {ReactComponent as Logo } from "assets/logo.svg"; // "../../assets/logo.svg" tirei o ../../ por causa do baseUrl no tsconfig
import Buscador from './Buscador';
import React, { useState } from 'react';
import Filtros from 'pages/Cardapio/Filtros';
import Ordenador from 'pages/Cardapio/Ordenador';
 //para usar o logo como uma tag
import Itens from "./Itens";

export default function Cardapio() {
    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState("");

    return (
        <main>
            <nav className={styles.menu}>
                {/* <img src={logo} alt='logo do aluroni' /> */}
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca} />
                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro} />
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
                </div>
                <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
            </section>
        </main>
    )
}