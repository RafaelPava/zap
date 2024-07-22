"use client"

import { useState } from 'react';
import styles from './TelaInicial.module.css';
import TelaQuestoes from './telaQuestoes';

export default function TelaInicial(){
    const [telaInicial, setTelaInicial] = useState(true);
    function changeTela() {
        setTelaInicial(false)
    }
    return telaInicial ? (
            <div className={styles.telaInicial}>
                <Imagem logo="/img/logo.png"/>
                <Titulo titulo="ZapRecall"/>
                <button className={styles.iniciarRecall} onClick={changeTela}><p className={styles.texto}>Iniciar Recall!!</p></button>
            </div>
        )
             : (<TelaQuestoes />)
    
}

function Imagem(props){
    return (
        <img className={styles.logo} src={props.logo}/>
    );
}

function Titulo(props){
    return (
        <h1 className={styles.h1}>{props.titulo}</h1>
    );
}