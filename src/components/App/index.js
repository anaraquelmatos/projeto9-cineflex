import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecalho from "../Cabecalho";
import Filmes from "../Filmes";
import Sessao from "../Sessao";
import Assento from "../Assento";

function App() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path="/" element={<Filmes />} />
                <Route path="/sessoes/:idFilme" element={<Sessao />} />
                <Route path="/assentos/:idSessao" element={<Assento />} />
            </Routes>
        </BrowserRouter>

    )
}

export default App;