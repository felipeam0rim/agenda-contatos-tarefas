import { Link } from "react-router-dom";
import logo from "../../img/icon-tarefa.png";

export default function Logos() {
  return (
    <>
      <Link to="/agenda-tarefas">
        <img src={logo} alt="Agenda Tarefas Imagem link" height="240" />
      </Link>
    </>
  );
}
