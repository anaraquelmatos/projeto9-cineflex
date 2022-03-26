import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Rodape from "../Rodape";
import "./style.css";

function Sessao() {

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
    }, [])


    const {title, posterURL, days} = sessoes;

    return (
        <>
            <main className="Sessao">
                <h3>Selecione o horário</h3>
                {
                    days.map((sessao) => {
                        return <div className="programacao" key={sessao + sessao.id}>
                            <div className="informacoes" >
                                <p>{sessao.weekday} - {sessao.date}</p>
                                {
                                    days.map((horario) => {
                                        <>
                                            <Link to={`/assentos/${horario.name}`}>
                                                <div className="horario">{horario.id}</div>
                                            </Link>
                                        </>
                                    })
                                }

                            </div>
                        </div>
                    })

                }

            </main>

            <Rodape title={title} posterURL={posterURL}/>
        </>
    )
}

export default Sessao;