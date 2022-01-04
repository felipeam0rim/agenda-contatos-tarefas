import SubmitButton from '../project/SubmitButton';
import styles from './AgendaTarefas.module.css'
import { Link } from 'react-router-dom'
import Tarefas from './Tarefas';

function AgendaTarefas() {
    return (
      <div className={styles.titulo}>
        <h1>Agenda de Tarefas</h1>
        <Link to="/agenda-tarefas-adicionar">
          <SubmitButton type="button" text="Adicionar Nova Tarefa" />
        </Link>
        <div>
          <Tarefas />
        </div>
      </div>
    );
  }
  
  export default AgendaTarefas;