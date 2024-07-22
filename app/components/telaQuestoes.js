import styles from './TelaQuestoes.module.css'
import Cards from './cards';
import { useEffect, useState } from 'react';

export default function TelaQuestoes(){
    const [questoes, setQuestoes] = useState([{pergunta: 'O que é JSX?', resposta: 'JSX é uma sintaxe para escrever HTML dentro do JS'}, {pergunta: ' O React é __ ', resposta: 'uma biblioteca JavaScript para construção de interfaces'}, {pergunta: 'Componentes devem iniciar com __ ', resposta: 'letra maiúscula'}, {pergunta: 'O ReactDOM nos ajuda __ ', resposta: 'interagindo com a DOM para colocar componentes React na mesma'}]);
    function embaralhador(){
        return Math.random() - 0.5;
    }
    const [arrayRespostas, setArrayRespostas] = useState([]);
    function pushElement(img){
        setArrayRespostas([...arrayRespostas, img]);
    }
    useEffect(() => {
        setQuestoes(()=> {
            return questoes.sort(embaralhador)
        }, [])
    })
    console.log(arrayRespostas)
    return (
        <div className={styles.telaQuestoes}>
            <Header titulo="ZapRecall"/>
            <Cards pushElement={pushElement} questoes={questoes}/>
            <Footer questoes={questoes} estadoResposta={arrayRespostas}/>
        </div>
    );
}

function Header(props){
    return (
        <div className={styles.header}>
            <img className={styles.logo} src='/img/logo.png'/>
            <h1 className={styles.h1}>{props.titulo}</h1>
        </div>
    );
}

function Footer(props){
    if(props.estadoResposta.length===0){
        return (
            <div className={styles.footer}>
            <p>0/{props.questoes.length} CONCLUÍDOS</p>
        </div>
        )
    }else if(props.estadoResposta.length>0 && props.estadoResposta.length<4){
        return (
            <div className={styles.footer}>
                <p>{props.estadoResposta.length}/{props.questoes.length} CONCLUÍDOS</p>
                <div className={styles.respostas}>
                    {props.estadoResposta.map((infoResposta) => {
                        return (
                            <img src={infoResposta}/>
                        )
                    })}
                </div>
            </div>
        );
    }else{
        if(props.estadoResposta.includes('/img/errado.png')){
            return (
                <div className={styles.footer}>
                <div className={styles.mensagem}>
                    <img src='/img/sad.png'/>
                    <strong> Putz...</strong>
                </div>
                <p>Ainda faltam alguns...</p>
                <p>Mas não desanime!</p>
                <p>{props.estadoResposta.length}/{props.questoes.length} CONCLUÍDOS</p>
                <div className={styles.respostas}>
                    {props.estadoResposta.map((infoResposta) => {
                        return (
                            <img src={infoResposta}/>
                        )
                    })}
                </div>
            </div>
            )
        }
        return (
            <div className={styles.footer}>
                <div className={styles.mensagem}>
                    <img src='/img/party.png'/>
                    <strong> Parabéns!</strong>
                </div>
                <p>Você não esqueceu de nehnum flashcard!</p>
                <p>{props.estadoResposta.length}/{props.questoes.length} CONCLUÍDOS</p>
                <div className={styles.respostas}>
                    {props.estadoResposta.map((infoResposta) => {
                        return (
                            <img src={infoResposta}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}