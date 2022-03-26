import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";

function Assento() {
    const { idSessao } = useParams();
    const [assentos, setAssentos] = useState({
        id: 0,
        name: "",
        day: {
            id: 0,
            weekday: "",
            date: "",
        },
        movie: {
            id: 0,
            title: "",
            posterURL: "",
            overview: "",
            releaseDate: "",
        },
        seats: [
            {
                id: 0,
                name: "",
                isAvailable: null,
            }]
    });

    useEffect(() => {
        axios
            .get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
            .then((response) => {
                const { data } = response;
                setAssentos(data);
            })
            .catch(err => console.log(err.response));
    }, [idSessao])

    return (
        <main className="Assento">
            <h3>Selecione o(s) assento(s)</h3>
            <section>
                <div className="assentos">
                    <div className="centralizado">
                        {
                            assentos.seats.map((assento) => {
                                return (
                                    <div className="assento-numero" key={assento + 1}>{assento.name}</div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>

            <div className="legenda">
                <article>
                    <div className="cor-selecionada">
                    </div>
                    <p>Selecionado</p>
                </article>

                <article>
                    <div className="cor-disponivel">
                    </div>
                    <p>Disponível</p>
                </article>

                <article>
                    <div className="cor-indisponivel">
                    </div>
                    <p>Indisponível</p>
                </article>
            </div>

            <div className="form">
                <form>
                    <label for="nome">Nome do comprador:</label>
                    <input id="nome" name="nome" type="text" placeholder="Digite seu nome..."></input>
                    <label for="cpf" >CPF do comprador:</label>
                    <input id="cpf" name="cpf" type="text" placeholder="Digite seu CPF..."></input>
                    <div className="botao">
                        <button>Reservar assento(s)</button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Assento;