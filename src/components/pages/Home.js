import styles from "./Home.module.css";
import logo from "../../img/icon-contato.png";
import Logos from "../layout/Logos";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className={styles.home_container}>
        <h1>Bem-vindo(a) a sua Agenda Virtual</h1>
        <p>Comece a gerenciar seus contatos e tarefas agora mesmo!</p>
      </section>
      <div className={styles.home_icons}>
        <Link to="/agenda-contatos">
          <img src={logo} alt="Agenda Contatos Imagem Link" height="240" />
        </Link>
        <Logos />
      </div>
    </>
  );
}

export default Home;
