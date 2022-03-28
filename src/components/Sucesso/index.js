import { Link } from "react-router-dom";
import "./style.css";

function Sucesso() {
    return (
        <main className="Sucesso">
            <h3>Pedido feito com sucesso!</h3>
            <section>
                <article>
                    <div className="bloco">
                        <h4>Filme e sessão</h4>
                        <p>Teste</p>
                        <p>Teste 2</p>
                    </div>
                </article>
                <article>
                    <div className="bloco">
                        <h4>Ingressos</h4>
                        <p>Assento</p>
                        <p>Assento</p>
                    </div>
                </article>
                <article>
                    <div className="bloco">
                        <h4>Comprador</h4>
                        <p>Nome:</p>
                        <p>CPF:</p>
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