import styles from './Home.module.css'
import logo from '../../img/agendaicon2.png';
import { Link } from 'react-router-dom'

function Home() {
    return (
      <section className={styles.home_container}>
        <h1>Bem-vindo(a) a sua Agenda Virtual</h1>
        <p>Comece a gerenciar seus contatos e tarefas agora mesmo!</p>
        <Link to="/agenda-contatos">
          <img src={logo} alt="Agenda" height="300"/>
        </Link>
      </section>

    );
  }
  
  export default Home;