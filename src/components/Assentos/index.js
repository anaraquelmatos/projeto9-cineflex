import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import axios from "axios";
import Assento from "../Assento";
import Rodape from "../Rodape";
import "./style.css";

function Assentos() {
    const { idSessao } = useParams();
    const navigate = useNavigate;
    const [totalAssentos, setTotalAssentos] = useState([]);
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
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

    const { day, movie, name } = assentos;
    const { weekday } = day;
    const { title, posterURL } = movie;
    const hifen = "-";

    useEffect(() => {
        axios
            .get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
            .then((response) => {
                const { data } = response;
                setAssentos(data);
            })
            .catch(err => console.log(err.response));
    }, [idSessao])

    function reservarAssento(event) {

        event.preventDefault();

        navigate("/sucesso", {state: totalAssentos, nome, cpf, title, weekday, name});

        axios
            .post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`, {
                ids: totalAssentos,
                name: nome,
                cpf: cpf
            });
    }

    return Object.values(assentos).length > 0 ? (
        <>
            <main className="Assento">
                <h3>Selecione o(s) assento(s)</h3>
                <section>
                    <div className="assentos">
                        <div className="centralizado">
                            {
                                assentos.seats.map((assento) => {
                                    return (
                                        <Assento key={assento + 1 + assento.name} name={assento.name}
                                            isAvailable={assento.isAvailable} id={assento.id}
                                            setTotalAssentos={setTotalAssentos} totalAssentos={totalAssentos} />
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

                <div className="form" onSubmit={reservarAssento}>
                    <form>
                        <label for="campoNome">Nome do comprador:</label>
                        <input id="campoNome" name="nome" type="text" placeholder="Digite seu nome..." required value={nome} onChange={e => setNome(e.target.value)}></input>
                        <label for="campoCPF" >CPF do comprador:</label>
                        <input id="campoCPF" name="cpf" type="number" placeholder="Digite seu CPF..." required value={cpf} onChange={e => setCpf(e.target.value)}></input>
                        <div className="botao">
                            <Link to={`/sucesso`}>
                            <button type="submit">Reservar assento(s)</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </main>
            <Rodape title={title} posterURL={posterURL} weekday={weekday} name={name} hifen={hifen} />
        </>
    ) : <></>;
}

export default Assentos;