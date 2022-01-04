import styles from './Contato.module.css'
import Container from '../layout/Container'
import EditContato from '../project/EditContato'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../project/BackButton'


function Contato() {
    const { id } = useParams()

    const [contato, setContato] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/contatos/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', },
            })
        .then((resp) => resp.json())
        .then((data) => {
            setContato(data)
            setLoading(false)
        })
        .catch( error => setLoading(false))
    }, [id])

    if ( loading ) return <p>Loading...</p>

    return (
            <Container customClass="column">
                <Link to="/agenda-contatos">
                    <BackButton type="button" text="Voltar" />
                </Link>
                <div  className={styles.contato_content}>
                    <div className ={styles.contato_details}>
                        <h1>
                            Contato: {contato.name}
                        </h1>
                        <div>
                            Número: {contato.number}
                        </div>
                        <div>
                            E-mail: {contato.email}
                        </div>
                    </div>
                    <EditContato contatoData={contato} />
                </div>
            </Container> 
    )
}

export default Contato