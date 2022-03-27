import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Rodape from "../Rodape";
import "./style.css";

function Sessoes() {

    const { idFilme } = useParams();
    const [sessoes, setSessoes] = useState({
        id: 0,
        title: "",
        posterURL: "",
        overview: "",
        releaseDate: "",
        days: [
            {
                id: 0,
                weekday: "",
                date: "",
                showtimes: [
                    {
                        name: "",
                        id: 0
                    }
                ]
            },
        ]
    });


    useEffect(() => {
        axios
            .get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
            .then((response) => {
                const { data } = response;
                setSessoes(data);
            })
    }, [idFilme])

    const { title, posterURL } = sessoes;

    return (
        <>
            <main className="Sessao">
                <h3>Selecione o horário</h3>
                {
                    sessoes.days.map((sessao) => {
                        return (<div className="programacao" key={sessao + sessao.id + 1}>
                            <div className="informacoes" >
                                <p>{sessao.weekday} - {sessao.date}</p>
                                <div className="horarios">
                                    {
                                        sessao.showtimes.map((horario) => {

                                            return (

                                                <Link to={`/assentos/${horario.id}`}>
                                                    <div className="horario">{horario.name}</div>
                                                </Link>

                                            );

                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        );
                    })

                }

            </main>

            <Rodape title={title} posterURL={posterURL} />
        </>
    )
}

export default Sessoes;