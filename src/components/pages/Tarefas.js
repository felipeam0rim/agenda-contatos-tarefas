import Container from '../layout/Container'
import styles from './Tarefas.module.css'
import TarefaCard from '../project/TarefaCard'
import { useState, useEffect } from 'react'

export default function Tarefas() {

    const [tarefas, setTarefas] = useState([])

    useEffect (() => {
        fetch('http://localhost:5000/tarefas', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setTarefas(data)
      })
    }, [])

    function removeTarefa(id) {
      fetch(`http://localhost:5000/tarefas/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
          alert('Tarefa removida com sucesso!')
        })
    }

    return (
        <>
        <div className={styles.tarefa_details}>
            <div className={styles.details_container}>
                <h2>Minhas Tarefas</h2>
            </div>
            <Container customClass="start">
                {tarefas.length > 0 &&
                  tarefas.map((tarefa) => {

                  return (<TarefaCard
                    id = {tarefa.id}
                    name = {tarefa.name}
                    descricao = {tarefa.descricao}
                    key = {tarefa.id}
                    data = {tarefa.data}
                    hora = {tarefa.hora}
                    handleRemove = {removeTarefa}
                  />
                ) })}
            </Container>
        </div>
        </>
    )
}