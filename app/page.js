import Image from "next/image";
import styles from "./page.module.css";
import TelaInicial from './components/telaInicial';

export default function Home() {
  return (
    <div className={styles.tela}>
      <TelaInicial />
    </div>
  )
}