import styles from './Card.module.css';
import { useState } from 'react';

export default function Card(props){
    const [card, setCard] = useState(1);
    const [estadoResposta, setEstadoResposta] = useState();
    function revelarPergunta(){
        setCard(2);
    }
    function revelarResposta(){
        setCard(3);
    }
    if(card === 1){
        return (
            <>
                <div className={styles.card}>
                    <Texto numero={props.numero}/>
                    <a className={styles.comecar} onClick={revelarPergunta}><img src='/img/vector.png'/></a>
                </div>
            </>
        )
    }else if(card === 2){
        return (
            <div className={styles.cardRevelado}>
                <Pergunta pergunta={props.pergunta}/>
                <a className={styles.revelar} onClick={revelarResposta}><img src='/img/revelar.png'/></a>
            </div>
        );
    }else if(card === 3){
        return (
            <div className={styles.cardRevelado}>
                <Resposta resposta={props.resposta}/>
                <div className={styles.alternativas}>
                    <button onClick={() => {
                        setEstadoResposta('/img/errado.png');
                        props.pushElement('/img/errado.png');
                        setCard(4);
                    }} className={styles.naoLembro}>Não lembrei</button>
                    <button onClick={() => {
                        setEstadoResposta('/img/quase.png');
                        props.pushElement('/img/quase.png');
                        setCard(4);
                    }} className={styles.quaseNaoLembro}>Quase não lembrei</button>
                    <button onClick={() => {
                        setEstadoResposta('/img/certo.png');
                        props.pushElement('/img/certo.png');
                        setCard(4);
                    }} className={styles.lembrei}>Zap!</button>
                </div>
            </div>
        );
    }else{
        if(estadoResposta === '/img/errado.png'){
            return (
                <div className={styles.cardRespondido}>
                    <div className={styles.textoErrado}> 
                        <Texto numero={props.numero}/>
                    </div>
                    <img src={estadoResposta}/>
                </div>
            );
        }else if(estadoResposta === '/img/quase.png'){
            return (
                <div className={styles.cardRespondido}>
                    <div className={styles.textoQuase}> 
                        <Texto numero={props.numero}/>
                    </div>
                    <img src={estadoResposta}/>
                </div>
            );
        }else{
            return (
                <div className={styles.cardRespondido}> 
                    <div className={styles.textoCerto}> 
                        <Texto numero={props.numero}/>
                    </div>
                    <img src={estadoResposta}/>
                </div>
            );
        }
    }
}

function Texto(props){
    return (
        <p className={styles.texto}>Pergunta {props.numero}</p>
    );
}

function Pergunta(props){
    return (
        <p className={styles.pergunta}>{props.pergunta}</p>
    );
}

function Resposta(props){
    return (
        <p className={styles.pergunta}>{props.resposta}</p> 
    );
}