import {Link} from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../img/agendaicon2.png';

function Navbar() {
    return (
        <nav className={styles.navbar}>

            <Link to="/">
                <img src={logo} alt="Agenda" width="50" height="50"/>
            </Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/agenda-contatos">Agenda de Contatos</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/agenda-tarefas">Agenda de Tarefas</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar