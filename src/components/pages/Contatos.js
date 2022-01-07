import Container from "../layout/Container";
import styles from "./Contatos.module.css";
import ContatoCard from "../project/ContatoCard";
import { useState, useEffect } from "react";

function Contatos() {
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/contatos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setContatos(data);
      });
  }, []);

  function removeContato(id) {
    fetch(`http://localhost:5000/contatos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setContatos(contatos.filter((contato) => contato.id !== id));
        alert("Contato removido com sucesso!");
      });
  }

  function sortContacts(a, b) {
    a = a.name
      .toLowerCase()
      .replace(/[àáâãäå]/, "a")
      .replace(/[èéêë]/, "e")
      .replace(/[ìíîï]/, "i")
      .replace(/[òóôõö]/, "o")
      .replace(/[ùúûü]/, "u")
      .replace(/[ç]/, "c")
      .replace(/[^a-z0-9]/gi, "");
    b = b.name
      .toLowerCase()
      .replace(/[àáâãäå]/, "a")
      .replace(/[èéêë]/, "e")
      .replace(/[ìíîï]/, "i")
      .replace(/[òóôõö]/, "o")
      .replace(/[ùúûü]/, "u")
      .replace(/[ç]/, "c")
      .replace(/[^a-z0-9]/gi, "");
    return a < b ? -1 : a > b ? 1 : 0;
  }

  const contacts = contatos.sort(sortContacts);

  return (
    <div className={styles.contact_details}>
      <div className={styles.details_container}>
        <h2>Meus Contatos</h2>
      </div>
      <Container customClass="start">
        {contacts.length > 0 &&
          contacts.map((contato) => {
            return (
              <ContatoCard
                id={contato.id}
                name={contato.name}
                number={contato.number}
                key={contato.id}
                handleRemove={removeContato}
                email={contato.email}
              />
            );
          })}
      </Container>
    </div>
  );
}

export default Contatos;
