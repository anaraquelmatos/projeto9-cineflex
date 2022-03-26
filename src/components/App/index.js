import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecalho from "../Cabecalho";
import Filmes from "../Filmes";
import Sessao from "../Sessao";

function App() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path="/" element={<Filmes />} />
                <Route path="/sessoes/:idFilme" element={<Sessao />} />
            </Routes>
        </BrowserRouter>

    )
}

export default App;