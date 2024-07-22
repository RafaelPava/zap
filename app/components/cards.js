import Card from './card';
import styles from './Cards.module.css';



export default function Cards(props){
    return (
        <div className={styles.cards}>
            {props.questoes.map((questao, index) => {    
                return (
                    <>
                        <Card pushElement={props.pushElement} pergunta={questao.pergunta} resposta={questao.resposta} numero={index+1} key={index} />
                    </>
                );
            })}
        </div>
    )
}