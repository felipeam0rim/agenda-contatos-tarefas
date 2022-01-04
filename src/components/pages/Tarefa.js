import styles from './Tarefa.module.css'
import Container from '../layout/Container'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../project/BackButton'
import EditTarefa from '../project/EditTarefa'


export default function Tarefa() {
    const { id } = useParams()

    const [tarefa, setTarefa] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/tarefas/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setTarefa(data)
                setLoading(false)
            })
            .catch(error => setLoading(false))
    }, [id])

    if (loading) return <p>Loading...</p>

    return (

        <Container customClass="column">
            <Link to="/agenda-tarefas">
                <BackButton type="button" text="Voltar" />
            </Link>
            <div className={styles.tarefa_content}>
                <div className={styles.tarefa_details}>
                    <h1>
                        Tarefa: {tarefa.name}
                    </h1>
                    <div>
                        Data: {tarefa.data}
                    </div>
                    <div>
                        Hora: {tarefa.hora}
                    </div>
                </div>
                <EditTarefa tarefaData={tarefa} />
            </div>
        </Container >

    )
}