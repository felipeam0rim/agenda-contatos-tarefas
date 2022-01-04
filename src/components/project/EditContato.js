import styles from '../project/Input.module.css'
import Input from '../project/Input';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SubmitButton from './SubmitButton';

export default function EditContato({contatoData}) {
  
  const navigate = useNavigate()

  const [contato, setContato] = useState(contatoData || {})
  
  const submit = (e) => {
    e.preventDefault()
    editContato(contato)
  }

  function editContato() {
    console.log('contato:' , contato)
    fetch(`http://localhost:5000/contatos/${contato.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contato),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setContato(data)
        alert("Contato Editado com sucesso")    
        navigate('/agenda-contatos', {replace: true})
      },)
}

  function handleChange (e) {
    console.log('NEW CONTATO', {...contato, [e.target.name]: e.target.value})
    setContato ({...contato, [e.target.name]: e.target.value})
  }
      
  return (
        <form onSubmit={submit} className={styles.form}>
          <Input
            type="text"
            text="Nome do Contato"
            name="name"
            placeholder="Digite o nome do contato"
            handleOnChange={handleChange}
            value={contato.name}
            />
          <Input
            type="tel"
            text="Número do Contato"
            name="number"
            placeholder="Digite o número do contato"
            handleOnChange={handleChange}
            value={contato.number}
            />
             <Input
            type="email"
            text="E-mail do Contato"
            name="email"
            placeholder="Digite o e-mail do contato"
            handleOnChange={handleChange}
            value={contato.email}
            />      
          <div>
            <SubmitButton text="Concluir Edição" type="submit" />
          </div>
        </form>
  );
  }