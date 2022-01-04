import styles from './ContatoCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function ContatoCard ({id, name, number, handleRemove, email}){
    
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
      }

    return (
        <div className={styles.contato_card}>
            <h4>{name}</h4>
                <p>
                    <span>Número: {number}</span>
                </p>
                <p>
                    <span>{email}</span>
                </p>
            <div className={styles.contato_card_actions}>
                <Link to={'/contatos/' + id}>
                    <BsPencil /> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}

export default ContatoCard