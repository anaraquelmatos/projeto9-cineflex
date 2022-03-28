import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecalho from "../Cabecalho";
import Filmes from "../Filmes";
import Sessoes from "../Sessoes";
import Assentos from "../Assentos";
import Sucesso from "../Sucesso";

function App() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path="/" element={<Filmes />} />
                <Route path="/sessoes/:idFilme" element={<Sessoes />} />
                <Route path="/assentos/:idSessao" element={<Assentos />} />
                <Route path="/sucesso" element={<Sucesso />} />
            </Routes>
        </BrowserRouter>

    )
}

export default App;