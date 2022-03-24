import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecalho from "../Cabecalho";
import Filmes from "../Filmes";


function App() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path="/" element={<Filmes />} />
            </Routes>
        </BrowserRouter>

    )
}

export default App;