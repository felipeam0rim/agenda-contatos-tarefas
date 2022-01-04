import {Link} from 'react-router-dom'
import SubmitButton from '../project/SubmitButton';
import styles from './AgendaContatos.module.css'
import Contatos from './Contatos'

function AgendaContatos() {
    return (
      <div className={styles.titulo}>
        <h1>Agenda de Contatos</h1>
            <Link to="/agenda-contatos-adicionar">
              <SubmitButton type="button" text="Adicionar Novo Contato" />
            </Link>
        <div>
          <Contatos />
        </div>
      </div>
    );
  }
  
  export default AgendaContatos;