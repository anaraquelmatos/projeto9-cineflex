import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./style.css";

function Sucesso() {

    const location = useLocation();
    const array = location.state.identificacao;

    return (
        <main className="Sucesso">
            <p className="titulo">Pedido feito</p>
            <p className="tituloContinucao">com sucesso!</p>
            <section>
                <article>
                    <div className="bloco">
                        <h4>Filme e sessão</h4>
                        <p>{location.state.titulo}</p>
                        <p>{location.state.dia} {location.state.horario}</p>
                    </div>
                </article>
                <article>
                    <div className="bloco">
                        <h4>Ingressos</h4>
                        {array.map((arr) =>
                            <p key={arr}>Assento {arr}</p>
                        )}
                    </div>
                </article>
                <article>
                    <div className=" bloco comprador">
                        <h4>Comprador</h4>
                        <p>Nome: {location.state.nome}</p>
                        <p>CPF: {location.state.cpf}</p>
                    </div>
                </article>
            </section>
            <div className="confirmacao">
                <Link to={`/`}>
                    <button type="submit">Voltar pra Home</button>
                </Link>
            </div>
        </main>
    );
}

export default Sucesso;