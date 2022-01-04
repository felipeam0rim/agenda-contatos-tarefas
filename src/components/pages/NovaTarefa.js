import TarefaForm from "./TarefaForm";
import { useNavigate } from "react-router-dom";

export default function NovaTarefa() {

    const navigate = useNavigate()

    function createPost(tarefa) {
        fetch('http://localhost:5000/tarefas', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(tarefa),
        })
            .then((resp) => resp.json())
            .then((data) => {
                alert("Tarefa criada com sucesso")    
                navigate('/agenda-tarefas', {replace: true})
            })
    }

    return(
        <div>
            <TarefaForm handleSubmit={createPost}/>
        </div>
    )
}