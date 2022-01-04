import { useState } from "react"
import SubmitButton from "../project/SubmitButton"
import Input from "../project/Input"
import styles from './NovaTarefa.module.css'

export default function TarefaForm({handleSubmit, tarefaData}) {

    const [tarefa, setTarefa] = useState(tarefaData || {})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(tarefa)
    }

    function handleChange(e) {
        setTarefa ({...tarefa, [e.target.name]: e.target.value})
        }

    return(
        <div className={styles.titulo}>
            <form className={styles.form_control} onSubmit={submit}>
                <h1 className={styles.nova_tarefa_container}>
                    Nova Tarefa
                </h1>
                <Input
                    type="text"
                    text="Título da Tarefa"
                    name="name"
                    placeholder="Digite o título da tarefa"
                    handleOnChange={handleChange}
                    value={tarefa.name}    
                />
                <Input
                    type="text"
                    text="Data da Tarefa"
                    name="data"
                    placeholder="Digite a data da tarefa"
                    handleOnChange={handleChange}
                    value={tarefa.data}    
                />
                <Input
                    type="text"
                    text="Hora da Tarefa"
                    name="hora"
                    placeholder="Digite a hora da tarefa"
                    handleOnChange={handleChange}
                    value={tarefa.hora}    
                />
                <label htmlFor='descricao'>Descrição da Tarefa:</label>
                <textarea
                    cols="22"
                    rows="6"
                    type="text"
                    name="descricao"
                    id="descricao"
                    placeholder="Digite a descrição da tarefa"
                    onChange={handleChange}
                    value={tarefa.descricao}>
                </textarea>
                <div>
                    <SubmitButton type="submit" text="Adicionar Tarefa" />
                </div>
            </form>
        </div>
    )
}