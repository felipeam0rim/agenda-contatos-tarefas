import { useNavigate } from 'react-router-dom'
import ContatoForm from './ContatoForm'

function NovoContato() {
  const navigate = useNavigate()

  function createPost(contato) {

    fetch('http://localhost:5000/contatos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contato),
    })
      .then((resp) => resp.json())
      .then((data) => {
        alert("Contato criado com sucesso")    
        navigate('/agenda-contatos', {replace: true})
      })
  }

  return (
    <div>
      <ContatoForm handleSubmit={createPost}/>
    </div>
  )
}

export default NovoContato