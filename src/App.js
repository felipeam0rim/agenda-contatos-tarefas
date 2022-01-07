import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import AgendaContatos from "./components/pages/AgendaContatos";
import AgendaTarefas from "./components/pages/AgendaTarefas";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import NovoContato from "./components/pages/NovoContato";
import Contato from "./components/pages/Contato";
import NovaTarefa from "./components/pages/NovaTarefa";
import Tarefa from "./components/pages/Tarefa";

function App() {
  return (
    <Router>
      <Navbar />
      <div
        style={{
          flex: 4,
        }}
      >
        <Routes>
          <Route path="/contatos/:id" element={<Contato />} />
          <Route path="/agenda-contatos-adicionar" element={<NovoContato />} />
          <Route path="/agenda-contatos" element={<AgendaContatos />} />
          <Route path="/agenda-tarefas" element={<AgendaTarefas />} />
          <Route path="/agenda-tarefas-adicionar" element={<NovaTarefa />} />
          <Route path="/tarefas/:id" element={<Tarefa />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
