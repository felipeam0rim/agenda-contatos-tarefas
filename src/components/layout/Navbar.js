import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="/">
        <h2 className={styles.agenda}>
          Agenda<h3>.com</h3>
        </h2>
      </a>
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
  );
}

export default Navbar;
