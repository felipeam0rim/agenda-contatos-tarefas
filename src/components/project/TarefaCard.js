import { Link } from "react-router-dom"
import styles from './TarefaCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

export default function TarefaCard({id, name, descricao, data, hora, handleRemove}) {
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
    return (
        <>
        <div className={styles.tarefa_card}>
            <h4>{name}</h4>
                <p>
                    <span>Data: {data}</span>
                </p>
                <p>
                    <span>Hora: {hora}</span>
                </p>
                <p>
                    <span>{descricao}</span>
                </p>
            <div className={styles.tarefa_card_actions}>
                <Link to={'/tarefas/' + id}>
                    <BsPencil /> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
        </>
    )
}