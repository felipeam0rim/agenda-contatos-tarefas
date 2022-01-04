import styles from './NovoContato.module.css'
import Input from '../project/Input';
import { useState } from 'react'
import SubmitButton from '../project/SubmitButton';

function ContatoForm({handleSubmit, contatoData}) {
  
  const [contato, setContato] = useState(contatoData || {})
  
  const submit = async (e) => {
    e.preventDefault()

    const result = await fetch(`http://localhost:5000/contatos?name=${contato.name}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', },
    }).then((resp) => resp.json())

    if ( result.length === 0 ){
      handleSubmit(contato)
    }
    else {
      let opc = window.confirm("Já existe um contato com esse nome, deseja continuar?")
      if (opc === true) {
        e.preventDefault()
        handleSubmit(contato)
      }
      else {
        e.preventDefault()
      }
    }
  }

  function handleChange (e) {
      setContato ({...contato, [e.target.name]: e.target.value})
      }
      
  return (
    <div className={styles.titulo}>
        <form onSubmit={submit} className={styles.form_control}>
          <h1 className={styles.novo_contato_container}>
            Novo Contato
          </h1>
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
            <SubmitButton type="submit" text="Adicionar Contato" />
          </div>
        </form>
    </div>
  );
  }
  
  export default ContatoForm;