import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '../project/Input.module.css'
import Input from './Input';
import SubmitButton from './SubmitButton'

export default function EditTarefa({tarefaData}) {

    const navigate = useNavigate()

    const [tarefa, setTarefa] = useState(tarefaData || []) 

    const submit = (e) => {
        e.preventDefault()
        editTarefa(tarefa)
    }

    function editTarefa() {
        fetch(`http://localhost:5000/tarefas/${tarefa.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tarefa),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setTarefa(data)
                alert("Tarefa Editada com sucesso")    
                navigate('/agenda-tarefas', {replace: true})
            },)
    }

    function handleChange (e) {
        setTarefa ({...tarefa, [e.target.name]: e.target.value})
      }

    return(

        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome da Tarefa"
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
            <div className={styles.form_control}>
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
            </div>
            <div>
                <SubmitButton type="submit" text="Concluir Edição" />
            </div>
        </form>
    )
}